import { ThreeUtils } from "../../utils";
import { Constants } from "../../Constants";
export default AFRAME.registerComponent("al-bounding-box", {
    schema: {
        color: { type: "string", default: "#f50057" },
        scale: { type: "string" }
    },
    init() {
        this.bindMethods();
        this.addEventListeners();
        this.state = {
            box: new THREE.Box3()
        };
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    update() {
        const el = this.el;
        let state = this.state;
        let scale = ThreeUtils.stringToVector3(this.data.scale);
        state.box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), scale);
        let geometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
        let material = new THREE.MeshBasicMaterial({
            color: this.data.color,
            visible: false
        });
        let mesh = new THREE.Mesh(geometry, material);
        el.setObject3D("mesh2", mesh);
        state.boundingBox = new THREE.Box3Helper(state.box, this.data.color);
        state.boundingBox.renderOrder = Constants.topLayerRenderOrder - 5;
        el.setObject3D("mesh", state.boundingBox);
        state.geometry = geometry;
        state.material = material;
        state.mesh = mesh;
    },
    remove() {
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
        this.el.removeObject3D("mesh2");
    }
});
