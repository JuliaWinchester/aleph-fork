import { h } from '../aleph.core.js';

import { a as DisplayMode, b as Orientation } from './chunk-a3ddc7e5.js';

var KeyDown;
(function (KeyDown) {
    KeyDown[KeyDown["Backspace"] = 8] = "Backspace";
    KeyDown[KeyDown["Tab"] = 9] = "Tab";
    KeyDown[KeyDown["Enter"] = 13] = "Enter";
    KeyDown[KeyDown["Shift"] = 16] = "Shift";
    KeyDown[KeyDown["Ctrl"] = 17] = "Ctrl";
    KeyDown[KeyDown["Alt"] = 18] = "Alt";
    KeyDown[KeyDown["PauseBreak"] = 19] = "PauseBreak";
    KeyDown[KeyDown["CapsLock"] = 20] = "CapsLock";
    KeyDown[KeyDown["Escape"] = 27] = "Escape";
    KeyDown[KeyDown["Spacebar"] = 32] = "Spacebar";
    KeyDown[KeyDown["PageUp"] = 33] = "PageUp";
    KeyDown[KeyDown["PageDown"] = 34] = "PageDown";
    KeyDown[KeyDown["End"] = 35] = "End";
    KeyDown[KeyDown["Home"] = 36] = "Home";
    KeyDown[KeyDown["LeftArrow"] = 37] = "LeftArrow";
    KeyDown[KeyDown["UpArrow"] = 38] = "UpArrow";
    KeyDown[KeyDown["RightArrow"] = 39] = "RightArrow";
    KeyDown[KeyDown["DownArrow"] = 40] = "DownArrow";
    KeyDown[KeyDown["PrintScrn"] = 44] = "PrintScrn";
    KeyDown[KeyDown["Insert"] = 45] = "Insert";
    KeyDown[KeyDown["Delete"] = 46] = "Delete";
    KeyDown[KeyDown["Zero"] = 48] = "Zero";
    KeyDown[KeyDown["One"] = 49] = "One";
    KeyDown[KeyDown["Two"] = 50] = "Two";
    KeyDown[KeyDown["Three"] = 51] = "Three";
    KeyDown[KeyDown["Four"] = 52] = "Four";
    KeyDown[KeyDown["Five"] = 53] = "Five";
    KeyDown[KeyDown["Six"] = 54] = "Six";
    KeyDown[KeyDown["Seven"] = 55] = "Seven";
    KeyDown[KeyDown["Eight"] = 56] = "Eight";
    KeyDown[KeyDown["Nine"] = 57] = "Nine";
    KeyDown[KeyDown["a"] = 65] = "a";
    KeyDown[KeyDown["b"] = 66] = "b";
    KeyDown[KeyDown["c"] = 67] = "c";
    KeyDown[KeyDown["d"] = 68] = "d";
    KeyDown[KeyDown["e"] = 69] = "e";
    KeyDown[KeyDown["f"] = 70] = "f";
    KeyDown[KeyDown["g"] = 71] = "g";
    KeyDown[KeyDown["h"] = 72] = "h";
    KeyDown[KeyDown["i"] = 73] = "i";
    KeyDown[KeyDown["j"] = 74] = "j";
    KeyDown[KeyDown["k"] = 75] = "k";
    KeyDown[KeyDown["l"] = 76] = "l";
    KeyDown[KeyDown["m"] = 77] = "m";
    KeyDown[KeyDown["n"] = 78] = "n";
    KeyDown[KeyDown["o"] = 79] = "o";
    KeyDown[KeyDown["p"] = 80] = "p";
    KeyDown[KeyDown["q"] = 81] = "q";
    KeyDown[KeyDown["r"] = 82] = "r";
    KeyDown[KeyDown["s"] = 83] = "s";
    KeyDown[KeyDown["t"] = 84] = "t";
    KeyDown[KeyDown["u"] = 85] = "u";
    KeyDown[KeyDown["v"] = 86] = "v";
    KeyDown[KeyDown["w"] = 87] = "w";
    KeyDown[KeyDown["x"] = 88] = "x";
    KeyDown[KeyDown["y"] = 89] = "y";
    KeyDown[KeyDown["z"] = 90] = "z";
    KeyDown[KeyDown["LeftWindowKey"] = 91] = "LeftWindowKey";
    KeyDown[KeyDown["RightWindowKey"] = 92] = "RightWindowKey";
    KeyDown[KeyDown["SelectKey"] = 93] = "SelectKey";
    KeyDown[KeyDown["Numpad0"] = 96] = "Numpad0";
    KeyDown[KeyDown["Numpad1"] = 97] = "Numpad1";
    KeyDown[KeyDown["Numpad2"] = 98] = "Numpad2";
    KeyDown[KeyDown["Numpad3"] = 99] = "Numpad3";
    KeyDown[KeyDown["Numpad4"] = 100] = "Numpad4";
    KeyDown[KeyDown["Numpad5"] = 101] = "Numpad5";
    KeyDown[KeyDown["Numpad6"] = 102] = "Numpad6";
    KeyDown[KeyDown["Numpad7"] = 103] = "Numpad7";
    KeyDown[KeyDown["Numpad8"] = 104] = "Numpad8";
    KeyDown[KeyDown["Numpad9"] = 105] = "Numpad9";
    KeyDown[KeyDown["Multiply"] = 106] = "Multiply";
    KeyDown[KeyDown["NumpadPlus"] = 107] = "NumpadPlus";
    KeyDown[KeyDown["NumpadMinus"] = 109] = "NumpadMinus";
    KeyDown[KeyDown["DecimalPoint"] = 110] = "DecimalPoint";
    KeyDown[KeyDown["Divide"] = 111] = "Divide";
    KeyDown[KeyDown["F1"] = 112] = "F1";
    KeyDown[KeyDown["F2"] = 113] = "F2";
    KeyDown[KeyDown["F3"] = 114] = "F3";
    KeyDown[KeyDown["F4"] = 115] = "F4";
    KeyDown[KeyDown["F5"] = 116] = "F5";
    KeyDown[KeyDown["F6"] = 117] = "F6";
    KeyDown[KeyDown["F7"] = 118] = "F7";
    KeyDown[KeyDown["F8"] = 119] = "F8";
    KeyDown[KeyDown["F9"] = 120] = "F9";
    KeyDown[KeyDown["F10"] = 121] = "F10";
    KeyDown[KeyDown["F11"] = 122] = "F11";
    KeyDown[KeyDown["F12"] = 123] = "F12";
    KeyDown[KeyDown["NumLock"] = 144] = "NumLock";
    KeyDown[KeyDown["ScrollLock"] = 145] = "ScrollLock";
    KeyDown[KeyDown["Semicolon"] = 186] = "Semicolon";
    KeyDown[KeyDown["Equals"] = 187] = "Equals";
    KeyDown[KeyDown["Comma"] = 188] = "Comma";
    KeyDown[KeyDown["LessThan"] = 188] = "LessThan";
    KeyDown[KeyDown["Dash"] = 189] = "Dash";
    KeyDown[KeyDown["Period"] = 190] = "Period";
    KeyDown[KeyDown["GreaterThan"] = 190] = "GreaterThan";
    KeyDown[KeyDown["ForwardSlash"] = 191] = "ForwardSlash";
    KeyDown[KeyDown["QuestionMark"] = 191] = "QuestionMark";
    KeyDown[KeyDown["GraveAccent"] = 192] = "GraveAccent";
    KeyDown[KeyDown["Tilde"] = 192] = "Tilde";
    KeyDown[KeyDown["OpenCurlyBracket"] = 219] = "OpenCurlyBracket";
    KeyDown[KeyDown["OpenSquareBracket"] = 219] = "OpenSquareBracket";
    KeyDown[KeyDown["BackSlash"] = 220] = "BackSlash";
    KeyDown[KeyDown["VerticalPipe"] = 220] = "VerticalPipe";
    KeyDown[KeyDown["CloseCurlyBracket"] = 221] = "CloseCurlyBracket";
    KeyDown[KeyDown["CloseSquareBracket"] = 221] = "CloseSquareBracket";
    KeyDown[KeyDown["Quote"] = 222] = "Quote";
    KeyDown[KeyDown["CommandFF"] = 224] = "CommandFF";
})(KeyDown || (KeyDown = {}));
var KeyPress;
(function (KeyPress) {
    KeyPress[KeyPress["Backspace"] = 8] = "Backspace";
    KeyPress[KeyPress["Enter"] = 13] = "Enter";
    KeyPress[KeyPress["Spacebar"] = 32] = "Spacebar";
    KeyPress[KeyPress["Hash"] = 35] = "Hash";
    KeyPress[KeyPress["GraveAccent"] = 39] = "GraveAccent";
    KeyPress[KeyPress["DoubleQuote"] = 34] = "DoubleQuote";
    KeyPress[KeyPress["Asterisk"] = 42] = "Asterisk";
    KeyPress[KeyPress["Plus"] = 43] = "Plus";
    KeyPress[KeyPress["Comma"] = 44] = "Comma";
    KeyPress[KeyPress["Minus"] = 45] = "Minus";
    KeyPress[KeyPress["Period"] = 46] = "Period";
    KeyPress[KeyPress["ForwardSlash"] = 47] = "ForwardSlash";
    KeyPress[KeyPress["Zero"] = 48] = "Zero";
    KeyPress[KeyPress["One"] = 49] = "One";
    KeyPress[KeyPress["Two"] = 50] = "Two";
    KeyPress[KeyPress["Three"] = 51] = "Three";
    KeyPress[KeyPress["Four"] = 52] = "Four";
    KeyPress[KeyPress["Five"] = 53] = "Five";
    KeyPress[KeyPress["Six"] = 54] = "Six";
    KeyPress[KeyPress["Seven"] = 55] = "Seven";
    KeyPress[KeyPress["Eight"] = 56] = "Eight";
    KeyPress[KeyPress["Nine"] = 57] = "Nine";
    KeyPress[KeyPress["Colon"] = 58] = "Colon";
    KeyPress[KeyPress["Semicolon"] = 59] = "Semicolon";
    KeyPress[KeyPress["LessThan"] = 60] = "LessThan";
    KeyPress[KeyPress["Equals"] = 61] = "Equals";
    KeyPress[KeyPress["GreaterThan"] = 62] = "GreaterThan";
    KeyPress[KeyPress["QuestionMark"] = 63] = "QuestionMark";
    KeyPress[KeyPress["At"] = 64] = "At";
    KeyPress[KeyPress["OpenSquareBracket"] = 91] = "OpenSquareBracket";
    KeyPress[KeyPress["BackSlash"] = 92] = "BackSlash";
    KeyPress[KeyPress["CloseSquareBracket"] = 93] = "CloseSquareBracket";
    KeyPress[KeyPress["a"] = 97] = "a";
    KeyPress[KeyPress["b"] = 98] = "b";
    KeyPress[KeyPress["c"] = 99] = "c";
    KeyPress[KeyPress["d"] = 100] = "d";
    KeyPress[KeyPress["e"] = 101] = "e";
    KeyPress[KeyPress["f"] = 102] = "f";
    KeyPress[KeyPress["g"] = 103] = "g";
    KeyPress[KeyPress["h"] = 104] = "h";
    KeyPress[KeyPress["i"] = 105] = "i";
    KeyPress[KeyPress["j"] = 106] = "j";
    KeyPress[KeyPress["k"] = 107] = "k";
    KeyPress[KeyPress["l"] = 108] = "l";
    KeyPress[KeyPress["m"] = 109] = "m";
    KeyPress[KeyPress["n"] = 110] = "n";
    KeyPress[KeyPress["o"] = 111] = "o";
    KeyPress[KeyPress["p"] = 112] = "p";
    KeyPress[KeyPress["q"] = 113] = "q";
    KeyPress[KeyPress["r"] = 114] = "r";
    KeyPress[KeyPress["s"] = 115] = "s";
    KeyPress[KeyPress["t"] = 116] = "t";
    KeyPress[KeyPress["u"] = 117] = "u";
    KeyPress[KeyPress["v"] = 118] = "v";
    KeyPress[KeyPress["w"] = 119] = "w";
    KeyPress[KeyPress["x"] = 120] = "x";
    KeyPress[KeyPress["y"] = 121] = "y";
    KeyPress[KeyPress["z"] = 122] = "z";
    KeyPress[KeyPress["OpenCurlyBracket"] = 123] = "OpenCurlyBracket";
    KeyPress[KeyPress["VerticalPipe"] = 124] = "VerticalPipe";
    KeyPress[KeyPress["CloseCurlyBracket"] = 125] = "CloseCurlyBracket";
    KeyPress[KeyPress["Tilde"] = 126] = "Tilde";
})(KeyPress || (KeyPress = {}));

