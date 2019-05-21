import { Constants } from "../../Constants";
import { ThreeUtils, AlGraphEvents, ShaderUtils } from "../../utils";
import { AlGraphEntryType } from "../../enums";
export default AFRAME.registerComponent("al-angle", {
    schema: {
        selected: { type: "boolean" },
        edge0Pos: { type: "vec3" },
        edge1Pos: { type: "vec3" },
        position: { type: "vec3" },
        length: { type: "number" },
        radius: { type: "number" },
        angle: { type: "number" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        this.bindMethods();
        this.addEventListeners();
        this.state = {
            selected: true,
            hovered: false
        };
        this.createMesh();
    },
    bindMethods() {
        this.pointerDown = this.pointerDown.bind(this);
        this.pointerOver = this.pointerOver.bind(this);
        this.pointerOut = this.pointerOut.bind(this);
        this.createMesh = this.createMesh.bind(this);
    },
    addEventListeners() {
        this.el.addEventListener("mousedown", this.pointerDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected", this.pointerOver, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected-cleared", this.pointerOut, {
            capture: false,
            once: false,
            passive: true
        });
    },
    removeEventListeners() {
        this.el.removeEventListener("mousedown", this.pointerDown);
        this.el.removeEventListener("raycaster-intersected", this.pointerOver);
        this.el.removeEventListener("raycaster-intersected-cleared", this.pointerOut);
    },
    pointerDown(_event) {
        this.el.sceneEl.emit(AlGraphEvents.SELECTED, { type: AlGraphEntryType.ANGLE, id: this.el.id }, true);
    },
    pointerOver(_event) {
        let state = this.state;
        state.hovered = true;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OVER, { id: this.el.id }, true);
    },
    pointerOut(_event) {
        let state = this.state;
        state.hovered = false;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OUT, {}, true);
    },
    createMesh() {
        const edgePos0 = ThreeUtils.objectToVector3(this.data.edge0Pos);
        const edgePos1 = ThreeUtils.objectToVector3(this.data.edge1Pos);
        var orientation = new THREE.Matrix4();
        orientation.lookAt(edgePos0, edgePos1, new THREE.Object3D().up);
        orientation.multiply(new THREE.Matrix4().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1));
        let geometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.length, 6, 4);
        let material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        mesh.applyMatrix(orientation);
        mesh.position.copy(ThreeUtils.objectToVector3(this.data.position));
        this.state.geometry = geometry;
        this.state.material = material;
        this.state.mesh = mesh;
        let outlineGeometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.length, 6, 4);
        let outlineMaterial = ShaderUtils.getHaloMaterial();
        const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
        this.state.outlineGeometry = outlineGeometry;
        this.state.outlineMaterialt = outlineMaterial;
        this.state.outlineMesh = outlineMesh;
        mesh.add(outlineMesh);
        this.el.setObject3D("mesh", mesh);
        this.el.object3D.renderOrder =
            Constants.topLayerRenderOrder - 3;
    },
    update(oldData) {
        let state = this.state;
        state.selected = this.data.selected;
        if (oldData && oldData.angle !== this.data.angle) {
            this.createMesh();
        }
    },
    tickFunction() {
        const el = this.el;
        let state = this.state;
        if (state.hovered) {
            state.material.color = new THREE.Color(Constants.buttonColors.hover);
        }
        else if (state.selected) {
            state.material.color = new THREE.Color(Constants.buttonColors.active);
        }
        else {
            state.material.color = new THREE.Color(Constants.buttonColors.up);
        }
        const text = el.firstChild;
        if (text) {
            const obj3d = text.object3D;
            if (state.hovered) {
                obj3d.visible = true;
            }
            else {
                obj3d.visible = false;
            }
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
    }
});
