import { Constants } from "../../Constants";
import { ThreeUtils } from "../../utils";
export default AFRAME.registerComponent("al-orbit-control", {
    dependencies: ["camera"],
    schema: {
        animating: { type: "boolean", default: false },
        autoRotate: { type: "boolean" },
        autoRotateSpeed: { default: 2 },
        controlPosition: { type: "vec3" },
        controlTarget: { type: "vec3" },
        dampingFactor: { default: 0.1 },
        enabled: { default: true },
        enableDamping: { default: true },
        enableKeys: { default: true },
        enablePan: { default: true },
        enableRotate: { default: true },
        enableZoom: { default: true },
        keyPanSpeed: { default: 7 },
        maxAzimuthAngle: { type: "number", default: Infinity },
        maxDistance: { default: 8000 },
        maxPolarAngle: { default: 88 },
        minAzimuthAngle: { type: "number", default: -Infinity },
        minDistance: { default: 1 },
        minPolarAngle: { default: 0 },
        rotateSpeed: { default: 0.05 },
        screenSpacePanning: { default: false },
        zoomSpeed: { type: "number", default: 0.5 }
    },
    bindMethods() {
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.canvasWheel = this.canvasWheel.bind(this);
        this.getCameraState = this.getCameraState.bind(this);
        this.handleAnimationCache = this.handleAnimationCache.bind(this);
        this.onWheel = this.onWheel.bind(this);
    },
    addListeners() {
        window.addEventListener("mouseup", this.mouseUp, {
            capture: false,
            once: false,
            passive: true
        });
        window.addEventListener("mousemove", this.mouseMove, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.canvas.addEventListener("mousedown", this.mouseDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.canvas.addEventListener("wheel", this.canvasWheel, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.addEventListener(AlOrbitControlEvents.ANIMATION_STARTED, this.handleAnimationCache, false);
    },
    removeListeners() {
        window.removeEventListener("mouseup", this.mouseUp);
        window.removeEventListener("mousemove", this.mouseMove),
            this.el.sceneEl.canvas.removeEventListener("mousedown", this.mouseDown);
        this.el.sceneEl.canvas.removeEventListener("wheel", this.canvasWheel);
        this.el.sceneEl.removeEventListener(AlOrbitControlEvents.ANIMATION_STARTED, this.handleAnimationCache, false);
    },
    handleAnimationCache(event) {
        this.state.animationCache = event.detail.slerpPath;
    },
    mouseUp(_event) {
        this.state.mouseDown = false;
        document.body.style.cursor = "grab";
        let controls = this.state.controls;
        if (controls.enabled) {
            this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION_FINISHED, { cameraState: this.getCameraState() }, false);
        }
    },
    mouseDown(_event) {
        this.state.mouseDown = true;
        document.body.style.cursor = "grabbing";
    },
    mouseMove(_event) {
        if (this.state.mouseDown) {
            this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION, { cameraState: this.getCameraState() }, false);
        }
    },
    onWheel() {
        const state = this.state;
        state.wheelMarker = false;
        state.wheelCounter2 = state.wheelCounter1;
        setTimeout(() => {
            if (state.wheelCounter2 === state.wheelCounter1) {
                state.wheelMarker = true;
                state.wheelCounter1 = 0;
                state.wheelCounter2 = 0;
                this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION_FINISHED, { cameraState: this.getCameraState() }, false);
            }
            else {
                this.onWheel();
            }
        }, state.wheelInterval);
    },
    canvasWheel(_event) {
        const state = this.state;
        state.wheelCounter1 += 1;
        if (state.wheelMarker) {
            this.onWheel();
        }
        this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION, { cameraState: this.getCameraState() }, false);
    },
    init() {
        let el = this.el;
        let data = this.data;
        document.body.style.cursor = "grab";
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        let controls = new THREE.OrbitControls(el.getObject3D("camera"), el.sceneEl.renderer.domElement);
        let controlPosition = ThreeUtils.objectToVector3(data.controlPosition);
        let controlTarget = ThreeUtils.objectToVector3(data.controlTarget);
        controls.object.position.copy(controlPosition);
        el.getObject3D("camera").position.copy(controlPosition);
        controls.target.copy(controlTarget);
        let animationCache = [];
        this.state = {
            animationCache,
            controls,
            mouseDown: false,
            wheelCounter1: 0,
            wheelCounter2: undefined,
            wheelInterval: 50,
            wheelMarker: true
        };
        this.bindMethods();
        this.addListeners();
        ThreeUtils.waitOneFrame(() => {
            this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION, { cameraState: this.getCameraState() }, false);
        });
    },
    getCameraState() {
        return {
            position: this.state.controls.object.position,
            target: this.state.controls.target
        };
    },
    update(_oldData) {
        let controls = this.state.controls;
        const data = this.data;
        controls.target = ThreeUtils.objectToVector3(data.controlTarget);
        controls.autoRotate = data.autoRotate;
        controls.autoRotateSpeed = data.autoRotateSpeed;
        controls.dampingFactor = data.dampingFactor;
        controls.enabled = data.enabled;
        controls.enableDamping = data.enableDamping;
        controls.enableKeys = data.enableKeys;
        controls.enablePan = data.enablePan;
        controls.enableRotate = data.enableRotate;
        controls.enableZoom = data.enableZoom;
        controls.keyPanSpeed = data.keyPanSpeed;
        controls.maxPolarAngle = THREE.Math.degToRad(data.maxPolarAngle);
        controls.maxAzimuthAngle = THREE.Math.degToRad(data.maxAzimuthAngle);
        controls.maxDistance = data.maxDistance;
        controls.minDistance = data.minDistance;
        controls.minPolarAngle = THREE.Math.degToRad(data.minPolarAngle);
        controls.minAzimuthAngle = THREE.Math.degToRad(data.minAzimuthAngle);
        controls.rotateSpeed = data.rotateSpeed;
        controls.screenSpacePanning = data.screenSpacePanning;
        controls.zoomSpeed = data.zoomSpeed;
        this.el
            .getObject3D("camera")
            .position.copy(ThreeUtils.objectToVector3(data.controlPosition));
    },
    tickFunction() {
        let controls = this.state.controls;
        if (!controls.enabled) {
            return;
        }
        if (this.data.animating) {
            let nextFrame = this.state.animationCache.shift();
            if (nextFrame && nextFrame.position && nextFrame.target) {
                controls.object.position.copy(nextFrame.position);
                this.el.getObject3D("camera").position.copy(nextFrame.position);
                controls.target.copy(nextFrame.target);
            }
            if (this.state.animationCache.length === 0) {
                this.el.sceneEl.emit(AlOrbitControlEvents.ANIMATION_FINISHED, {}, false);
            }
        }
        if (controls.enabled && (controls.enableDamping || controls.autoRotate)) {
            controls.update();
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeListeners();
        let state = this.state;
        state.controls.dispose();
        state = null;
    }
});
export class AlOrbitControlEvents {
}
AlOrbitControlEvents.INTERACTION = "al-orbit-interaction";
AlOrbitControlEvents.INTERACTION_FINISHED = "al-orbit-controls-interaction-finished";
AlOrbitControlEvents.ANIMATION_STARTED = "al-orbit-controls-animation-started";
AlOrbitControlEvents.ANIMATION_FINISHED = "al-orbit-controls-animation-finished";
