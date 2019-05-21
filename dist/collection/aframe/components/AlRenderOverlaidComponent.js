import { Constants } from "../../Constants";
export default AFRAME.registerComponent("al-render-overlaid", {
    schema: {},
    init(_data) {
        this.bindMethods();
        this.addEventListeners();
        this.setDepth(this.el.object3DMap.mesh);
        this.setDepth(this.el.object3DMap.text);
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    setDepth(mesh) {
        if (mesh) {
            mesh.renderOrder = Constants.topLayerRenderOrder;
            if (mesh.material) {
                mesh.material.depthTest = false;
            }
        }
    },
    remove() {
        this.removeEventListeners();
    }
});
