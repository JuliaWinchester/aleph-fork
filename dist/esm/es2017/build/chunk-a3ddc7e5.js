import { h } from '../aleph.core.js';

var DisplayMode;
(function (DisplayMode) {
    DisplayMode["SLICES"] = "slices";
    DisplayMode["VOLUME"] = "volume";
    DisplayMode["MESH"] = "mesh";
})(DisplayMode || (DisplayMode = {}));

var Orientation;
(function (Orientation) {
    Orientation["CORONAL"] = "coronal";
    Orientation["SAGGITAL"] = "saggital";
    Orientation["AXIAL"] = "axial";
})(Orientation || (Orientation = {}));

export { DisplayMode as a, Orientation as b };
