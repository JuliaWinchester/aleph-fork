import { AlNode, AlCamera } from "../interfaces";
import { Mesh } from "three";
export declare class GetUtils {
    static cssUnits: string[];
    static addCssUnits(d: string): string;
    static getFileExtension(file: string): string;
    static getGeometryCenter(geometry: THREE.Geometry | THREE.BufferGeometry): THREE.Vector3;
    static getCameraStateFromMesh(mesh: Mesh): AlCamera;
    static getCameraPositionFromNode(node: AlNode, radius: number, cameraTarget: THREE.Vector3): THREE.Vector3;
    static getBoundingBox(obj: THREE.Object3D): THREE.Box3;
}
