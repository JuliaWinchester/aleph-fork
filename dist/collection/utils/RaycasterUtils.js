export class RaycasterUtils {
    static castMeshRay(raycaster, targetObject) {
        let intersects = raycaster.intersectObjects(targetObject.children);
        if (intersects.length <= 0) {
            return null;
        }
        return intersects[0].point;
    }
}
