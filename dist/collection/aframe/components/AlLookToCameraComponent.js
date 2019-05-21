import { Constants } from "../../Constants";
export default AFRAME.registerComponent("al-look-to-camera", {
    schema: {},
    init() {
        this.bindMethods();
        this.addEventListeners();
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    tickFunction() {
        this.el.object3D.lookAt(this.el.sceneEl.camera.position);
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
    }
});
