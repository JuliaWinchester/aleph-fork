export default AFRAME.registerComponent("al-gltf-model", {
    schema: {
        src: { type: "model", default: "" },
        dracoDecoderPath: { type: "string", default: "" }
    },
    init() {
        this.bindMethods();
        this.addEventListeners();
        this.model = null;
        this.loader = new THREE.GLTFLoader();
        THREE.DRACOLoader.setDecoderPath(this.data.dracoDecoderPath);
        this.loader.setDRACOLoader(new THREE.DRACOLoader());
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    update(oldData) {
        let self = this;
        let el = this.el;
        let src = this.data.src;
        if (oldData && oldData.src !== src) {
            this.remove();
            this.loader.load(src, function gltfLoaded(gltfModel) {
                self.model = gltfModel.scene || gltfModel.scenes[0];
                self.model.animations = gltfModel.animations;
                el.setObject3D("mesh", self.model);
                el.sceneEl.emit(AlGltfModelEvents.LOADED, {
                    format: "gltf",
                    model: self.model
                }, false);
            }, undefined, function gltfFailed(error) {
                let message = error && error.message
                    ? error.message
                    : "Failed to load glTF model";
                console.warn(message);
                el.sceneEl.emit(AlGltfModelEvents.ERROR, {
                    format: "gltf",
                    src: src
                }, false);
            });
        }
    },
    remove() {
        if (!this.model) {
            return;
        }
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
    }
});
export class AlGltfModelEvents {
}
AlGltfModelEvents.LOADED = "al-model-loaded";
AlGltfModelEvents.ERROR = "al-model-error";