class Constants {
}
Constants.fontSizeSmall = 0.75;
Constants.fontSizeMedium = 1.5;
Constants.fontSizeLarge = 2.5;
Constants.movedEventName = "-moved";
Constants.titleIdName = "-title";
Constants.controllerName = "-controller";
Constants.nodeSizeRatio = 75;
Constants.backboardSize = 10;
Constants.zoomFactor = 2.5;
Constants.minLoadingMS = 500;
Constants.topLayerRenderOrder = 999;
Constants.angleUnitsDecimalPlaces = 3;
Constants.edgeSize = 0.005;
Constants.stackSpaceMultiplier = { x: 10, y: 10, z: 10 };
Constants.maxAnimationSteps = 50;
Constants.minFrameMS = 15;
Constants.minTimeForThrottle = Constants.minFrameMS * 5;
Constants.buttonColors = {
    active: "#f50057",
    hover: "#f50057",
    up: "#00b0ff"
};
Constants.colorValues = {
    red: "#f50057",
    blue: "#00b0ff",
    black: "#000000",
    white: "#ffffff",
    yellow: "#ffeb3b",
    green: "#76ff03",
    lightRed: "#f77777"
};
Constants.lightValues = {
    ambientLightColor: 0xd0d0d0,
    ambientLightIntensity: 1,
    directionalLight1Color: 0xffffff,
    directionalLight1Intensity: 0.75,
    directionalLight2Color: 0x002958,
    directionalLight2Intensity: 0.5
};
Constants.cameraValues = {
    near: 0.05,
    far: 10000,
    fov: 45,
    maxPolarAngle: 165,
    rotateSpeed: 0.5,
    zoomSpeed: 1,
    dampingFactor: 0.25,
    minDistance: 0
};

class ThreeUtils {
    static isWebGL2Available() {
        try {
            const canvas = document.createElement("canvas");
            return !!(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
        }
        catch (e) {
            return false;
        }
    }
    static enableOrbitControls(camEntity, enabled) {
        camEntity.setAttribute("al-orbit-control", `enabled: ${enabled}`);
    }
    static waitOneFrame(func) {
        window.setTimeout(() => {
            func();
        }, Constants.minFrameMS);
    }
    static objectToVector3(vec) {
        let res = new THREE.Vector3();
        res.x = vec.x;
        res.y = vec.y;
        res.z = vec.z;
        return res;
    }
    static worldToScreen(worldCoordinate, camera, container) {
        const screenCoordinates = worldCoordinate.clone();
        screenCoordinates.project(camera);
        screenCoordinates.x = Math.round(((screenCoordinates.x + 1) * container.offsetWidth) / 2);
        screenCoordinates.y = Math.round(((-screenCoordinates.y + 1) * container.offsetHeight) / 2);
        screenCoordinates.z = 0;
        return screenCoordinates;
    }
    static vector3ToString(vec) {
        return vec.toArray().join(" ");
    }
    static stringToVector3(vec) {
        let res = vec.split(" ");
        let vect = new THREE.Vector3();
        vect.x = Number(res[0]);
        vect.y = Number(res[1]);
        vect.z = Number(res[2]);
        return vect;
    }
    static slerp(start, end, percent) {
        const t = percent;
        const p0 = start;
        const p1 = end;
        let theta = p0.angleTo(p1);
        if (theta) {
            theta = THREE.Math.clamp(theta, -0.99, 0.99);
            const topP0 = Math.sin(1 - t) * theta;
            const topP1 = Math.sin(t * theta);
            const bot = Math.sin(theta);
            const p0Const = topP0 / bot;
            const p1Const = topP1 / bot;
            const left = p0.clone().multiplyScalar(p0Const);
            const right = p1.clone().multiplyScalar(p1Const);
            const result = left.add(right);
            return result;
        }
        else {
            return null;
        }
    }
    static easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    static getSlerpPath(start, end, positionChange, targetChange) {
        let path = [];
        const sp = start.position.clone().addScalar(Number.EPSILON);
        const st = start.target.clone().addScalar(Number.EPSILON);
        const ep = end.position.clone().addScalar(Number.EPSILON);
        const et = end.target.clone().addScalar(Number.EPSILON);
        for (let frame = 0; frame <= Constants.maxAnimationSteps; frame++) {
            let percent = this.easeInOutCubic(frame / Constants.maxAnimationSteps);
            path.push({
                position: positionChange
                    ? ThreeUtils.slerp(sp.clone(), ep.clone(), percent)
                    : ep,
                target: targetChange
                    ? ThreeUtils.slerp(st.clone(), et.clone(), percent)
                    : et
            });
        }
        return path;
    }
}

class AMIUtils {
    static _traceDataRay(stackHelper, px, py, pz, dx, dy, dz, max_d, hit_pos, hit_norm) {
        let t = 0.0;
        let floor = Math.floor;
        let ix = floor(px) | 0;
        let iy = floor(py) | 0;
        let iz = floor(pz) | 0;
        let stepx = dx > 0 ? 1 : -1;
        let stepy = dy > 0 ? 1 : -1;
        let stepz = dz > 0 ? 1 : -1;
        let txDelta = Math.abs(1 / dx);
        let tyDelta = Math.abs(1 / dy);
        let tzDelta = Math.abs(1 / dz);
        let xdist = stepx > 0 ? ix + 1 - px : px - ix;
        let ydist = stepy > 0 ? iy + 1 - py : py - iy;
        let zdist = stepz > 0 ? iz + 1 - pz : pz - iz;
        let txMax = txDelta < Infinity ? txDelta * xdist : Infinity;
        let tyMax = tyDelta < Infinity ? tyDelta * ydist : Infinity;
        let tzMax = tzDelta < Infinity ? tzDelta * zdist : Infinity;
        let windowMin = stackHelper.windowCenter - stackHelper.windowWidth * 0.5;
        let steppedIndex = -1;
        while (t <= max_d) {
            let b;
            let pixel_pos = new THREE.Vector3(ix, iy, iz);
            let data_pixel_pos = AMI.CoreUtils.worldToData(stackHelper.stack.lps2IJK, pixel_pos);
            let cur_pixel = AMI.CoreUtils.getPixelData(stackHelper.stack, data_pixel_pos);
            if (cur_pixel !== null && cur_pixel > windowMin) {
                b = 1;
            }
            else {
                b = 0;
            }
            if (b) {
                if (hit_pos) {
                    hit_pos.x = px + t * dx;
                    hit_pos.y = py + t * dy;
                    hit_pos.z = pz + t * dz;
                }
                if (hit_norm) {
                    hit_norm.x = hit_norm.y = hit_norm.z = 0;
                    if (steppedIndex === 0)
                        hit_norm.x = -stepx;
                    if (steppedIndex === 1)
                        hit_norm.y = -stepy;
                    if (steppedIndex === 2)
                        hit_norm.z = -stepz;
                }
                return b;
            }
            if (txMax < tyMax) {
                if (txMax < tzMax) {
                    ix += stepx;
                    t = txMax;
                    txMax += txDelta;
                    steppedIndex = 0;
                }
                else {
                    iz += stepz;
                    t = tzMax;
                    tzMax += tzDelta;
                    steppedIndex = 2;
                }
            }
            else {
                if (tyMax < tzMax) {
                    iy += stepy;
                    t = tyMax;
                    tyMax += tyDelta;
                    steppedIndex = 1;
                }
                else {
                    iz += stepz;
                    t = tzMax;
                    tzMax += tzDelta;
                    steppedIndex = 2;
                }
            }
        }
        if (hit_pos) {
            hit_pos.x = px + t * dx;
            hit_pos.y = py + t * dy;
            hit_pos.z = pz + t * dz;
        }
        if (hit_norm) {
            hit_norm.x = hit_norm.y = hit_norm.z = 0;
        }
        return 0;
    }
    static volumeRay(stack, origin, direction, max_d, hit_pos, hit_norm) {
        let px = +origin.x;
        let py = +origin.y;
        let pz = +origin.z;
        let dx = +direction.x;
        let dy = +direction.y;
        let dz = +direction.z;
        let ds = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (ds === 0) {
            throw new Error("Can't raycast along a zero vector");
        }
        dx /= ds;
        dy /= ds;
        dz /= ds;
        if (typeof max_d === "undefined") {
            max_d = 64.0;
        }
        else {
            max_d = +max_d;
        }
        return this._traceDataRay(stack, px, py, pz, dx, dy, dz, max_d, hit_pos, hit_norm);
    }
    static toAframeSpace(vector) {
        return vector.divide(ThreeUtils.objectToVector3(Constants.stackSpaceMultiplier));
    }
}

class EventUtils {
    static debounce(fn, debounceDuration) {
        debounceDuration = debounceDuration || 100;
        return function () {
            if (!fn.debouncing) {
                const args = Array.prototype.slice.apply(arguments);
                fn.lastReturnVal = fn.apply(this, args);
                fn.debouncing = true;
            }
            clearTimeout(fn.debounceTimeout);
            fn.debounceTimeout = setTimeout(function () {
                fn.debouncing = false;
            }, debounceDuration);
            return fn.lastReturnVal;
        };
    }
}

class GetUtils$$1 {
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
GetUtils$$1.cssUnits = [
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

class AlGraphEvents {
}
AlGraphEvents.SELECTED = "al-graph-selected";
AlGraphEvents.POINTER_OVER = "al-graph-pointer-over";
AlGraphEvents.POINTER_OUT = "al-graph-pointer-out";
AlGraphEvents.DRAGGED = "al-graph-dragged";
AlGraphEvents.POINTER_DOWN = "al-graph-pointer-down";
AlGraphEvents.POINTER_UP = "al-graph-pointer-up";
class GraphUtils {
    static getEntryWithHighestId(entries) {
        if (entries.size) {
            return Math.max.apply(Math, Array.from(entries).map(([id]) => {
                return Number(id.split("-")[1]);
            }));
        }
        return -1;
    }
    static getNextId(type, entries) {
        return type + "-" + Number(this.getEntryWithHighestId(entries) + 1);
    }
}

class ShaderUtils {
    static getHaloMaterial(red = 0.5, green = 0.5, blue = 0.5, alpha = 0.1, chrominace = 0.5) {
        return new THREE.ShaderMaterial({
            uniforms: {
                r: { value: red },
                g: { value: green },
                b: { value: blue },
                a: { value: alpha },
                c: { value: chrominace }
            },
            vertexShader: this.haloVertex,
            fragmentShader: this.haloFragment,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false
        });
    }
}
ShaderUtils.haloVertex = `
    varying vec3 vNormal;

    void main()
    {
        vNormal = normalize( normalMatrix * normal );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `;
ShaderUtils.haloFragment = `
    varying vec3 vNormal;
    uniform float r;
    uniform float g;
    uniform float b;
    uniform float a;
    uniform float c;

    void main()
    {
        float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 4.0 );
        gl_FragColor = vec4(r, g, b, a) * intensity;
    }
  `;

var AlGraphEntryType;
(function (AlGraphEntryType) {
    AlGraphEntryType["NODE"] = "node";
    AlGraphEntryType["EDGE"] = "edge";
    AlGraphEntryType["ANGLE"] = "angle";
})(AlGraphEntryType || (AlGraphEntryType = {}));

var MeshFileType;
(function (MeshFileType) {
    MeshFileType["GLTF"] = "gltf";
    MeshFileType["GLB"] = "glb";
})(MeshFileType || (MeshFileType = {}));

var RayType;
(function (RayType) {
    RayType["LOCK"] = "LOCK";
    RayType["MESH"] = "MESH";
})(RayType || (RayType = {}));

AFRAME.registerComponent("al-angle", {
    schema: {
        selected: { type: "boolean" },
        edge0Pos: { type: "vec3" },
        edge1Pos: { type: "vec3" },
        position: { type: "vec3" },
        length: { type: "number" },
        radius: { type: "number" },
        angle: { type: "number" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        this.bindMethods();
        this.addEventListeners();
        this.state = {
            selected: true,
            hovered: false
        };
        this.createMesh();
    },
    bindMethods() {
        this.pointerDown = this.pointerDown.bind(this);
        this.pointerOver = this.pointerOver.bind(this);
        this.pointerOut = this.pointerOut.bind(this);
        this.createMesh = this.createMesh.bind(this);
    },
    addEventListeners() {
        this.el.addEventListener("mousedown", this.pointerDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected", this.pointerOver, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected-cleared", this.pointerOut, {
            capture: false,
            once: false,
            passive: true
        });
    },
    removeEventListeners() {
        this.el.removeEventListener("mousedown", this.pointerDown);
        this.el.removeEventListener("raycaster-intersected", this.pointerOver);
        this.el.removeEventListener("raycaster-intersected-cleared", this.pointerOut);
    },
    pointerDown(_event) {
        this.el.sceneEl.emit(AlGraphEvents.SELECTED, { type: AlGraphEntryType.ANGLE, id: this.el.id }, true);
    },
    pointerOver(_event) {
        let state = this.state;
        state.hovered = true;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OVER, { id: this.el.id }, true);
    },
    pointerOut(_event) {
        let state = this.state;
        state.hovered = false;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OUT, {}, true);
    },
    createMesh() {
        const edgePos0 = ThreeUtils.objectToVector3(this.data.edge0Pos);
        const edgePos1 = ThreeUtils.objectToVector3(this.data.edge1Pos);
        var orientation = new THREE.Matrix4();
        orientation.lookAt(edgePos0, edgePos1, new THREE.Object3D().up);
        orientation.multiply(new THREE.Matrix4().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1));
        let geometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.length, 6, 4);
        let material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        mesh.applyMatrix(orientation);
        mesh.position.copy(ThreeUtils.objectToVector3(this.data.position));
        this.state.geometry = geometry;
        this.state.material = material;
        this.state.mesh = mesh;
        let outlineGeometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.length, 6, 4);
        let outlineMaterial = ShaderUtils.getHaloMaterial();
        const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
        this.state.outlineGeometry = outlineGeometry;
        this.state.outlineMaterialt = outlineMaterial;
        this.state.outlineMesh = outlineMesh;
        mesh.add(outlineMesh);
        this.el.setObject3D("mesh", mesh);
        this.el.object3D.renderOrder =
            Constants.topLayerRenderOrder - 3;
    },
    update(oldData) {
        let state = this.state;
        state.selected = this.data.selected;
        if (oldData && oldData.angle !== this.data.angle) {
            this.createMesh();
        }
    },
    tickFunction() {
        const el = this.el;
        let state = this.state;
        if (state.hovered) {
            state.material.color = new THREE.Color(Constants.buttonColors.hover);
        }
        else if (state.selected) {
            state.material.color = new THREE.Color(Constants.buttonColors.active);
        }
        else {
            state.material.color = new THREE.Color(Constants.buttonColors.up);
        }
        const text = el.firstChild;
        if (text) {
            const obj3d = text.object3D;
            if (state.hovered) {
                obj3d.visible = true;
            }
            else {
                obj3d.visible = false;
            }
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
    }
});

