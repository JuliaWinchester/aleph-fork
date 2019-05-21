import { AlCamera } from "../interfaces";
declare type Entity = import("aframe").Entity;
export declare class ThreeUtils {
    static isWebGL2Available(): boolean;
    static enableOrbitControls(camEntity: Entity, enabled: boolean): void;
    static waitOneFrame(func: () => void): void;
    static objectToVector3(vec: {
        x: number;
        y: number;
        z: number;
    }): THREE.Vector3;
    static worldToScreen(worldCoordinate: THREE.Vector3, camera: THREE.Camera, container: any): THREE.Vector3;
    static vector3ToString(vec: THREE.Vector3): string;
    static stringToVector3(vec: string): THREE.Vector3;
    static slerp(start: THREE.Vector3, end: THREE.Vector3, percent: number): THREE.Vector3 | null;
    static easeInOutCubic(t: number): number;
    static getSlerpPath(start: AlCamera, end: AlCamera, positionChange: boolean, targetChange: boolean): number[];
}
export {};
