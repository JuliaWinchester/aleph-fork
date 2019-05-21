import { Constants } from "../../Constants";
export default AFRAME.registerComponent("al-render-order", {
    schema: {
        order: { type: "number", default: Constants.topLayerRenderOrder }
    },
    init() {
        this.bindMethods();
        this.addEventListeners();
        Object.keys(this.el.object3DMap).forEach(key => {
            this.el.object3DMap[key].renderOrder = this.data.order;
        });
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    update() {
        Object.keys(this.el.object3DMap).forEach(key => {
            this.el.object3DMap[key].renderOrder = this.data.order;
        });
    },
    remove() {
        this.removeEventListeners();
    }
});