AFRAME.registerComponent("al-bounding-box", {
    schema: {
        color: { type: "string", default: "#f50057" },
        scale: { type: "string" }
    },
    init() {
        this.bindMethods();
        this.addEventListeners();
        this.state = {
            box: new THREE.Box3()
        };
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    update() {
        const el = this.el;
        let state = this.state;
        let scale = ThreeUtils.stringToVector3(this.data.scale);
        state.box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), scale);
        let geometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
        let material = new THREE.MeshBasicMaterial({
            color: this.data.color,
            visible: false
        });
        let mesh = new THREE.Mesh(geometry, material);
        el.setObject3D("mesh2", mesh);
        state.boundingBox = new THREE.Box3Helper(state.box, this.data.color);
        state.boundingBox.renderOrder = Constants.topLayerRenderOrder - 5;
        el.setObject3D("mesh", state.boundingBox);
        state.geometry = geometry;
        state.material = material;
        state.mesh = mesh;
    },
    remove() {
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
        this.el.removeObject3D("mesh2");
    }
});

AFRAME.registerComponent("al-edge", {
    schema: {
        selected: { type: "boolean" },
        node1: { type: "vec3" },
        node2: { type: "vec3" },
        length: { type: "number" },
        radius: { type: "number" },
        nodeScale: { type: "number" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        this.bindMethods();
        this.addEventListeners();
        this.state = {
            selected: true,
            hovered: false
        };
    },
    bindMethods() {
        this.pointerDown = this.pointerDown.bind(this);
        this.pointerOver = this.pointerOver.bind(this);
        this.pointerOut = this.pointerOut.bind(this);
        this.createMesh = this.createMesh.bind(this);
    },
    addEventListeners() {
        this.el.sceneEl.addEventListener("mousedown", this.pointerDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected", this.pointerOver, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected-cleared", this.pointerOut, {
            capture: false,
            once: false,
            passive: true
        });
    },
    removeEventListeners() {
        this.el.sceneEl.removeEventListener("mousedown", this.pointerDown);
        this.el.removeEventListener("raycaster-intersected", this.pointerOver);
        this.el.removeEventListener("raycaster-intersected-cleared", this.pointerOut);
    },
    pointerDown(_event) {
        let state = this.state;
        if (state.hovered) {
            this.el.sceneEl.emit(AlGraphEvents.SELECTED, { type: AlGraphEntryType.EDGE, id: this.el.id }, false);
        }
    },
    pointerOver(_event) {
        let state = this.state;
        state.hovered = true;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OVER, { id: this.el.id }, false);
    },
    pointerOut(_event) {
        let state = this.state;
        state.hovered = false;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OUT, {}, false);
    },
    createMesh() {
        const node1Pos = ThreeUtils.objectToVector3(this.data.node1);
        const node2Pos = ThreeUtils.objectToVector3(this.data.node2);
        var orientation = new THREE.Matrix4();
        orientation.lookAt(node1Pos, node2Pos, new THREE.Object3D().up);
        orientation.multiply(new THREE.Matrix4().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1));
        let geometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.length, 6, 4);
        let material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        mesh.applyMatrix(orientation);
        this.state.geometry = geometry;
        this.state.material = material;
        this.state.mesh = mesh;
        let outlineGeometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.length - this.data.nodeScale * 2, 6, 4);
        let outlineMaterial = ShaderUtils.getHaloMaterial();
        const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
        this.state.outlineGeometry = outlineGeometry;
        this.state.outlineMaterialt = outlineMaterial;
        this.state.outlineMesh = outlineMesh;
        mesh.add(outlineMesh);
        this.el.setObject3D("mesh", mesh);
        this.el.object3D.renderOrder =
            Constants.topLayerRenderOrder - 2;
    },
    update(oldData) {
        let state = this.state;
        state.selected = this.data.selected;
        if (oldData &&
            (oldData.radius !== this.data.radius ||
                oldData.length !== this.data.length)) {
            this.createMesh();
        }
    },
    tickFunction() {
        const el = this.el;
        let state = this.state;
        if (state.hovered) {
            state.material.color = new THREE.Color(Constants.buttonColors.hover);
        }
        else if (state.selected) {
            state.material.color = new THREE.Color(Constants.buttonColors.active);
        }
        else {
            state.material.color = new THREE.Color(Constants.buttonColors.up);
        }
        const text = el.firstChild;
        if (text) {
            const obj3d = text.object3D;
            if (state.hovered) {
                obj3d.visible = true;
            }
            else {
                obj3d.visible = false;
            }
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
    }
});

