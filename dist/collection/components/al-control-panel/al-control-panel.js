import { DisplayMode } from "../../enums/DisplayMode";
import { Orientation } from "../../enums/Orientation";
export class AlControlPanel {
    constructor() {
        this.boundingBoxEnabled = false;
        this.displayMode = DisplayMode.MESH;
        this.orientation = Orientation.CORONAL;
        this.graphEnabled = false;
    }
    watchStackhelper() {
        this.slicesIndex = undefined;
        this.slicesWindowCenter = undefined;
        this.slicesWindowWidth = undefined;
        this.volumeSteps = undefined;
        this.volumeWindowCenter = undefined;
        this.volumeWindowWidth = undefined;
    }
    _boundingBoxEnabled(enabled) {
        this.boundingBoxEnabled = enabled;
        this.boundingBoxEnabledChanged.emit(enabled);
    }
    _displayMode(displayMode) {
        this.displayMode = displayMode;
        this.displayModeChanged.emit(displayMode);
    }
    _graphEnabled(enabled) {
        this.graphEnabled = enabled;
        this.graphEnabledChanged.emit(enabled);
    }
    _orientation(orientation) {
        this.orientation = orientation;
        this.orientationChanged.emit(orientation);
    }
    _slicesIndex(index) {
        this.slicesIndex = index;
        this.slicesIndexChanged.emit(index);
    }
    _slicesWindowCenter(center) {
        this.slicesWindowCenter = center;
        this.slicesWindowCenterChanged.emit(center);
    }
    _slicesWindowWidth(width) {
        this.slicesWindowWidth = width;
        this.slicesWindowWidthChanged.emit(width);
    }
    _volumeSteps(steps) {
        this.volumeSteps = steps;
        this.volumeStepsChanged.emit(steps);
    }
    _volumeWindowCenter(center) {
        this.volumeWindowCenter = center;
        this.volumeWindowCenterChanged.emit(center);
    }
    _volumeWindowWidth(width) {
        this.volumeWindowWidth = width;
        this.volumeWindowWidthChanged.emit(width);
    }
    renderDisplayModeToggle() {
        if (this.displayMode !== DisplayMode.MESH) {
            return (h("ion-item", { style: {
                    display: "var(--display-mode-display, block)"
                } },
                h("ion-icon", { name: "eye", slot: "start" }),
                h("select", { slot: "end", onChange: e => this._displayMode(e.srcElement
                        .value) },
                    h("option", { selected: this.displayMode === DisplayMode.SLICES, value: DisplayMode.SLICES }, "Slices"),
                    h("option", { selected: this.displayMode === DisplayMode.VOLUME, value: DisplayMode.VOLUME }, "Volume"))));
        }
        return null;
    }
    renderNodesToggle() {
        return (h("ion-item", { style: {
                display: "var(--graph-enabled-display, block)"
            } },
            h("ion-icon", { name: "add-circle", slot: "start" }),
            h("ion-toggle", { slot: "end", checked: this.graphEnabled, onIonChange: e => this._graphEnabled(e.detail.checked) })));
    }
    renderBoundingBoxEnabled() {
        return (h("ion-item", { style: {
                display: "var(--bounding-box-enabled-display, block)"
            } },
            h("ion-icon", { name: "cube", slot: "start" }),
            h("ion-toggle", { slot: "end", checked: this.boundingBoxEnabled, onIonChange: e => this._boundingBoxEnabled(e.detail.checked) })));
    }
    _reverseNumber(num, min, max) {
        return max + min - num;
    }
    renderOptions() {
        switch (this.displayMode) {
            case DisplayMode.SLICES: {
                if (!this.stackhelper ||
                    (this.stackhelper && !this.stackhelper.slice)) {
                    break;
                }
                const orientationIndex = Object.keys(Orientation).indexOf(this.orientation.toUpperCase());
                const zCosine = this.stackhelper.stack
                    .zCosine;
                let orientationOffset;
                if (Math.round(zCosine.x) === 1) {
                    orientationOffset = 1;
                }
                else if (Math.round(zCosine.y) === 1) {
                    orientationOffset = 2;
                }
                else {
                    orientationOffset = 0;
                }
                const displayOrientationIndex = Math.round((orientationIndex + orientationOffset) % 3);
                const stackOrientationIndex = Math.round((orientationIndex + orientationOffset + 2) % 3);
                const indexMax = this.stackhelper.stack.dimensionsIJK[Object.keys(this.stackhelper.stack.dimensionsIJK)[stackOrientationIndex]] - 1;
                let index;
                if (stackOrientationIndex !== this._lastStackOrientationIndex ||
                    this.slicesIndex === undefined) {
                    index = Math.floor(indexMax / 2);
                }
                else {
                    index = this.slicesIndex;
                }
                this._lastStackOrientationIndex = stackOrientationIndex;
                const windowWidthMin = 1;
                const windowWidthMax = this.stackhelper.stack.minMax[1] - this.stackhelper.stack.minMax[0];
                let windowWidth;
                if (this.slicesWindowWidth === undefined) {
                    windowWidth = windowWidthMax / 2;
                }
                else {
                    windowWidth = this.slicesWindowWidth;
                }
                const windowCenterMin = this.stackhelper.stack.minMax[0];
                const windowCenterMax = this.stackhelper.stack.minMax[1];
                let windowCenter;
                if (this.slicesWindowCenter === undefined) {
                    windowCenter = windowCenterMax / 2;
                }
                else {
                    windowCenter = this.slicesWindowCenter;
                }
                this
                    .stackhelper.orientation = displayOrientationIndex;
                this.stackhelper.index = index;
                this.stackhelper.slice.windowWidth = windowWidth;
                this.stackhelper.slice.windowCenter = windowCenter;
                return (h("div", null,
                    this.renderBoundingBoxEnabled(),
                    h("ion-item", { style: {
                            display: "var(--slices-index-display, block)"
                        } },
                        h("ion-icon", { name: "swap", slot: "start" }),
                        h("ion-range", { slot: "end", min: "0", max: indexMax, value: index, onIonChange: e => this._slicesIndex(e.detail.value) })),
                    h("ion-item", { style: {
                            display: "var(--slices-orientation-display, block)"
                        } },
                        h("ion-icon", { name: "compass", slot: "start" }),
                        h("select", { slot: "end", onChange: e => this._orientation(e.srcElement
                                .value) },
                            h("option", { selected: this.orientation === Orientation.CORONAL, value: Orientation.CORONAL }, "Coronal"),
                            h("option", { selected: this.orientation === Orientation.SAGGITAL, value: Orientation.SAGGITAL }, "Saggital"),
                            h("option", { selected: this.orientation === Orientation.AXIAL, value: Orientation.AXIAL }, "Axial"))),
                    h("ion-item", { style: {
                            display: "var(--slices-window-center-display, block)"
                        } },
                        h("ion-icon", { name: "sunny", slot: "start" }),
                        h("ion-range", { slot: "end", min: windowCenterMin, max: windowCenterMax, value: this._reverseNumber(windowCenter, windowCenterMin, windowCenterMax), onIonChange: e => this._slicesWindowCenter(this._reverseNumber(e.detail.value, windowCenterMin, windowCenterMax)) })),
                    h("ion-item", { style: {
                            display: "var(--slices-window-width-display, block)"
                        } },
                        h("ion-icon", { name: "contrast", slot: "start" }),
                        h("ion-range", { slot: "end", min: windowWidthMin, max: windowWidthMax, value: this._reverseNumber(windowWidth, windowWidthMin, windowWidthMax), onIonChange: e => this._slicesWindowWidth(this._reverseNumber(e.detail.value, windowWidthMin, windowWidthMax)) }))));
            }
            case DisplayMode.VOLUME: {
                if (!this.stackhelper) {
                    break;
                }
                const stepsMin = 1;
                const stepsMax = 128;
                let steps;
                if (this.volumeSteps === undefined) {
                    steps = 16;
                }
                else {
                    steps = this.volumeSteps;
                }
                const windowWidthMin = 1;
                const windowWidthMax = this.stackhelper.stack.minMax[1] - this.stackhelper.stack.minMax[0];
                let windowWidth;
                if (this.volumeWindowWidth === undefined) {
                    windowWidth = windowWidthMax / 2;
                }
                else {
                    windowWidth = this.volumeWindowWidth;
                }
                const windowCenterMin = this.stackhelper.stack.minMax[0];
                const windowCenterMax = this.stackhelper.stack.minMax[1];
                let windowCenter;
                if (this.volumeWindowCenter === undefined) {
                    windowCenter = windowCenterMax / 2;
                }
                else {
                    windowCenter = this.volumeWindowCenter;
                }
                this.stackhelper.steps = steps;
                this.stackhelper.windowWidth = windowWidth;
                this
                    .stackhelper.windowCenter = windowCenter;
                return (h("div", null,
                    this.renderBoundingBoxEnabled(),
                    h("ion-item", { style: {
                            display: "var(--volume-steps-display, block)"
                        } },
                        h("ion-icon", { name: "swap", slot: "start" }),
                        h("ion-range", { slot: "end", min: stepsMin, max: stepsMax, value: steps, onIonChange: e => this._volumeSteps(e.detail.value) })),
                    h("ion-item", { style: {
                            display: "var(--volume-window-center-display, block)"
                        } },
                        h("ion-icon", { name: "sunny", slot: "start" }),
                        h("ion-range", { slot: "end", min: windowCenterMin, max: windowCenterMax, value: this._reverseNumber(windowCenter, windowCenterMin, windowCenterMax), onIonChange: e => {
                                this._volumeWindowCenter(this._reverseNumber(e.detail.value, windowCenterMin, windowCenterMax));
                            } })),
                    h("ion-item", { style: {
                            display: "var(--volume-window-width-display, block)"
                        } },
                        h("ion-icon", { name: "contrast", slot: "start" }),
                        h("ion-range", { slot: "end", min: windowWidthMin, max: windowWidthMax, value: this._reverseNumber(windowWidth, windowWidthMin, windowWidthMax), onIonChange: e => this._volumeWindowWidth(this._reverseNumber(e.detail.value, windowWidthMin, windowWidthMax)) }))));
            }
            case DisplayMode.MESH: {
                return this.renderBoundingBoxEnabled();
            }
        }
        return null;
    }
    render() {
        return [
            this.renderDisplayModeToggle(),
            this.renderNodesToggle(),
            this.renderOptions()
        ];
    }
    static get is() { return "al-control-panel"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "boundingBoxEnabled": {
            "type": Boolean,
            "attr": "bounding-box-enabled",
            "mutable": true
        },
        "displayMode": {
            "type": String,
            "attr": "display-mode",
            "mutable": true
        },
        "graphEnabled": {
            "type": Boolean,
            "attr": "graph-enabled",
            "mutable": true
        },
        "orientation": {
            "type": String,
            "attr": "orientation",
            "mutable": true
        },
        "slicesIndex": {
            "type": Number,
            "attr": "slices-index",
            "mutable": true
        },
        "slicesWindowCenter": {
            "type": Number,
            "attr": "slices-window-center",
            "mutable": true
        },
        "slicesWindowWidth": {
            "type": Number,
            "attr": "slices-window-width",
            "mutable": true
        },
        "stackhelper": {
            "type": "Any",
            "attr": "stackhelper",
            "mutable": true,
            "watchCallbacks": ["watchStackhelper"]
        },
        "volumeSteps": {
            "type": Number,
            "attr": "volume-steps",
            "mutable": true
        },
        "volumeWindowCenter": {
            "type": Number,
            "attr": "volume-window-center",
            "mutable": true
        },
        "volumeWindowWidth": {
            "type": Number,
            "attr": "volume-window-width",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "boundingBoxEnabledChanged",
            "method": "boundingBoxEnabledChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "displayModeChanged",
            "method": "displayModeChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "orientationChanged",
            "method": "orientationChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "slicesIndexChanged",
            "method": "slicesIndexChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "slicesWindowCenterChanged",
            "method": "slicesWindowCenterChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "slicesWindowWidthChanged",
            "method": "slicesWindowWidthChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "graphEnabledChanged",
            "method": "graphEnabledChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "volumeStepsChanged",
            "method": "volumeStepsChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "volumeWindowCenterChanged",
            "method": "volumeWindowCenterChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "volumeWindowWidthChanged",
            "method": "volumeWindowWidthChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:al-control-panel:**/"; }
}
