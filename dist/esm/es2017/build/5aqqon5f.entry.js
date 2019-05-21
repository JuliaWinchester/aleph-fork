import { h } from '../aleph.core.js';

class AlNodeEditor {
    render() {
        if (this.node) {
            const [nodeId, node] = this.node;
            return (h("form", { onSubmit: e => e.preventDefault() },
                h("ion-item", null,
                    h("ion-input", { value: node.title, placeholder: "title", required: true, onIonChange: e => (node.title = e.detail.value) })),
                h("ion-item", null,
                    h("ion-textarea", { value: node.description, placeholder: "description", rows: "10", onIonChange: e => (node.description = e.detail.value) })),
                h("ion-button", { size: "small", onClick: () => {
                        this.delete.emit(nodeId);
                        this.node = null;
                    } },
                    h("ion-icon", { name: "remove" })),
                h("ion-button", { size: "small", type: "submit", onClick: () => {
                        if (node.title) {
                            this.save.emit([nodeId, node]);
                        }
                    } },
                    h("ion-icon", { name: "checkmark" }))));
        }
        return null;
    }
    static get is() { return "al-node-editor"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "node": {
            "type": "Any",
            "attr": "node",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "delete",
            "method": "delete",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "save",
            "method": "save",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

export { AlNodeEditor };
