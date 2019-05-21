import { combineReducers } from "redux";
import { TypeKeys } from "./actions";
import { DisplayMode } from "../enums/DisplayMode";
import { Orientation } from "../enums/Orientation";
import { GetUtils } from "../utils";
import { MeshFileType } from "../enums";
export const getInitialState = () => {
    return {
        angles: new Map(),
        boundingBoxEnabled: false,
        camera: null,
        controlsEnabled: true,
        displayMode: DisplayMode.MESH,
        edges: new Map(),
        nodes: new Map(),
        graphEnabled: false,
        orientation: Orientation.CORONAL,
        selected: null,
        slicesIndex: 0,
        slicesWindowCenter: 0,
        slicesWindowWidth: 0,
        src: null,
        srcLoaded: false,
        volumeSteps: 16,
        volumeWindowCenter: 0,
        volumeWindowWidth: 0
    };
};
export const app = (state = getInitialState(), action) => {
    switch (action.type) {
        case TypeKeys.APP_SET_SRC: {
            const [src, plDisplayMode] = action.payload;
            let displayMode;
            if (plDisplayMode) {
                displayMode = plDisplayMode;
            }
            else if (src) {
                const fileExtension = GetUtils.getFileExtension(src);
                if (Object.values(MeshFileType).includes(fileExtension)) {
                    displayMode = DisplayMode.MESH;
                }
                else {
                    displayMode = DisplayMode.SLICES;
                }
            }
            else {
                displayMode = DisplayMode.MESH;
            }
            return Object.assign({}, state, { angles: new Map(), controlsEnabled: false, displayMode: displayMode, edges: new Map(), nodes: new Map(), orientation: Orientation.CORONAL, selected: null, slicesIndex: 0, slicesWindowCenter: 0, slicesWindowWidth: 0, src: src, srcLoaded: false, volumeSteps: 16, volumeWindowCenter: 0, volumeWindowWidth: 0 });
        }
        case TypeKeys.APP_SET_SRC_LOADED: {
            return Object.assign({}, state, { controlsEnabled: action.payload, srcLoaded: action.payload });
        }
        case TypeKeys.APP_SET_NODE: {
            const [key, value] = action.payload;
            const sanitisedValue = JSON.parse(JSON.stringify(value));
            const currentValue = state.nodes.get(key);
            let nextValue = Object.assign({}, currentValue, sanitisedValue);
            return Object.assign({}, state, { selected: currentValue ? state.selected : key, nodes: new Map(state.nodes).set(key, nextValue) });
        }
        case TypeKeys.APP_DELETE_NODE: {
            return Object.assign({}, state, { selected: state.selected === action.payload ? null : state.selected, nodes: new Map([...state.nodes].filter(([key]) => key !== action.payload)), edges: new Map([...state.edges].filter(([_key, edge]) => action.payload !== edge.node1Id && action.payload !== edge.node2Id)) });
        }
        case TypeKeys.APP_SELECT_NODE: {
            return Object.assign({}, state, { selected: action.payload });
        }
        case TypeKeys.APP_CLEAR_NODES: {
            return Object.assign({}, state, { nodes: new Map() });
        }
        case TypeKeys.APP_SET_EDGE: {
            const [key, value] = action.payload;
            const sanitisedValue = JSON.parse(JSON.stringify(value));
            const currentValue = state.edges.get(key);
            let nextValue = Object.assign({}, currentValue, sanitisedValue);
            return Object.assign({}, state, { selected: currentValue ? state.selected : key, edges: new Map(state.edges).set(key, nextValue) });
        }
        case TypeKeys.APP_DELETE_EDGE: {
            return Object.assign({}, state, { selected: state.selected === action.payload ? null : state.selected, edges: new Map([...state.edges].filter(([key]) => key !== action.payload)), angles: new Map([...state.angles].filter(([_key, angle]) => action.payload !== angle.edge1Id &&
                    action.payload !== angle.edge2Id)) });
        }
        case TypeKeys.APP_SELECT_EDGE: {
            return Object.assign({}, state, { selected: action.payload });
        }
        case TypeKeys.APP_CLEAR_EDGES: {
            return Object.assign({}, state, { edges: new Map() });
        }
        case TypeKeys.APP_SET_ANGLE: {
            const [key, value] = action.payload;
            const sanitisedValue = JSON.parse(JSON.stringify(value));
            const currentValue = state.angles.get(key);
            let nextValue = Object.assign({}, currentValue, sanitisedValue);
            return Object.assign({}, state, { selected: currentValue ? state.selected : key, angles: new Map(state.angles).set(key, nextValue) });
        }
        case TypeKeys.APP_DELETE_ANGLE: {
            return Object.assign({}, state, { selected: state.selected === action.payload ? null : state.selected, angles: new Map([...state.angles].filter(([key]) => key !== action.payload)) });
        }
        case TypeKeys.APP_SELECT_ANGLE: {
            return Object.assign({}, state, { selected: action.payload });
        }
        case TypeKeys.APP_CLEAR_ANGLES: {
            return Object.assign({}, state, { angles: new Map() });
        }
        case TypeKeys.APP_SET_DISPLAY_MODE: {
            return Object.assign({}, state, { displayMode: action.payload });
        }
        case TypeKeys.APP_SET_ORIENTATION: {
            return Object.assign({}, state, { slicesIndex: undefined, orientation: action.payload });
        }
        case TypeKeys.APP_SET_NODES_ENABLED: {
            return Object.assign({}, state, { graphEnabled: action.payload });
        }
        case TypeKeys.APP_SET_BOUNDINGBOX_VISIBLE: {
            return Object.assign({}, state, { boundingBoxEnabled: action.payload });
        }
        case TypeKeys.APP_SET_SLICES_INDEX: {
            return Object.assign({}, state, { slicesIndex: action.payload });
        }
        case TypeKeys.APP_SET_SLICES_WINDOW_WIDTH: {
            return Object.assign({}, state, { slicesWindowWidth: action.payload });
        }
        case TypeKeys.APP_SET_SLICES_WINDOW_CENTER: {
            return Object.assign({}, state, { slicesWindowCenter: action.payload });
        }
        case TypeKeys.APP_SET_VOLUME_STEPS: {
            return Object.assign({}, state, { volumeSteps: action.payload });
        }
        case TypeKeys.APP_SET_VOLUME_WINDOW_WIDTH: {
            return Object.assign({}, state, { volumeWindowWidth: action.payload });
        }
        case TypeKeys.APP_SET_VOLUME_WINDOW_CENTER: {
            return Object.assign({}, state, { volumeWindowCenter: action.payload });
        }
        case TypeKeys.APP_SET_CAMERA: {
            return Object.assign({}, state, { camera: Object.assign({}, state.camera, action.payload) });
        }
        case TypeKeys.APP_SET_CONTROLS_ENABLED: {
            return Object.assign({}, state, { controlsEnabled: action.payload });
        }
    }
    return state;
};
export const rootReducer = combineReducers({
    app
});
