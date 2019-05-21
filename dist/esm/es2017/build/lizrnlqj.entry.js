import { h } from '../aleph.core.js';

class AlConsole {
    render() {
        return (h("form", { onSubmit: e => e.preventDefault() },
            h("ion-item", null,
                h("ion-textarea", { value: this.cmd, rows: "10", required: true, onIonChange: e => (this.cmd = e.detail.value), ref: el => (this._cmd = el) })),
            h("ion-button", { size: "small", type: "submit", onClick: () => {
                    if (this.cmd) {
                        this.command.emit(this._cmd.value);
                    }
                } },
                h("ion-icon", { name: "arrow-dropright" }))));
    }
    static get is() { return "al-console"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cmd": {
            "type": String,
            "attr": "cmd",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "command",
            "method": "command",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

export { AlConsole };
