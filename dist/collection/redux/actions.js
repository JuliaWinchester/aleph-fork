export var TypeKeys;
(function (TypeKeys) {
    TypeKeys["NULL"] = "NULL";
    TypeKeys["ERROR"] = "ERROR";
    TypeKeys["APP_CLEAR_ANGLES"] = "APP_LOAD_ANGLES";
    TypeKeys["APP_CLEAR_EDGES"] = "APP_LOAD_EDGES";
    TypeKeys["APP_CLEAR_NODES"] = "APP_LOAD_NODES";
    TypeKeys["APP_DELETE_ANGLE"] = "APP_DELETE_ANGLE";
    TypeKeys["APP_DELETE_EDGE"] = "APP_DELETE_EDGE";
    TypeKeys["APP_DELETE_NODE"] = "APP_DELETE_NODE";
    TypeKeys["APP_SELECT_ANGLE"] = "APP_SELECT_ANGLE";
    TypeKeys["APP_SELECT_EDGE"] = "APP_SELECT_EDGE";
    TypeKeys["APP_SELECT_NODE"] = "APP_SELECT_NODE";
    TypeKeys["APP_SET_ANGLE"] = "APP_SET_ANGLE";
    TypeKeys["APP_SET_BOUNDINGBOX_VISIBLE"] = "APP_SET_BOUNDINGBOX_VISIBLE";
    TypeKeys["APP_SET_CAMERA"] = "APP_SET_CAMERA";
    TypeKeys["APP_SET_CONTROLS_ENABLED"] = "APP_SET_CONTROLS_ENABLED";
    TypeKeys["APP_SET_DISPLAY_MODE"] = "APP_SET_DISPLAY_MODE";
    TypeKeys["APP_SET_EDGE"] = "APP_SET_EDGE";
    TypeKeys["APP_SET_NODE"] = "APP_SET_NODE";
    TypeKeys["APP_SET_NODES_ENABLED"] = "APP_SET_NODES_ENABLED";
    TypeKeys["APP_SET_ORIENTATION"] = "APP_SET_ORIENTATION";
    TypeKeys["APP_SET_SLICES_INDEX"] = "APP_SET_SLICES_INDEX";
    TypeKeys["APP_SET_SLICES_WINDOW_CENTER"] = "APP_SET_SLICES_WINDOW_CENTER";
    TypeKeys["APP_SET_SLICES_WINDOW_WIDTH"] = "APP_SET_SLICES_WINDOW_WIDTH";
    TypeKeys["APP_SET_SRC"] = "APP_SET_SRC";
    TypeKeys["APP_SET_SRC_LOADED"] = "APP_SET_SRC_LOADED";
    TypeKeys["APP_SET_VOLUME_STEPS"] = "APP_SET_VOLUME_STEPS";
    TypeKeys["APP_SET_VOLUME_WINDOW_CENTER"] = "APP_SET_VOLUME_WINDOW_CENTER";
    TypeKeys["APP_SET_VOLUME_WINDOW_WIDTH"] = "APP_SET_VOLUME_WINDOW_WIDTH";
})(TypeKeys || (TypeKeys = {}));
export const appSetSrc = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SRC,
        payload: payload
    });
};
export const appSetSrcLoaded = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SRC_LOADED,
        payload: payload
    });
};
export const appSetNode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_NODE,
        payload: payload
    });
};
export const appDeleteNode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_DELETE_NODE,
        payload: payload
    });
};
export const appSelectNode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SELECT_NODE,
        payload: payload
    });
};
export const appClearNodes = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_CLEAR_NODES,
        payload: payload
    });
};
export const appSetEdge = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_EDGE,
        payload: payload
    });
};
export const appDeleteEdge = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_DELETE_EDGE,
        payload: payload
    });
};
export const appSelectEdge = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SELECT_EDGE,
        payload: payload
    });
};
export const appClearEdges = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_CLEAR_EDGES,
        payload: payload
    });
};
export const appSetAngle = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_ANGLE,
        payload: payload
    });
};
export const appDeleteAngle = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_DELETE_ANGLE,
        payload: payload
    });
};
export const appSelectAngle = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SELECT_ANGLE,
        payload: payload
    });
};
export const appClearAngles = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_CLEAR_ANGLES,
        payload: payload
    });
};
export const appSetDisplayMode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_DISPLAY_MODE,
        payload: payload
    });
};
export const appSetGraphEnabled = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_NODES_ENABLED,
        payload: payload
    });
};
export const appSetBoundingBoxEnabled = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_BOUNDINGBOX_VISIBLE,
        payload: payload
    });
};
export const appSetOrientation = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_ORIENTATION,
        payload: payload
    });
};
export const appSetSlicesIndex = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SLICES_INDEX,
        payload: payload
    });
};
export const appSetSlicesWindowWidth = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SLICES_WINDOW_WIDTH,
        payload: payload
    });
};
export const appSetSlicesWindowCenter = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SLICES_WINDOW_CENTER,
        payload: payload
    });
};
export const appSetVolumeSteps = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_VOLUME_STEPS,
        payload: payload
    });
};
export const appSetVolumeWindowWidth = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_VOLUME_WINDOW_WIDTH,
        payload: payload
    });
};
export const appSetVolumeWindowCenter = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_VOLUME_WINDOW_CENTER,
        payload: payload
    });
};
export const appSetCamera = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_CAMERA,
        payload: payload
    });
};
export const appSetControlsEnabled = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_CONTROLS_ENABLED,
        payload: payload
    });
};
