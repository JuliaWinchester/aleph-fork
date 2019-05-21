import { ThreeUtils } from "../../utils";
import { Constants } from "../../Constants";
export default AFRAME.registerComponent("al-fixed-to-orbit-camera", {
    schema: {
        distanceFromTarget: { type: "number", default: 0.1 },
        target: { type: "vec3" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS / 2, this);
        if (this.data.target) {
            let targ = ThreeUtils.objectToVector3(this.data.target);
            this.state = {
                distanceFromTarget: this.data.distanceFromTarget,
                target: targ
            };
        }
        else {
            this.state = {
                distanceFromTarget: this.data.distanceFromTarget,
                target: new THREE.Vector3(0, 0, 0)
            };
        }
        this.bindMethods();
        this.addEventListeners();
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    update() {
        let targ = ThreeUtils.objectToVector3(this.data.target);
        this.state = {
            distanceFromTarget: this.data.distanceFromTarget,
            target: targ
        };
    },
    tickFunction() {
        let el = this.el;
        let state = this.state;
        const camPos = el.sceneEl.camera.position;
        const dir = state.target
            .clone()
            .sub(camPos.clone()).normalize();
        el.object3D.position.copy(dir.multiplyScalar(state.distanceFromTarget));
        el.object3D.lookAt(camPos);
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
    }
});