AFRAME.registerComponent("al-fixed-to-orbit-camera", {
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

AFRAME.registerComponent("al-gltf-model", {
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
class AlGltfModelEvents {
}
AlGltfModelEvents.LOADED = "al-model-loaded";
AlGltfModelEvents.ERROR = "al-model-error";

AFRAME.registerComponent("al-look-to-camera", {
    schema: {},
    init() {
        this.bindMethods();
        this.addEventListeners();
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    tickFunction() {
        this.el.object3D.lookAt(this.el.sceneEl.camera.position);
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
    }
});

AFRAME.registerComponent("al-node", {
    schema: {
        scale: { type: "number", default: 1 },
        selected: { type: "boolean" },
        graphEnabled: { type: "boolean" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        this.bindMethods();
        this.addEventListeners();
        const data = this.data;
        let el = this.el;
        const camera = el.sceneEl.camera.el.object3DMap.camera;
        const geometry = new THREE.SphereGeometry(data.scale, 16, 16);
        let material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        let outlineGeometry = new THREE.SphereGeometry(data.scale, 16, 16);
        let outlineMaterial = ShaderUtils.getHaloMaterial();
        const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
        mesh.add(outlineMesh);
        el.setObject3D("mesh", mesh);
        el.object3D.renderOrder =
            Constants.topLayerRenderOrder - 1;
        this.state = {
            selected: true,
            hovered: false,
            geometry,
            material,
            mesh,
            outlineGeometry,
            outlineMaterial,
            outlineMesh,
            camera,
            dragging: false
        };
    },
    bindMethods() {
        this.pointerDown = this.pointerDown.bind(this);
        this.pointerUp = this.pointerUp.bind(this);
        this.pointerOver = this.pointerOver.bind(this);
        this.pointerOut = this.pointerOut.bind(this);
    },
    addEventListeners() {
        this.el.sceneEl.addEventListener("mousedown", this.pointerDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("mouseup", this.pointerUp, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.addEventListener("mouseup", this.pointerUp, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected", this.pointerOver, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected-cleared", this.pointerOut, {
            capture: false,
            once: false,
            passive: true
        });
    },
    removeEventListeners() {
        this.el.sceneEl.removeEventListener("mousedown", this.pointerDown);
        this.el.sceneEl.removeEventListener("mouseup", this.pointerUp);
        this.el.removeEventListener("mouseup", this.pointerUp);
        this.el.removeEventListener("raycaster-intersected", this.pointerOver);
        this.el.removeEventListener("raycaster-intersected-cleared", this.pointerOut);
    },
    pointerDown(_event) {
        let state = this.state;
        if (state.hovered) {
            this.el.sceneEl.emit(AlGraphEvents.SELECTED, { type: AlGraphEntryType.NODE, id: this.el.id }, true);
            if (this.data.graphEnabled) {
                let state = this.state;
                state.mouseDown = true;
                this.el.sceneEl.emit(AlGraphEvents.POINTER_DOWN, {}, true);
            }
        }
    },
    pointerUp(_event) {
        let state = this.state;
        if (this.data.graphEnabled) {
            state.dragging = false;
            state.mouseDown = false;
            this.el.sceneEl.emit(AlGraphEvents.POINTER_UP, {}, true);
        }
    },
    pointerOver(_event) {
        let state = this.state;
        state.hovered = true;
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OVER, { id: this.el.id }, true);
    },
    pointerOut(_event) {
        let state = this.state;
        state.hovered = false;
        if (state.mouseDown && state.selected) {
            state.dragging = true;
        }
        this.el.sceneEl.emit(AlGraphEvents.POINTER_OUT, {}, true);
    },
    update() {
        let state = this.state;
        state.selected = this.data.selected;
    },
    tickFunction() {
        const el = this.el;
        let state = this.state;
        if (this.data.graphEnabled && state.dragging) {
            this.el.sceneEl.emit(AlGraphEvents.DRAGGED, { id: this.el.id }, true);
        }
        if (state.hovered || state.dragging) {
            state.material.color = new THREE.Color(Constants.buttonColors.hover);
        }
        else if (state.selected) {
            state.material.color = new THREE.Color(Constants.buttonColors.active);
        }
        else {
            state.material.color = new THREE.Color(Constants.buttonColors.up);
        }
        const text = el.firstChild;
        if (text) {
            const obj3d = text.object3D;
            if (state.hovered || state.dragging) {
                obj3d.visible = true;
            }
            else {
                obj3d.visible = false;
            }
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeEventListeners();
        this.el.removeObject3D("mesh");
    }
});

AFRAME.registerComponent("al-node-spawner", {
    schema: {
        graphEnabled: { type: "boolean" }
    },
    init() {
        this.bindMethods();
        this.addEventListeners();
        this.state = {
            left: false,
            intersecting: false
        };
    },
    bindMethods() {
        this.canvasMouseDown = this.canvasMouseDown.bind(this);
        this.pointerOver = this.pointerOver.bind(this);
        this.pointerOut = this.pointerOut.bind(this);
        this.elClick = this.elClick.bind(this);
        this.canvasMouseUp = this.canvasMouseUp.bind(this);
        this.pointerDown = this.pointerDown.bind(this);
        this.pointerUp = this.pointerUp.bind(this);
    },
    addEventListeners() {
        this.el.sceneEl.canvas.addEventListener("mousedown", this.canvasMouseDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.canvas.addEventListener("mouseup", this.canvasMouseUp, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected", this.pointerOver, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("raycaster-intersected-cleared", this.pointerOut, false);
        this.el.addEventListener("click", this.elClick, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("mousedown", this.pointerDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.addEventListener("mouseup", this.pointerUp, {
            capture: false,
            once: false,
            passive: true
        });
    },
    removeEventListeners() {
        this.el.sceneEl.canvas.removeEventListener("mousedown", this.canvasMouseDown);
        this.el.sceneEl.canvas.removeEventListener("mouseup", this.canvasMouseUp);
        this.el.removeEventListener("raycaster-intersected", this.pointerOver);
        this.el.removeEventListener("raycaster-intersected-cleared", this.pointerOut);
        this.el.removeEventListener("click", this.elClick);
        this.el.removeEventListener("mousedown", this.pointerDown);
        this.el.removeEventListener("mouseup", this.pointerUp);
    },
    canvasMouseDown(event) {
        this.state.left = event.button === 0;
    },
    canvasMouseUp(_event) {
        ThreeUtils.waitOneFrame(() => {
            this.state.left = false;
        });
    },
    pointerOver(_event) {
        this.state.intersecting = true;
        this.el.sceneEl.emit(AlNodeSpawnerEvents.VALID_TARGET, { valid: true }, false);
    },
    pointerOut(_event) {
        this.state.intersecting = false;
        this.el.sceneEl.emit(AlNodeSpawnerEvents.VALID_TARGET, { valid: false }, false);
    },
    pointerDown(_event) {
        if (this.data.graphEnabled) {
            this.el.sceneEl.emit(AlGraphEvents.POINTER_DOWN, {}, false);
        }
    },
    pointerUp(_event) {
        if (this.data.graphEnabled) {
            this.el.sceneEl.emit(AlGraphEvents.POINTER_UP, {}, false);
        }
    },
    elClick(event) {
        if (this.state.left && this.data.graphEnabled) {
            this.el.sceneEl.emit(AlNodeSpawnerEvents.ADD_NODE, { aframeEvent: event }, false);
        }
    },
    remove() {
        this.removeEventListeners();
    }
});
class AlNodeSpawnerEvents {
}
AlNodeSpawnerEvents.VALID_TARGET = "al-valid-target";
AlNodeSpawnerEvents.ADD_NODE = "al-add-node";

AFRAME.registerComponent("al-orbit-control", {
    dependencies: ["camera"],
    schema: {
        animating: { type: "boolean", default: false },
        autoRotate: { type: "boolean" },
        autoRotateSpeed: { default: 2 },
        controlPosition: { type: "vec3" },
        controlTarget: { type: "vec3" },
        dampingFactor: { default: 0.1 },
        enabled: { default: true },
        enableDamping: { default: true },
        enableKeys: { default: true },
        enablePan: { default: true },
        enableRotate: { default: true },
        enableZoom: { default: true },
        keyPanSpeed: { default: 7 },
        maxAzimuthAngle: { type: "number", default: Infinity },
        maxDistance: { default: 8000 },
        maxPolarAngle: { default: 88 },
        minAzimuthAngle: { type: "number", default: -Infinity },
        minDistance: { default: 1 },
        minPolarAngle: { default: 0 },
        rotateSpeed: { default: 0.05 },
        screenSpacePanning: { default: false },
        zoomSpeed: { type: "number", default: 0.5 }
    },
    bindMethods() {
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.canvasWheel = this.canvasWheel.bind(this);
        this.getCameraState = this.getCameraState.bind(this);
        this.handleAnimationCache = this.handleAnimationCache.bind(this);
        this.onWheel = this.onWheel.bind(this);
    },
    addListeners() {
        window.addEventListener("mouseup", this.mouseUp, {
            capture: false,
            once: false,
            passive: true
        });
        window.addEventListener("mousemove", this.mouseMove, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.canvas.addEventListener("mousedown", this.mouseDown, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.canvas.addEventListener("wheel", this.canvasWheel, {
            capture: false,
            once: false,
            passive: true
        });
        this.el.sceneEl.addEventListener(AlOrbitControlEvents.ANIMATION_STARTED, this.handleAnimationCache, false);
    },
    removeListeners() {
        window.removeEventListener("mouseup", this.mouseUp);
        window.removeEventListener("mousemove", this.mouseMove),
            this.el.sceneEl.canvas.removeEventListener("mousedown", this.mouseDown);
        this.el.sceneEl.canvas.removeEventListener("wheel", this.canvasWheel);
        this.el.sceneEl.removeEventListener(AlOrbitControlEvents.ANIMATION_STARTED, this.handleAnimationCache, false);
    },
    handleAnimationCache(event) {
        this.state.animationCache = event.detail.slerpPath;
    },
    mouseUp(_event) {
        this.state.mouseDown = false;
        document.body.style.cursor = "grab";
        let controls = this.state.controls;
        if (controls.enabled) {
            this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION_FINISHED, { cameraState: this.getCameraState() }, false);
        }
    },
    mouseDown(_event) {
        this.state.mouseDown = true;
        document.body.style.cursor = "grabbing";
    },
    mouseMove(_event) {
        if (this.state.mouseDown) {
            this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION, { cameraState: this.getCameraState() }, false);
        }
    },
    onWheel() {
        const state = this.state;
        state.wheelMarker = false;
        state.wheelCounter2 = state.wheelCounter1;
        setTimeout(() => {
            if (state.wheelCounter2 === state.wheelCounter1) {
                state.wheelMarker = true;
                state.wheelCounter1 = 0;
                state.wheelCounter2 = 0;
                this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION_FINISHED, { cameraState: this.getCameraState() }, false);
            }
            else {
                this.onWheel();
            }
        }, state.wheelInterval);
    },
    canvasWheel(_event) {
        const state = this.state;
        state.wheelCounter1 += 1;
        if (state.wheelMarker) {
            this.onWheel();
        }
        this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION, { cameraState: this.getCameraState() }, false);
    },
    init() {
        let el = this.el;
        let data = this.data;
        document.body.style.cursor = "grab";
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        let controls = new THREE.OrbitControls(el.getObject3D("camera"), el.sceneEl.renderer.domElement);
        let controlPosition = ThreeUtils.objectToVector3(data.controlPosition);
        let controlTarget = ThreeUtils.objectToVector3(data.controlTarget);
        controls.object.position.copy(controlPosition);
        el.getObject3D("camera").position.copy(controlPosition);
        controls.target.copy(controlTarget);
        let animationCache = [];
        this.state = {
            animationCache,
            controls,
            mouseDown: false,
            wheelCounter1: 0,
            wheelCounter2: undefined,
            wheelInterval: 50,
            wheelMarker: true
        };
        this.bindMethods();
        this.addListeners();
        ThreeUtils.waitOneFrame(() => {
            this.el.sceneEl.emit(AlOrbitControlEvents.INTERACTION, { cameraState: this.getCameraState() }, false);
        });
    },
    getCameraState() {
        return {
            position: this.state.controls.object.position,
            target: this.state.controls.target
        };
    },
    update(_oldData) {
        let controls = this.state.controls;
        const data = this.data;
        controls.target = ThreeUtils.objectToVector3(data.controlTarget);
        controls.autoRotate = data.autoRotate;
        controls.autoRotateSpeed = data.autoRotateSpeed;
        controls.dampingFactor = data.dampingFactor;
        controls.enabled = data.enabled;
        controls.enableDamping = data.enableDamping;
        controls.enableKeys = data.enableKeys;
        controls.enablePan = data.enablePan;
        controls.enableRotate = data.enableRotate;
        controls.enableZoom = data.enableZoom;
        controls.keyPanSpeed = data.keyPanSpeed;
        controls.maxPolarAngle = THREE.Math.degToRad(data.maxPolarAngle);
        controls.maxAzimuthAngle = THREE.Math.degToRad(data.maxAzimuthAngle);
        controls.maxDistance = data.maxDistance;
        controls.minDistance = data.minDistance;
        controls.minPolarAngle = THREE.Math.degToRad(data.minPolarAngle);
        controls.minAzimuthAngle = THREE.Math.degToRad(data.minAzimuthAngle);
        controls.rotateSpeed = data.rotateSpeed;
        controls.screenSpacePanning = data.screenSpacePanning;
        controls.zoomSpeed = data.zoomSpeed;
        this.el
            .getObject3D("camera")
            .position.copy(ThreeUtils.objectToVector3(data.controlPosition));
    },
    tickFunction() {
        let controls = this.state.controls;
        if (!controls.enabled) {
            return;
        }
        if (this.data.animating) {
            let nextFrame = this.state.animationCache.shift();
            if (nextFrame && nextFrame.position && nextFrame.target) {
                controls.object.position.copy(nextFrame.position);
                this.el.getObject3D("camera").position.copy(nextFrame.position);
                controls.target.copy(nextFrame.target);
            }
            if (this.state.animationCache.length === 0) {
                this.el.sceneEl.emit(AlOrbitControlEvents.ANIMATION_FINISHED, {}, false);
            }
        }
        if (controls.enabled && (controls.enableDamping || controls.autoRotate)) {
            controls.update();
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.removeListeners();
        let state = this.state;
        state.controls.dispose();
        state = null;
    }
});
class AlOrbitControlEvents {
}
AlOrbitControlEvents.INTERACTION = "al-orbit-interaction";
AlOrbitControlEvents.INTERACTION_FINISHED = "al-orbit-controls-interaction-finished";
AlOrbitControlEvents.ANIMATION_STARTED = "al-orbit-controls-animation-started";
AlOrbitControlEvents.ANIMATION_FINISHED = "al-orbit-controls-animation-finished";

AFRAME.registerComponent("al-render-order", {
    schema: {
        order: { type: "number", default: Constants.topLayerRenderOrder }
    },
    init() {
        this.bindMethods();
        this.addEventListeners();
        Object.keys(this.el.object3DMap).forEach(key => {
            this.el.object3DMap[key].renderOrder = this.data.order;
        });
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    update() {
        Object.keys(this.el.object3DMap).forEach(key => {
            this.el.object3DMap[key].renderOrder = this.data.order;
        });
    },
    remove() {
        this.removeEventListeners();
    }
});

AFRAME.registerComponent("al-render-overlaid", {
    schema: {},
    init(_data) {
        this.bindMethods();
        this.addEventListeners();
        this.setDepth(this.el.object3DMap.mesh);
        this.setDepth(this.el.object3DMap.text);
    },
    bindMethods() { },
    addEventListeners() { },
    removeEventListeners() { },
    setDepth(mesh) {
        if (mesh) {
            mesh.renderOrder = Constants.topLayerRenderOrder;
            if (mesh.material) {
                mesh.material.depthTest = false;
            }
        }
    },
    remove() {
        this.removeEventListeners();
    }
});

class VolumetricLoader {
    constructor() { }
    load(src, container) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", src, true);
            xhr.onload = () => {
                let data = JSON.parse(xhr.responseText);
                data = this._mapfiles(data.baseurl, data.series);
                const loader = new AMI.VolumeLoader(container);
                loader
                    .load(data)
                    .then(() => {
                    const src = loader.data[0].mergeSeries(loader.data);
                    const stack = src[0].stack[0];
                    loader.free();
                    resolve(stack);
                })
                    .catch(error => {
                    console.log("Volume load error");
                    reject(error);
                });
            };
            xhr.onerror = error => {
                reject(error);
            };
            xhr.send();
        });
    }
    _mapfiles(baseurl, files) {
        return files.map(filename => {
            if (!baseurl.endsWith("/")) {
                baseurl += "/";
            }
            return `${baseurl}${filename}`;
        });
    }
}

AFRAME.registerComponent("al-volume", {
    schema: {
        displayMode: { type: "string" },
        isWebGl2: { type: "boolean" },
        slicesIndex: { type: "number" },
        slicesOrientation: { type: "string" },
        slicesWindowCenter: { type: "number" },
        slicesWindowWidth: { type: "number" },
        src: { type: "string" },
        srcLoaded: { type: "boolean" },
        volumeSteps: { type: "number" },
        volumeWindowCenter: { type: "number" },
        volumeWindowWidth: { type: "number" }
    },
    init() {
        this.tickFunction = AFRAME.utils.throttle(this.tickFunction, Constants.minFrameMS, this);
        this.loader = new VolumetricLoader();
        this.state = {
            bufferScene: new THREE.Scene(),
            bufferSceneTextureHeight: this.el.sceneEl.canvas.clientHeight,
            bufferSceneTextureWidth: this.el.sceneEl.canvas.clientWidth
        };
        this.bindMethods();
        this.addEventListeners();
        this.createBufferTexture();
        this.debouncedRenderBufferScene = EventUtils.debounce(this.renderBufferScene, Constants.minFrameMS).bind(this);
    },
    bindMethods() {
        this.addEventListeners = this.addEventListeners.bind(this);
        this.createVolumePlane = this.createVolumePlane.bind(this);
        this.handleStack = this.handleStack.bind(this);
        this.onInteraction = this.onInteraction.bind(this);
        this.onInteractionFinished = this.onInteractionFinished.bind(this);
        this.removeEventListeners = this.removeEventListeners.bind(this);
        this.renderBufferScene = this.renderBufferScene.bind(this);
        this.rendererResize = this.rendererResize.bind(this);
        this.createBufferTexture = this.createBufferTexture.bind(this);
    },
    addEventListeners() {
        this.el.sceneEl.addEventListener("rendererresize", this.rendererResize, false);
        this.el.sceneEl.addEventListener(AlOrbitControlEvents.INTERACTION, this.onInteraction, false);
        this.el.sceneEl.addEventListener(AlOrbitControlEvents.INTERACTION_FINISHED, this.onInteractionFinished, false);
    },
    removeEventListeners() {
        this.el.sceneEl.removeEventListener("rendererresize", this.rendererResize);
        this.el.sceneEl.removeEventListener(AlOrbitControlEvents.INTERACTION, this.onInteraction);
        this.el.sceneEl.removeEventListener(AlOrbitControlEvents.INTERACTION_FINISHED, this.onInteractionFinished);
    },
    createBufferTexture() {
        this.state.bufferSceneTexture = new THREE.WebGLRenderTarget(this.state.bufferSceneTextureWidth, this.state.bufferSceneTextureHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter });
        this.el.sceneEl
            .object3D.background = this.state.bufferSceneTexture.texture;
    },
    onInteraction(_event) {
        if (this.state.stackhelper) {
            this.state.stackhelper.steps = 2;
            this.renderBufferScene();
        }
    },
    onInteractionFinished(_event) {
        if (this.state.stackhelper) {
            this.state.stackhelper.steps = this.data.volumeSteps;
            this.debouncedRenderBufferScene();
        }
    },
    createVolumePlane() {
        let targetEntity = this.el.sceneEl.querySelector("#target-entity");
        if (targetEntity) {
            let state = this.state;
            let refGeometry = state.stackhelper.mesh.geometry.clone();
            refGeometry.computeBoundingBox();
            refGeometry.computeBoundingSphere();
            let center = targetEntity.object3D.position
                .clone()
                .add(GetUtils$$1.getGeometryCenter(refGeometry));
            let x = this.state.stackhelper.stack.dimensionsIJK.x;
            let y = this.state.stackhelper.stack.dimensionsIJK.y;
            let z = this.state.stackhelper.stack.dimensionsIJK.z;
            let size = Math.max(x, Math.max(y, z));
            let bufferScenePlaneGeometry = new THREE.PlaneGeometry(size, size);
            state.bufferScenePlaneGeometry = bufferScenePlaneGeometry;
            let bufferScenePlaneMaterial = new THREE.MeshBasicMaterial({
                visible: false
            });
            state.bufferScenePlaneMaterial = bufferScenePlaneMaterial;
            let bufferScenePlaneMesh = new THREE.Mesh(bufferScenePlaneGeometry, bufferScenePlaneMaterial);
            bufferScenePlaneMesh.position.copy(center);
            bufferScenePlaneMesh.renderOrder = Constants.topLayerRenderOrder - 4;
            state.bufferScenePlaneMesh = bufferScenePlaneMesh;
            this.el.setObject3D("mesh", bufferScenePlaneMesh);
        }
    },
    rendererResize() {
        let state = this.state;
        let needsResize = state.bufferSceneTextureWidth !== this.el.sceneEl.canvas.clientWidth ||
            state.bufferSceneTextureHeight !== this.el.sceneEl.canvas.clientHeight;
        if (needsResize && this.data.displayMode === DisplayMode.VOLUME) {
            state.bufferSceneTextureWidth = this.el.sceneEl.canvas.clientWidth;
            state.bufferSceneTextureHeight = this.el.sceneEl.canvas.clientHeight;
            this.createBufferTexture();
            this.renderBufferScene();
        }
    },
    renderBufferScene() {
        if (this.data.displayMode === DisplayMode.VOLUME) {
            this.el.sceneEl.renderer.render(this.state.bufferScene, this.el.sceneEl.camera, this.state.bufferSceneTexture);
        }
    },
    handleStack(stack) {
        const state = this.state;
        const el = this.el;
        state.stack = stack;
        switch (this.data.displayMode) {
            case DisplayMode.SLICES: {
                state.stackhelper = new AMI.StackHelper(state.stack);
                state.stackhelper.bbox.visible = false;
                state.stackhelper.border.color = Constants.colorValues.blue;
                break;
            }
            case DisplayMode.VOLUME: {
                const lutCanvases = el.sceneEl.parentEl.querySelector("#lut-canvases");
                state.lutHelper = new AMI.LutHelper(lutCanvases);
                state.lutHelper.luts = AMI.LutHelper.presetLuts();
                state.lutHelper.lutsO = AMI.LutHelper.presetLutsO();
                state.stackhelper = new AMI.VolumeRenderHelper(state.stack);
                state.stackhelper.textureLUT = state.lutHelper.texture;
                break;
            }
        }
        if (el.object3DMap.mesh) {
            el.removeObject3D("mesh");
        }
        if (this.data.displayMode === DisplayMode.SLICES) {
            el.setObject3D("mesh", this.state.stackhelper);
        }
        else {
            if (this.state.bufferScene.children.length) {
                this.state.bufferScene.remove(this.state.bufferScene.children[0]);
            }
            this.state.bufferScene.add(this.state.stackhelper);
            this.createVolumePlane();
        }
        el.sceneEl.emit(AlVolumeEvents.LOADED, state.stackhelper, false);
    },
    update(oldData) {
        const state = this.state;
        const el = this.el;
        if (!this.data.src) {
            return;
        }
        else if (oldData && oldData.src !== this.data.src) {
            this.loader.load(this.data.src, el).then(stack => {
                this.handleStack(stack);
            });
        }
        else if (oldData &&
            oldData.displayMode !== this.data.displayMode &&
            state.stack) {
            this.removeEventListeners();
            this.handleStack(state.stack);
            this.addEventListeners();
            if (this.data.displayMode === DisplayMode.VOLUME) {
                this.createBufferTexture();
                setTimeout(() => {
                    this.renderBufferScene();
                }, 250);
            }
            else {
                this.el.sceneEl.object3D.background = null;
            }
        }
    },
    tickFunction() {
        if (!this.state.stackhelper) {
            return;
        }
        switch (this.data.displayMode) {
            case DisplayMode.SLICES: {
                this.el.setObject3D("mesh", this.state.stackhelper);
                break;
            }
            case DisplayMode.VOLUME: {
                this.state.bufferScenePlaneMesh.lookAt(this.el.sceneEl.camera.position);
                break;
            }
        }
    },
    tick() {
        this.tickFunction();
    },
    remove() {
        this.el.removeObject3D("mesh");
        this.removeEventListeners();
        this.el.sceneEl.object3D.background = null;
        if (this.state.bufferScenePlaneMesh) {
            this.state.bufferScenePlaneMesh.remove();
        }
        if (this.state.bufferScenePlaneMaterial) {
            this.state.bufferScenePlaneMaterial.dispose();
        }
        if (this.state.bufferScenePlaneGeometry) {
            this.state.bufferScenePlaneGeometry.dispose();
        }
    }
});
class AlVolumeEvents {
}
AlVolumeEvents.LOADED = "al-volume-loaded";
AlVolumeEvents.ERROR = "al-volume-error";
AlVolumeEvents.RENDER_LOW = "al-volume-render-low";
AlVolumeEvents.RENDER_FULL = "al-volume-render-full";

var TypeKeys;
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
const appSetSrc = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SRC,
        payload: payload
    });
};
const appSetSrcLoaded = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SRC_LOADED,
        payload: payload
    });
};
const appSetNode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_NODE,
        payload: payload
    });
};
const appDeleteNode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_DELETE_NODE,
        payload: payload
    });
};
const appSelectNode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SELECT_NODE,
        payload: payload
    });
};
const appClearNodes = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_CLEAR_NODES,
        payload: payload
    });
};
const appSetEdge = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_EDGE,
        payload: payload
    });
};
const appDeleteEdge = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_DELETE_EDGE,
        payload: payload
    });
};
const appSelectEdge = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SELECT_EDGE,
        payload: payload
    });
};
const appClearEdges = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_CLEAR_EDGES,
        payload: payload
    });
};
const appSetAngle = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_ANGLE,
        payload: payload
    });
};
const appDeleteAngle = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_DELETE_ANGLE,
        payload: payload
    });
};
const appSelectAngle = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SELECT_ANGLE,
        payload: payload
    });
};
const appClearAngles = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_CLEAR_ANGLES,
        payload: payload
    });
};
const appSetDisplayMode = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_DISPLAY_MODE,
        payload: payload
    });
};
const appSetGraphEnabled = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_NODES_ENABLED,
        payload: payload
    });
};
const appSetBoundingBoxEnabled = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_BOUNDINGBOX_VISIBLE,
        payload: payload
    });
};
const appSetOrientation = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_ORIENTATION,
        payload: payload
    });
};
const appSetSlicesIndex = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SLICES_INDEX,
        payload: payload
    });
};
const appSetSlicesWindowWidth = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SLICES_WINDOW_WIDTH,
        payload: payload
    });
};
const appSetSlicesWindowCenter = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_SLICES_WINDOW_CENTER,
        payload: payload
    });
};
const appSetVolumeSteps = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_VOLUME_STEPS,
        payload: payload
    });
};
const appSetVolumeWindowWidth = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_VOLUME_WINDOW_WIDTH,
        payload: payload
    });
};
const appSetVolumeWindowCenter = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_VOLUME_WINDOW_CENTER,
        payload: payload
    });
};
const appSetCamera = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_CAMERA,
        payload: payload
    });
};
const appSetControlsEnabled = (payload) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_CONTROLS_ENABLED,
        payload: payload
    });
};

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

