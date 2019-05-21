import { Constants } from "../Constants";
import { ThreeUtils } from ".";
export class GetUtils {
    static addCssUnits(d) {
        if (!this.cssUnits.some(u => {
            return d.includes(u);
        })) {
            d += "px";
        }
        return d;
    }
    static getFileExtension(file) {
        return file.substring(file.lastIndexOf(".") + 1);
    }
    static getGeometryCenter(geometry) {
        let geom;
        if (geometry instanceof THREE.BufferGeometry) {
            geom = new THREE.Geometry().fromBufferGeometry(geometry);
        }
        else {
            geom = geometry;
        }
        geom.computeBoundingSphere();
        return geom.boundingSphere.center;
    }
    static getCameraStateFromMesh(mesh) {
        let meshCenter;
        let initialPosition;
        let sceneDistance;
        if (mesh) {
            const geom = mesh.geometry;
            meshCenter = this.getGeometryCenter(geom);
            sceneDistance =
                (Constants.zoomFactor * geom.boundingSphere.radius) /
                    Math.tan((Constants.cameraValues.fov * Math.PI) / 180);
            initialPosition = new THREE.Vector3();
            initialPosition.copy(meshCenter);
            initialPosition.z += sceneDistance;
            return {
                target: meshCenter,
                position: initialPosition
            };
        }
        return null;
    }
    static getCameraPositionFromNode(node, radius, cameraTarget) {
        if (!node) {
            return null;
        }
        let pos = new THREE.Vector3();
        pos.copy(ThreeUtils.stringToVector3(node.position));
        let dir = pos
            .clone()
            .sub(cameraTarget.clone())
            .normalize();
        let camPos = new THREE.Vector3();
        camPos.copy(pos);
        camPos.add(dir.clone().multiplyScalar(radius * Constants.zoomFactor));
        return camPos;
    }
    static getBoundingBox(obj) {
        return new THREE.Box3().setFromObject(obj);
    }
}
GetUtils.cssUnits = [
    "%",
    "ch",
    "cm",
    "em",
    "ex",
    "in",
    "mm",
    "pc",
    "pt",
    "px",
    "rem",
    "vh",
    "vmax",
    "vmin",
    "vw"
];
