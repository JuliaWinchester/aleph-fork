import { ThreeUtils } from "../../utils";
import { Constants } from "../../Constants";
import { BaseComponent } from "./BaseComponent";

interface AlBoundingBoxState {
  box: THREE.Box3;
  boundingBox: any;
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  mesh: THREE.Mesh;
}

interface AlBoundingBoxComponent extends BaseComponent {}

export default AFRAME.registerComponent("al-bounding-box", {
  schema: {
    color: { type: "string", default: "#f50057" },
    scale: { type: "string" }
  },

  init(): void {
    this.bindMethods();
    this.addEventListeners();

    this.state = {
      box: new THREE.Box3()
    } as AlBoundingBoxState;
  },

  bindMethods(): void {},

  addEventListeners(): void {},

  removeEventListeners(): void {},

  update(): void {
    const el = this.el;
    let state = this.state as AlBoundingBoxState;
    let scale = ThreeUtils.stringToVector3(this.data.scale);

    state.box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), scale);

    // Add a second mesh for raycasting in volume mode
    let geometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
    let material = new THREE.MeshBasicMaterial({
      color: this.data.color,
      visible: false
    });
    let mesh = new THREE.Mesh(geometry, material);
    el.setObject3D("mesh2", mesh);

    state.boundingBox = new (THREE as any).Box3Helper(
      state.box as any,
      this.data.color
    );
    state.boundingBox.renderOrder = Constants.topLayerRenderOrder - 5;
    el.setObject3D("mesh", state.boundingBox);

    state.geometry = geometry;
    state.material = material;
    state.mesh = mesh;
  },

  remove(): void {
    this.removeEventListeners();
    this.el.removeObject3D("mesh");
    this.el.removeObject3D("mesh2");
  }
} as AlBoundingBoxComponent);