const getInitialState = () => {
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
const app = (state = getInitialState(), action) => {
    switch (action.type) {
        case TypeKeys.APP_SET_SRC: {
            const [src, plDisplayMode] = action.payload;
            let displayMode;
            if (plDisplayMode) {
                displayMode = plDisplayMode;
            }
            else if (src) {
                const fileExtension = GetUtils$$1.getFileExtension(src);
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
const rootReducer = combineReducers({
    app
});

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, applyMiddleware(thunk));

class Aleph {
    constructor() {
        this._hovered = null;
        this._isShiftDown = false;
        this._isWebGl2 = true;
        this.width = "640";
        this.height = "480";
    }
    async load(src, displayMode) {
        if (this.src) {
            this._setSrc(null);
            setTimeout(() => {
                this._setSrc(src, displayMode);
            }, Constants.minLoadingMS);
        }
        else {
            this._setSrc(src, displayMode);
        }
    }
    async resize() {
        this._resize();
    }
    async setNode(node) {
        this._setNode(node);
    }
    async setGraph(graph) {
        this._setGraph(graph);
    }
    async deleteNode(nodeId) {
        this._deleteNode(nodeId);
    }
    async clearGraph() {
        this._clearGraph();
    }
    async selectNode(nodeId) {
        this._selectNode(nodeId, true);
    }
    async deleteEdge(edgeId) {
        this._deleteEdge(edgeId);
    }
    async deleteAngle(angleId) {
        this._deleteAngle(angleId);
    }
    async setEdge(edge) {
        this._setEdge(edge);
    }
    async setDisplayMode(displayMode) {
        this._setDisplayMode(displayMode);
    }
    async setGraphEnabled(enabled) {
        this._setGraphEnabled(enabled);
    }
    async setBoundingBoxEnabled(visible) {
        this._setBoundingBoxEnabled(visible);
    }
    async setSlicesIndex(index) {
        this._setSlicesIndex(index);
    }
    async setOrientation(orientation) {
        this._setOrientation(orientation);
    }
    async setSlicesWindowCenter(center) {
        this._setSlicesWindowCenter(center);
    }
    async setSlicesWindowWidth(width) {
        this._setSlicesWindowWidth(width);
    }
    async setVolumeSteps(steps) {
        this._setVolumeSteps(steps);
    }
    async setVolumeWindowCenter(center) {
        this._setVolumeWindowCenter(center);
    }
    async setVolumeWindowWidth(width) {
        this._setVolumeWindowWidth(width);
    }
    componentWillLoad() {
        this._isWebGl2 = ThreeUtils.isWebGL2Available();
        this.store.setStore(configureStore({}));
        this.store.mapStateToProps(this, state => {
            const { app: { angles, boundingBoxEnabled, camera, controlsEnabled, displayMode, edges, graphEnabled, nodes, orientation, selected, slicesIndex, slicesWindowCenter, slicesWindowWidth, src, srcLoaded, volumeSteps, volumeWindowCenter, volumeWindowWidth } } = state;
            return {
                angles,
                boundingBoxEnabled,
                camera,
                controlsEnabled,
                displayMode,
                edges,
                graphEnabled,
                nodes,
                orientation,
                selected,
                slicesIndex,
                slicesWindowCenter,
                slicesWindowWidth,
                src,
                srcLoaded,
                volumeSteps,
                volumeWindowCenter,
                volumeWindowWidth
            };
        });
        this.store.mapDispatchToProps(this, {
            appClearAngles,
            appClearEdges,
            appClearNodes,
            appDeleteAngle,
            appDeleteEdge,
            appDeleteNode,
            appSelectAngle,
            appSelectEdge,
            appSelectNode,
            appSetAngle,
            appSetBoundingBoxEnabled,
            appSetCamera,
            appSetControlsEnabled,
            appSetDisplayMode,
            appSetEdge,
            appSetGraphEnabled,
            appSetNode,
            appSetOrientation,
            appSetSlicesIndex,
            appSetSlicesWindowCenter,
            appSetSlicesWindowWidth,
            appSetSrc,
            appSetSrcLoaded,
            appSetVolumeSteps,
            appSetVolumeWindowCenter,
            appSetVolumeWindowWidth
        });
        this._controlsAnimationFinishedHandler = this._controlsAnimationFinishedHandler.bind(this);
        this._controlsInteractionHandler = this._controlsInteractionHandler.bind(this);
        this._graphEntryDraggedHandler = this._graphEntryDraggedHandler.bind(this);
        this._graphEntryPointerDownHandler = this._graphEntryPointerDownHandler.bind(this);
        this._graphEntryPointerOutHandler = this._graphEntryPointerOutHandler.bind(this);
        this._graphEntryPointerOverHandler = this._graphEntryPointerOverHandler.bind(this);
        this._graphEntryPointerUpHandler = this._graphEntryPointerUpHandler.bind(this);
        this._graphEntrySelectedHandler = this._graphEntrySelectedHandler.bind(this);
        this._graphEntryValidTargetHandler = this._graphEntryValidTargetHandler.bind(this);
        this._keyDownHandler = this._keyDownHandler.bind(this);
        this._keyUpHandler = this._keyUpHandler.bind(this);
        this._controlsInteractionFinishedHandler = this._controlsInteractionFinishedHandler.bind(this);
        this._spawnNodeHandler = this._spawnNodeHandler.bind(this);
        this._srcLoaded = this._srcLoaded.bind(this);
        this._debouncedAppSetCamera = EventUtils.debounce(this.appSetCamera, Constants.minFrameMS).bind(this);
    }
    _renderSpinner() {
        if (this.src && !this.srcLoaded) {
            return (h("div", { id: "spinner" },
                h("div", { class: "square" })));
        }
    }
    _renderSrc() {
        if (!this.src) {
            return null;
        }
        switch (this.displayMode) {
            case DisplayMode.MESH: {
                return (h("a-entity", { class: "collidable", "al-node-spawner": `
              graphEnabled: ${this.graphEnabled};
            `, "al-gltf-model": `
              src: url(${this.src});
              dracoDecoderPath: ${this.dracoDecoderPath};
            `, position: "0 0 0", scale: "1 1 1", ref: (el) => (this._targetEntity = el) }));
            }
            case DisplayMode.SLICES: {
                return (h("a-entity", { id: "target-entity", class: "collidable", "al-node-spawner": `
              graphEnabled: ${this.graphEnabled};
            `, "al-volume": `
              srcLoaded: ${this.srcLoaded};
              src: ${this.src};
              displayMode: ${this.displayMode};
              slicesIndex: ${this.slicesIndex};
              slicesOrientation: ${this.orientation};
              slicesWindowWidth: ${this.slicesWindowWidth};
              slicesWindowCenter: ${this.slicesWindowCenter};
              volumeSteps: ${this.volumeSteps};
              volumeWindowCenter: ${this.volumeWindowCenter};
              volumeWindowWidth: ${this.volumeWindowWidth};
              isWebGl2: ${this._isWebGl2};
            `, position: "0 0 0", ref: (el) => (this._targetEntity = el) }));
            }
            case DisplayMode.VOLUME: {
                return (h("a-entity", { id: "target-entity", "al-volume": `
              srcLoaded: ${this.srcLoaded};
              src: ${this.src};
              displayMode: ${this.displayMode};
              slicesIndex: ${this.slicesIndex};
              slicesOrientation: ${this.orientation};
              slicesWindowWidth: ${this.slicesWindowWidth};
              slicesWindowCenter: ${this.slicesWindowCenter};
              volumeSteps: ${this.volumeSteps};
              volumeWindowCenter: ${this.volumeWindowCenter};
              volumeWindowWidth: ${this.volumeWindowWidth};
              isWebGl2: ${this._isWebGl2};
            `, position: "0 0 0", ref: (el) => (this._targetEntity = el) }));
            }
        }
    }
    _renderBoundingBox() {
        if (this.srcLoaded && this.boundingBoxEnabled) {
            let size = new THREE.Vector3();
            this._boundingBox.getSize(size);
            let position;
            switch (this.displayMode) {
                case DisplayMode.MESH: {
                    position = this._targetEntity.object3D.position.clone();
                    break;
                }
                case DisplayMode.VOLUME:
                case DisplayMode.SLICES: {
                    position = this._targetEntity.object3D.position
                        .clone()
                        .add(GetUtils$$1.getGeometryCenter(this._getMesh().geometry));
                    break;
                }
            }
            if (this.displayMode === DisplayMode.VOLUME) {
                return (h("a-entity", { position: ThreeUtils.vector3ToString(position), "al-bounding-box": `
              scale: ${ThreeUtils.vector3ToString(size)};
              color: ${Constants.colorValues.red};
            `, "al-node-spawner": `
              graphEnabled: ${this.graphEnabled};
            `, class: "collidable", ref: el => (this._boundingEntity = el) }));
            }
            else {
                return (h("a-entity", { position: ThreeUtils.vector3ToString(position), "al-bounding-box": `
              scale: ${ThreeUtils.vector3ToString(size)};
              color: ${Constants.colorValues.red};
            `, ref: el => (this._boundingEntity = el) }));
            }
        }
        return null;
    }
    _renderNodes() {
        return Array.from(this.nodes).map((n) => {
            const [nodeId, node] = n;
            let textOffset = new THREE.Vector3(0, 2.5, 0);
            textOffset.multiplyScalar(node.scale);
            return (h("a-entity", { class: "collidable", id: nodeId, position: node.position, "al-node": `
            scale: ${node.scale};
            selected: ${this.selected === nodeId};
            graphEnabled: ${this.graphEnabled};
          ` },
                h("a-entity", { text: `
              value: ${node.title};
              side: double;
              align: center;
              baseline: bottom;
              anchor: center;
              width: ${Constants.fontSizeMedium * this._boundingSphereRadius}
            `, "al-look-to-camera": true, "al-render-overlaid": true, visible: `${this.selected === nodeId}`, position: ThreeUtils.vector3ToString(textOffset), id: `${nodeId}-label` })));
        });
    }
    _renderEdges() {
        return Array.from(this.edges).map((n) => {
            const [edgeId, edge] = n;
            const node1 = this.nodes.get(edge.node1Id);
            const node2 = this.nodes.get(edge.node2Id);
            if (node1 && node2) {
                const sv = ThreeUtils.stringToVector3(node1.position);
                const ev = ThreeUtils.stringToVector3(node2.position);
                let dir = ev.clone().sub(sv);
                let dist = dir.length();
                dir = dir.normalize().multiplyScalar(dist * 0.5);
                let centoid = sv.clone().add(dir);
                let textOffset = new THREE.Vector3(0, 2.5, 0);
                let scale = (node1.scale + node2.scale) / 2;
                let radius = this._boundingSphereRadius * Constants.edgeSize;
                textOffset.multiplyScalar(scale);
                return (h("a-entity", { class: "collidable", id: edgeId, position: ThreeUtils.vector3ToString(centoid), "al-edge": `
              length: ${dist};
              node1: ${node1.position};
              node2: ${node2.position};
              selected: ${this.selected === edgeId};
              radius: ${radius};
              nodeScale: ${scale};
            ` },
                    h("a-entity", { id: `${edgeId}-title`, text: `
                value: ${dist.toFixed(Constants.angleUnitsDecimalPlaces) +
                            (this.displayMode === DisplayMode.MESH ? "m" : "mm")};
                side: double;
                align: center;
                baseline: bottom;
                anchor: center;
                width: ${Constants.fontSizeSmall * this._boundingSphereRadius}
              `, position: ThreeUtils.vector3ToString(textOffset), visible: `${this.selected === edgeId}`, "al-look-to-camera": true, "al-render-overlaid": true })));
            }
        });
    }
    _renderAngles() {
        return Array.from(this.angles).map((n) => {
            const [angleId, angle] = n;
            const edge1 = this.edges.get(angle.edge1Id);
            const edge2 = this.edges.get(angle.edge2Id);
            if (edge1 && edge2) {
                let radius = this._boundingSphereRadius * Constants.edgeSize;
                let centralNode;
                let node1;
                let node2;
                if (edge1.node1Id === edge2.node1Id) {
                    centralNode = this.nodes.get(edge2.node1Id);
                    node1 = this.nodes.get(edge1.node2Id);
                    node2 = this.nodes.get(edge2.node2Id);
                }
                else if (edge1.node1Id === edge2.node2Id) {
                    centralNode = this.nodes.get(edge2.node2Id);
                    node1 = this.nodes.get(edge1.node2Id);
                    node2 = this.nodes.get(edge2.node1Id);
                }
                else if (edge1.node2Id === edge2.node1Id) {
                    centralNode = this.nodes.get(edge2.node1Id);
                    node1 = this.nodes.get(edge1.node1Id);
                    node2 = this.nodes.get(edge2.node2Id);
                }
                else if (edge1.node2Id === edge2.node2Id) {
                    centralNode = this.nodes.get(edge2.node2Id);
                    node1 = this.nodes.get(edge1.node1Id);
                    node2 = this.nodes.get(edge2.node1Id);
                }
                const node1Pos = ThreeUtils.stringToVector3(node1.position);
                const node2Pos = ThreeUtils.stringToVector3(node2.position);
                const centralPos = ThreeUtils.stringToVector3(centralNode.position);
                let dir1 = node1Pos
                    .clone()
                    .sub(centralPos)
                    .normalize();
                let dir2 = node2Pos
                    .clone()
                    .sub(centralPos)
                    .normalize();
                let angle = dir2.angleTo(dir1);
                const smallestLength = Math.min(centralPos.distanceTo(node1Pos), centralPos.distanceTo(node2Pos));
                let distanceFromCentralNode = Math.min(smallestLength * 0.25, radius * 25);
                distanceFromCentralNode = Math.max(distanceFromCentralNode, radius * 10);
                let edge1Pos = dir1
                    .clone()
                    .multiplyScalar(distanceFromCentralNode);
                let edge2Pos = dir2
                    .clone()
                    .multiplyScalar(distanceFromCentralNode);
                let length = edge1Pos.clone().distanceTo(edge2Pos.clone());
                let position = edge1Pos
                    .clone()
                    .add(edge2Pos.clone())
                    .divideScalar(2);
                let textOffset = new THREE.Vector3(0, 2.5, 0);
                let scale = (node1.scale + node2.scale + centralNode.scale) / 3;
                textOffset.multiplyScalar(scale);
                return (h("a-entity", { class: "collidable", id: angleId, position: centralNode.position, "al-angle": `
              selected: ${this.selected === angleId};
              edge0Pos: ${ThreeUtils.vector3ToString(edge1Pos)};
              edge1Pos: ${ThreeUtils.vector3ToString(edge2Pos)};
              position: ${ThreeUtils.vector3ToString(position)};
              length: ${length};
              radius: ${radius};
              angle: ${angle};
            ` },
                    h("a-entity", { id: `${angleId}-title`, text: `
                value: ${THREE.Math.radToDeg(angle).toFixed(Constants.angleUnitsDecimalPlaces) + " deg"};
                side: double;
                align: center;
                baseline: bottom;
                anchor: center;
                width: ${Constants.fontSizeSmall * this._boundingSphereRadius}
              `, position: ThreeUtils.vector3ToString(position.clone().add(textOffset)), visible: `${this.selected === angleId}`, "al-look-to-camera": true, "al-render-overlaid": true })));
            }
        });
    }
    _renderLights() {
        return [
            h("a-entity", { id: "light-1", light: "type: directional; color: #ffffff; intensity: 0.75", position: "1 1 1" }),
            h("a-entity", { id: "light-2", light: "type: directional; color: #002958; intensity: 0.5", position: "-1 -1 -1" }),
            h("a-entity", { id: "light-3", light: "type: ambient; color: #d0d0d0; intensity: 1" })
        ];
    }
    _renderCamera() {
        return (h("a-camera", { fov: Constants.cameraValues.fov, near: Constants.cameraValues.near, "look-controls": "enabled: false", far: Constants.cameraValues.far, id: "mainCamera", cursor: "rayOrigin: mouse", raycaster: "objects: .collidable;", "al-orbit-control": `
          maxPolarAngle: ${Constants.cameraValues.maxPolarAngle};
          minDistance: ${Constants.cameraValues.minDistance};
          screenSpacePanning: true;
          rotateSpeed: ${Constants.cameraValues.rotateSpeed};
          zoomSpeed: ${Constants.cameraValues.zoomSpeed};
          enableDamping: true;
          dampingFactor: ${Constants.cameraValues.dampingFactor};
          controlTarget: ${ThreeUtils.vector3ToString(this.camera ? this.camera.target : new THREE.Vector3(0, 0, 0))};
          controlPosition: ${ThreeUtils.vector3ToString(this.camera ? this.camera.position : new THREE.Vector3(0, 0, 0))};
          enabled: ${this.controlsEnabled};
          animating: ${this.camera && this.camera.animating ? this.camera.animating : false}
        `, ref: el => (this._camera = el) }));
    }
    _renderScene() {
        return (h("a-scene", { embedded: true, renderer: `
          colorManagement: true;
          sortObjects: true;
          webgl2: ${this._isWebGl2};
          antialias: true;
        `, "vr-mode-ui": "enabled: false", ref: el => (this._scene = el) },
            this._renderBoundingBox(),
            this._renderSrc(),
            this._renderNodes(),
            this._renderEdges(),
            this._renderAngles(),
            this._renderLights(),
            this._renderCamera()));
    }
    render() {
        return (h("div", { id: "al-container", style: {
                width: GetUtils$$1.addCssUnits(this.width),
                height: GetUtils$$1.addCssUnits(this.height)
            } },
            h("div", { id: "lut-container" },
                h("div", { id: "lut-min" }, "0.0"),
                h("div", { id: "lut-canvases" }),
                h("div", { id: "lut-max" }, "1.0")),
            this._renderScene(),
            this._renderSpinner()));
    }
    _resize() {
        if (this._scene) {
            this._scene.resize();
        }
    }
    _createEdge(node1Id, node2Id) {
        const match = Array.from(this.edges).find(([_id, edge]) => {
            return ((edge.node1Id === node1Id && edge.node2Id === node2Id) ||
                (edge.node1Id === node2Id && edge.node2Id === node1Id));
        });
        if (!match) {
            const newEdge = {
                node1Id: node1Id,
                node2Id: node2Id
            };
            const edgeId = GraphUtils.getNextId(AlGraphEntryType.EDGE, this.edges);
            this._setEdge([edgeId, newEdge]);
        }
        else {
            console.log("edge already exists");
        }
    }
    _createAngle(edge1Id, edge2Id) {
        const match = Array.from(this.angles).find(([_id, angle]) => {
            return ((angle.edge1Id === edge1Id && angle.edge2Id === edge2Id) ||
                (angle.edge1Id === edge2Id && angle.edge2Id === edge1Id));
        });
        if (!match) {
            let edge1 = this.edges.get(edge1Id);
            let edge2 = this.edges.get(edge2Id);
            if (edge1.node1Id === edge2.node1Id ||
                edge1.node1Id == edge2.node2Id ||
                edge1.node2Id == edge2.node1Id ||
                edge1.node2Id === edge2.node2Id) {
                const newAngle = {
                    edge1Id: edge1Id,
                    edge2Id: edge2Id
                };
                const angleId = GraphUtils.getNextId(AlGraphEntryType.ANGLE, this.angles);
                this._setAngle([angleId, newAngle]);
            }
            else {
                console.warn("cannot create angle: edges not connected");
            }
        }
        else {
            console.warn("cannot create angle: angle already exists");
        }
    }
    _stateChanged() {
        this.changed.emit(this.store.getState().app);
    }
    _setGraph(graph) {
        if (graph.nodes) {
            const nodes = new Map(graph.nodes);
            nodes.forEach((value, key) => {
                this.appSetNode([key, value]);
            });
        }
        if (graph.edges) {
            const edges = new Map(graph.edges);
            edges.forEach((value, key) => {
                this.appSetEdge([key, value]);
            });
        }
        if (graph.angles) {
            const angles = new Map(graph.angles);
            angles.forEach((value, key) => {
                this.appSetAngle([key, value]);
            });
        }
        this._stateChanged();
    }
    _clearGraph() {
        this.appClearNodes();
        this.appClearEdges();
        this.appClearAngles();
        this._stateChanged();
    }
    _deleteNode(nodeId) {
        this.appDeleteNode(nodeId);
        this._stateChanged();
    }
    _setNode(node) {
        this.appSetNode(node);
        this._stateChanged();
    }
    _selectNode(nodeId, animate = false) {
        if (animate && nodeId !== this.selected) {
            let animationStart = {
                position: this.camera.position.clone(),
                target: this.camera.target.clone()
            };
            let animationEnd = {
                position: new THREE.Vector3(-1, -1, -1),
                target: this.camera.target.clone()
            };
            let result = GetUtils$$1.getCameraPositionFromNode(this.nodes.get(nodeId), this._boundingSphereRadius, this.camera.target);
            if (result) {
                const diffPos = result.distanceTo(this.camera.position);
                if (diffPos > 0) {
                    animationEnd.position.copy(result.clone());
                    const slerpPath = ThreeUtils.getSlerpPath(animationStart, animationEnd, diffPos > 0, false);
                    this._scene.emit(AlOrbitControlEvents.ANIMATION_STARTED, { slerpPath }, false);
                    this.appSetCamera({
                        animating: true
                    });
                    this.appSelectNode(nodeId);
                    this._stateChanged();
                }
            }
        }
        else {
            this.appSelectNode(nodeId);
            this._stateChanged();
        }
    }
    _setEdge(edge) {
        this.appSetEdge(edge);
        this._stateChanged();
    }
    _deleteEdge(edgeId) {
        this.appDeleteEdge(edgeId);
        this._stateChanged();
    }
    _selectEdge(edgeId) {
        this.appSelectEdge(edgeId);
        this._stateChanged();
    }
    _setAngle(angle) {
        this.appSetAngle(angle);
        this._stateChanged();
    }
    _selectAngle(angleId) {
        this.appSelectAngle(angleId);
        this._stateChanged();
    }
    _deleteAngle(angleId) {
        this.appDeleteAngle(angleId);
        this._stateChanged();
    }
    _setGraphEnabled(enabled) {
        this.appSetGraphEnabled(enabled);
        this._stateChanged();
    }
    _setBoundingBoxEnabled(visible) {
        this.appSetBoundingBoxEnabled(visible);
        this._stateChanged();
    }
    _setSlicesIndex(index) {
        this.appSetSlicesIndex(index);
        this._stateChanged();
    }
    _setOrientation(orientation) {
        this.appSetOrientation(orientation);
        this._stateChanged();
    }
    _setSlicesWindowCenter(center) {
        this.appSetSlicesWindowCenter(center);
        this._stateChanged();
    }
    _setSlicesWindowWidth(width) {
        this.appSetSlicesWindowWidth(width);
        this._stateChanged();
    }
    _setVolumeSteps(steps) {
        this.appSetVolumeSteps(steps);
        this._stateChanged();
    }
    _setVolumeWindowCenter(center) {
        this.appSetVolumeWindowCenter(center);
        this._stateChanged();
    }
    _setVolumeWindowWidth(width) {
        this.appSetVolumeWindowWidth(width);
        this._stateChanged();
    }
    _setDisplayMode(displayMode) {
        this.appSetDisplayMode(displayMode);
        this._stateChanged();
    }
    _setSrc(src, displayMode) {
        this.appSetSrc([src, displayMode]);
        this._stateChanged();
    }
    _getStackHelper() {
        let stackhelper = null;
        if (this.displayMode === DisplayMode.VOLUME) {
            stackhelper = this._loadedObject;
        }
        return stackhelper;
    }
    _getMesh() {
        let mesh = null;
        if (this.displayMode == DisplayMode.MESH) {
            const model = this._targetEntity.object3DMap.mesh;
            if (model instanceof THREE.Mesh) {
                mesh = model;
            }
            else {
                model.traverse(child => {
                    if (child instanceof THREE.Mesh && mesh === null) {
                        mesh = child;
                    }
                });
            }
        }
        else if (this._loadedObject._bBox) {
            mesh = this._loadedObject._bBox._mesh;
        }
        else {
            mesh = this._loadedObject._mesh;
        }
        return mesh;
    }
    _srcLoaded(ev) {
        this._loadedObject = ev.detail;
        let mesh = this._getMesh();
        if (mesh) {
            mesh.geometry.computeBoundingSphere();
            this._boundingSphereRadius = mesh.geometry.boundingSphere.radius;
            this._boundingBox = GetUtils$$1.getBoundingBox(mesh);
            let cameraState = GetUtils$$1.getCameraStateFromMesh(mesh);
            if (cameraState) {
                this.appSetCamera(cameraState);
            }
            this.appSetSrcLoaded(true);
            this._stateChanged();
            this.loaded.emit(ev.detail);
        }
        else {
            throw new Error("Unable to find a mesh in loaded object");
        }
    }
    _keyDownHandler(event) {
        this._isShiftDown = event.shiftKey;
        if (event.keyCode === KeyDown.Delete) {
            if (this.selected) {
                if (this.nodes.has(this.selected)) {
                    this._deleteNode(this.selected);
                }
                else if (this.edges.has(this.selected)) {
                    this._deleteEdge(this.selected);
                }
                else if (this.angles.has(this.selected)) {
                    this._deleteAngle(this.selected);
                }
            }
        }
    }
    _keyUpHandler(_event) {
        this._isShiftDown = false;
    }
    _graphEntryPointerUpHandler(_event) {
        this.appSetControlsEnabled(true);
        ThreeUtils.enableOrbitControls(this._camera, true);
    }
    _graphEntryPointerDownHandler(_event) {
        this.appSetControlsEnabled(false);
        ThreeUtils.enableOrbitControls(this._camera, false);
    }
    _graphEntryPointerOutHandler(_event) {
        this._hovered = null;
    }
    _graphEntryPointerOverHandler(event) {
        this._hovered = event.detail.id;
    }
    _controlsInteractionHandler(_event) { }
    _controlsInteractionFinishedHandler(event) {
        this._debouncedAppSetCamera(event.detail.cameraState);
    }
    _spawnNodeHandler(event) {
        if (this.graphEnabled &&
            this._validTarget &&
            this._hovered === null) {
            let intersection = event.detail.aframeEvent.detail.intersection;
            const nodeId = GraphUtils.getNextId(AlGraphEntryType.NODE, this.nodes);
            let newNode;
            if (this.displayMode === DisplayMode.VOLUME && intersection) {
                let hitPosition = new THREE.Vector3();
                let hitNormal = new THREE.Vector3();
                let rayResult = AMIUtils.volumeRay(this._getStackHelper(), this._camera.object3D.children[0].position.clone(), this._camera.getAttribute("raycaster").direction, Constants.cameraValues.far, hitPosition, hitNormal);
                if (rayResult) {
                    newNode = {
                        position: ThreeUtils.vector3ToString(hitPosition),
                        scale: this._boundingSphereRadius / Constants.nodeSizeRatio,
                        title: nodeId
                    };
                }
            }
            else if (intersection) {
                newNode = {
                    targetId: "0",
                    position: ThreeUtils.vector3ToString(intersection.point),
                    scale: this._boundingSphereRadius / Constants.nodeSizeRatio,
                    title: nodeId
                };
            }
            if (newNode) {
                const previousSelected = this.selected;
                this._setNode([nodeId, newNode]);
                if (this._isShiftDown &&
                    this.nodes.has(previousSelected)) {
                    this._createEdge(previousSelected, nodeId);
                    this._selectNode(nodeId);
                }
            }
        }
    }
    _graphEntryValidTargetHandler(event) {
        this._validTarget = event.detail.valid;
    }
    _controlsAnimationFinishedHandler(_event) {
        this.appSetCamera({
            animating: false
        });
    }
    _graphEntrySelectedHandler(event) {
        if (!this.graphEnabled) {
            return;
        }
        const type = event.detail.type;
        const id = event.detail.id;
        switch (type) {
            case AlGraphEntryType.NODE: {
                if (this._hovered !== null &&
                    this.nodes.has(this._hovered) &&
                    (this.selected !== null && this.nodes.has(this.selected)) &&
                    this.selected !== this._hovered &&
                    this._isShiftDown) {
                    this._createEdge(this.selected, this._hovered);
                }
                this._selectNode(id);
                break;
            }
            case AlGraphEntryType.EDGE: {
                if (this._hovered !== null &&
                    this.edges.has(this._hovered) &&
                    (this.selected !== null && this.edges.has(this.selected)) &&
                    this.selected !== this._hovered &&
                    this._isShiftDown) {
                    this._createAngle(this.selected, this._hovered);
                }
                this._selectEdge(id);
                break;
            }
            case AlGraphEntryType.ANGLE: {
                this._selectAngle(id);
                break;
            }
        }
    }
    _graphEntryDraggedHandler(event) {
        const nodeId = event.detail.id;
        const raycaster = this._camera.components.raycaster;
        const raycasterAttribute = this._camera.getAttribute("raycaster");
        let intersection;
        let hitPosition = new THREE.Vector3();
        let validLocation = false;
        let orbitPosition = this._camera.object3D.children[0].position;
        if (this.displayMode === DisplayMode.VOLUME) {
            intersection = raycaster.getIntersection(this._boundingEntity);
            if (intersection) {
                let hitNormal = new THREE.Vector3();
                let rayResult = AMIUtils.volumeRay(this._getStackHelper(), orbitPosition.clone(), raycasterAttribute.direction, Constants.cameraValues.far, hitPosition, hitNormal);
                if (rayResult) {
                    validLocation = true;
                }
            }
        }
        else {
            intersection = raycaster.getIntersection(this._targetEntity);
            if (intersection) {
                hitPosition.copy(intersection.point);
                validLocation = true;
            }
        }
        if (!validLocation) {
            let distance = orbitPosition.distanceTo(this._targetEntity.getAttribute("position"));
            hitPosition.copy(orbitPosition);
            hitPosition.add(raycasterAttribute.direction.clone().multiplyScalar(distance * 1.5));
        }
        this._setNode([
            nodeId,
            {
                position: ThreeUtils.vector3ToString(hitPosition)
            }
        ]);
        const eventName = nodeId + Constants.movedEventName;
        this._scene.emit(eventName, {}, true);
    }
    _addEventListeners() {
        window.addEventListener("keydown", this._keyDownHandler, false);
        window.addEventListener("keyup", this._keyUpHandler, false);
        this._scene.addEventListener(AlOrbitControlEvents.ANIMATION_FINISHED, this._controlsAnimationFinishedHandler, false);
        this._scene.addEventListener(AlOrbitControlEvents.INTERACTION, this._controlsInteractionHandler, false);
        this._scene.addEventListener(AlOrbitControlEvents.INTERACTION_FINISHED, this._controlsInteractionFinishedHandler, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_UP, this._graphEntryPointerUpHandler, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_DOWN, this._graphEntryPointerDownHandler, false);
        this._scene.addEventListener(AlGraphEvents.DRAGGED, this._graphEntryDraggedHandler, false);
        this._scene.addEventListener(AlGraphEvents.SELECTED, this._graphEntrySelectedHandler, false);
        this._scene.addEventListener(AlNodeSpawnerEvents.ADD_NODE, this._spawnNodeHandler, false);
        this._scene.addEventListener(AlNodeSpawnerEvents.VALID_TARGET, this._graphEntryValidTargetHandler, false);
        this._scene.addEventListener(AlGltfModelEvents.LOADED, this._srcLoaded, false);
        this._scene.addEventListener(AlVolumeEvents.LOADED, this._srcLoaded, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_OVER, this._graphEntryPointerOverHandler, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_OUT, this._graphEntryPointerOutHandler, false);
    }
    componentDidLoad() { }
    componentDidUpdate() {
        if (this._scene) {
            this._addEventListeners();
        }
    }
    static get is() { return "uv-aleph"; }
    static get properties() { return {
        "angles": {
            "state": true
        },
        "boundingBoxEnabled": {
            "state": true
        },
        "camera": {
            "state": true
        },
        "clearGraph": {
            "method": true
        },
        "controlsEnabled": {
            "state": true
        },
        "deleteAngle": {
            "method": true
        },
        "deleteEdge": {
            "method": true
        },
        "deleteNode": {
            "method": true
        },
        "displayMode": {
            "state": true
        },
        "dracoDecoderPath": {
            "type": String,
            "attr": "draco-decoder-path"
        },
        "edges": {
            "state": true
        },
        "graphEnabled": {
            "state": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "load": {
            "method": true
        },
        "nodes": {
            "state": true
        },
        "nodesVisible": {
            "state": true
        },
        "optionsEnabled": {
            "state": true
        },
        "optionsVisible": {
            "state": true
        },
        "orientation": {
            "state": true
        },
        "resize": {
            "method": true
        },
        "selected": {
            "state": true
        },
        "selectNode": {
            "method": true
        },
        "setBoundingBoxEnabled": {
            "method": true
        },
        "setDisplayMode": {
            "method": true
        },
        "setEdge": {
            "method": true
        },
        "setGraph": {
            "method": true
        },
        "setGraphEnabled": {
            "method": true
        },
        "setNode": {
            "method": true
        },
        "setOrientation": {
            "method": true
        },
        "setSlicesIndex": {
            "method": true
        },
        "setSlicesWindowCenter": {
            "method": true
        },
        "setSlicesWindowWidth": {
            "method": true
        },
        "setVolumeSteps": {
            "method": true
        },
        "setVolumeWindowCenter": {
            "method": true
        },
        "setVolumeWindowWidth": {
            "method": true
        },
        "slicesIndex": {
            "state": true
        },
        "slicesWindowCenter": {
            "state": true
        },
        "slicesWindowWidth": {
            "state": true
        },
        "src": {
            "state": true
        },
        "srcLoaded": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "volumeSteps": {
            "state": true
        },
        "volumeWindowCenter": {
            "state": true
        },
        "volumeWindowWidth": {
            "state": true
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "changed",
            "method": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "loaded",
            "method": "loaded",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "#al-container{position:relative;font-family:sans-serif}#al-container a-scene{background-color:var(--viewport-background-color);display:block;width:100%;height:100%}#al-container #lut-container{display:none}#al-container .progress.container{position:absolute;top:auto!important;bottom:0!important}#al-container .progress.container .load.progress,#al-container .progress.container .parse.progress{border:none!important;height:4px!important;background-color:var(--load-progress-color,#fff)!important}#spinner{position:absolute;left:50%;top:50%}#spinner .square{margin:0 0 0 -15px;background-color:var(--spinner-color,#fff);width:30px;height:30px;-webkit-animation:sk-rotateplane 1.2s ease-in-out infinite;-moz-animation:sk-rotateplane 1.2s infinite ease-in-out;animation:sk-rotateplane 1.2s ease-in-out infinite}\@-webkit-keyframes sk-rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}to{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}\@keyframes sk-rotateplane{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"; }
}

export { Aleph as UvAleph };
