import { h } from '../aleph.core.js';

class AlUrlPicker {
    constructor() {
        this.urls = null;
        this.url = null;
    }
    render() {
        if (this.urls) {
            return (h("form", { onSubmit: e => e.preventDefault() },
                h("ion-select", { value: this.url, interface: "popover", placeholder: "", onIonChange: e => this.urlChanged.emit(e.detail.value) }, Array.from(this.urls).map(([url, title]) => {
                    return h("ion-select-option", { value: url }, title);
                })),
                h("ion-input", { type: "url", size: "100", placeholder: "src", required: true, value: this.url, ref: el => (this._input = el) }),
                h("ion-button", { size: "small", type: "submit", onClick: () => this.urlChanged.emit(this._input.value) },
                    h("ion-icon", { name: "refresh" }))));
        }
        return null;
    }
    static get is() { return "al-url-picker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "url": {
            "type": String,
            "attr": "url",
            "mutable": true
        },
        "urls": {
            "type": "Any",
            "attr": "urls",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "urlChanged",
            "method": "urlChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

export { AlUrlPicker };
