import { VolumetricLoader } from "../../utils/VolumetricLoader";
import { Constants } from "../../Constants";
import { DisplayMode } from "../../enums";
import { AlOrbitControlEvents } from "..";
import { EventUtils, GetUtils } from "../../utils";
export default AFRAME.registerComponent("al-volume", {
    schema: {
        displayMode: { type: "string" },
        isWebGl2: { type: "boolean" },
        slicesIndex: { type: "number" },
        slicesOrientation: { type: "string" },
        slicesWindowCenter: { type: "number" },
        slicesWindowWidth: { type: "number" },
        src: { type: "string" },
        srcLoaded: { type: "boolean" },
        volumeSteps: { type: "number" },
        volumeWindowCenter: { type: "number" },
        volumeWindowWidth: { type: "number" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        this.loader = new VolumetricLoader();
        this.state = {
            bufferScene: new THREE.Scene(),
            bufferSceneTextureHeight: this.el.sceneEl.canvas.clientHeight,
            bufferSceneTextureWidth: this.el.sceneEl.canvas.clientWidth
        };
        this.bindMethods();
        this.addEventListeners();
        this.createBufferTexture();
        this.debouncedRenderBufferScene = EventUtils.debounce(this.renderBufferScene, Constants.minFrameMS).bind(this);
    },
    bindMethods() {
        this.addEventListeners = this.addEventListeners.bind(this);
        this.createVolumePlane = this.createVolumePlane.bind(this);
        this.handleStack = this.handleStack.bind(this);
        this.onInteraction = this.onInteraction.bind(this);
        this.onInteractionFinished = this.onInteractionFinished.bind(this);
        this.removeEventListeners = this.removeEventListeners.bind(this);
        this.renderBufferScene = this.renderBufferScene.bind(this);
        this.rendererResize = this.rendererResize.bind(this);
        this.createBufferTexture = this.createBufferTexture.bind(this);
    },
    addEventListeners() {
        this.el.sceneEl.addEventListener("rendererresize", this.rendererResize, false);
        this.el.sceneEl.addEventListener(AlOrbitControlEvents.INTERACTION, this.onInteraction, false);
        this.el.sceneEl.addEventListener(AlOrbitControlEvents.INTERACTION_FINISHED, this.onInteractionFinished, false);
    },
    removeEventListeners() {
        this.el.sceneEl.removeEventListener("rendererresize", this.rendererResize);
        this.el.sceneEl.removeEventListener(AlOrbitControlEvents.INTERACTION, this.onInteraction);
        this.el.sceneEl.removeEventListener(AlOrbitControlEvents.INTERACTION_FINISHED, this.onInteractionFinished);
    },
    createBufferTexture() {
        this.state.bufferSceneTexture = new THREE.WebGLRenderTarget(this.state.bufferSceneTextureWidth, this.state.bufferSceneTextureHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter });
        this.el.sceneEl
            .object3D.background = this.state.bufferSceneTexture.texture;
    },
    onInteraction(_event) {
        if (this.state.stackhelper) {
            this.state.stackhelper.steps = 2;
            this.renderBufferScene();
        }
    },
    onInteractionFinished(_event) {
        if (this.state.stackhelper) {
            this.state.stackhelper.steps = this.data.volumeSteps;
            this.debouncedRenderBufferScene();
        }
    },
    createVolumePlane() {
        let targetEntity = this.el.sceneEl.querySelector("#target-entity");
        if (targetEntity) {
            let state = this.state;
            let refGeometry = state.stackhelper.mesh.geometry.clone();
            refGeometry.computeBoundingBox();
            refGeometry.computeBoundingSphere();
            let center = targetEntity.object3D.position
                .clone()
                .add(GetUtils.getGeometryCenter(refGeometry));
            let x = this.state.stackhelper.stack.dimensionsIJK.x;
            let y = this.state.stackhelper.stack.dimensionsIJK.y;
            let z = this.state.stackhelper.stack.dimensionsIJK.z;
            let size = Math.max(x, Math.max(y, z));
            let bufferScenePlaneGeometry = new THREE.PlaneGeometry(size, size);
            state.bufferScenePlaneGeometry = bufferScenePlaneGeometry;
            let bufferScenePlaneMaterial = new THREE.MeshBasicMaterial({
                visible: false
            });
            state.bufferScenePlaneMaterial = bufferScenePlaneMaterial;
            let bufferScenePlaneMesh = new THREE.Mesh(bufferScenePlaneGeometry, bufferScenePlaneMaterial);
            bufferScenePlaneMesh.position.copy(center);
            bufferScenePlaneMesh.renderOrder = Constants.topLayerRenderOrder - 4;
            state.bufferScenePlaneMesh = bufferScenePlaneMesh;
            this.el.setObject3D("mesh", bufferScenePlaneMesh);
        }
    },
    rendererResize() {
        let state = this.state;
        let needsResize = state.bufferSceneTextureWidth !== this.el.sceneEl.canvas.clientWidth ||
            state.bufferSceneTextureHeight !== this.el.sceneEl.canvas.clientHeight;
        if (needsResize && this.data.displayMode === DisplayMode.VOLUME) {
            state.bufferSceneTextureWidth = this.el.sceneEl.canvas.clientWidth;
            state.bufferSceneTextureHeight = this.el.sceneEl.canvas.clientHeight;
            this.createBufferTexture();
            this.renderBufferScene();
        }
    },
    renderBufferScene() {
        if (this.data.displayMode === DisplayMode.VOLUME) {
            this.el.sceneEl.renderer.render(this.state.bufferScene, this.el.sceneEl.camera, this.state.bufferSceneTexture);
        }
    },
    handleStack(stack) {
        const state = this.state;
        const el = this.el;
        state.stack = stack;
        switch (this.data.displayMode) {
            case DisplayMode.SLICES: {
                state.stackhelper = new AMI.StackHelper(state.stack);
                state.stackhelper.bbox.visible = false;
                state.stackhelper.border.color = Constants.colorValues.blue;
                break;
            }
            case DisplayMode.VOLUME: {
                const lutCanvases = el.sceneEl.parentEl.querySelector("#lut-canvases");
                state.lutHelper = new AMI.LutHelper(lutCanvases);
                state.lutHelper.luts = AMI.LutHelper.presetLuts();
                state.lutHelper.lutsO = AMI.LutHelper.presetLutsO();
                state.stackhelper = new AMI.VolumeRenderHelper(state.stack);
                state.stackhelper.textureLUT = state.lutHelper.texture;
                break;
            }
        }
        if (el.object3DMap.mesh) {
            el.removeObject3D("mesh");
        }
        if (this.data.displayMode === DisplayMode.SLICES) {
            el.setObject3D("mesh", this.state.stackhelper);
        }
        else {
            if (this.state.bufferScene.children.length) {
                this.state.bufferScene.remove(this.state.bufferScene.children[0]);
            }
            this.state.bufferScene.add(this.state.stackhelper);
            this.createVolumePlane();
        }
        el.sceneEl.emit(AlVolumeEvents.LOADED, state.stackhelper, false);
    },
    update(oldData) {
        const state = this.state;
        const el = this.el;
        if (!this.data.src) {
            return;
        }
        else if (oldData && oldData.src !== this.data.src) {
            this.loader.load(this.data.src, el).then(stack => {
                this.handleStack(stack);
            });
        }
        else if (oldData &&
            oldData.displayMode !== this.data.displayMode &&
            state.stack) {
            this.removeEventListeners();
            this.handleStack(state.stack);
            this.addEventListeners();
            if (this.data.displayMode === DisplayMode.VOLUME) {
                this.createBufferTexture();
                setTimeout(() => {
                    this.renderBufferScene();
                }, 250);
            }
            else {
                this.el.sceneEl.object3D.background = null;
            }
        }
    },
    tickFunction() {
        if (!this.state.stackhelper) {
            return;
        }
        switch (this.data.displayMode) {
            case DisplayMode.SLICES: {
                this.el.setObject3D("mesh", this.state.stackhelper);
                break;
            }
            case DisplayMode.VOLUME: {
                this.state.bufferScenePlaneMesh.lookAt(this.el.sceneEl.camera.position);
                break;
            }
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.el.removeObject3D("mesh");
        this.removeEventListeners();
        this.el.sceneEl.object3D.background = null;
        if (this.state.bufferScenePlaneMesh) {
            this.state.bufferScenePlaneMesh.remove();
        }
        if (this.state.bufferScenePlaneMaterial) {
            this.state.bufferScenePlaneMaterial.dispose();
        }
        if (this.state.bufferScenePlaneGeometry) {
            this.state.bufferScenePlaneGeometry.dispose();
        }
    }
});
export class AlVolumeEvents {
}
AlVolumeEvents.LOADED = "al-volume-loaded";
AlVolumeEvents.ERROR = "al-volume-error";
AlVolumeEvents.RENDER_LOW = "al-volume-render-low";
AlVolumeEvents.RENDER_FULL = "al-volume-render-full";
