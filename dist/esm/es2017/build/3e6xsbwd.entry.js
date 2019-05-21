import { h } from '../aleph.core.js';

class AlEdgeEditor {
    render() {
        if (this.edge) {
            const [edgeId] = this.edge;
            return (h("form", { onSubmit: e => e.preventDefault() },
                h("ion-button", { size: "small", onClick: () => {
                        this.delete.emit(edgeId);
                        this.edge = null;
                    } },
                    h("ion-icon", { name: "remove" }))));
        }
        return null;
    }
    static get is() { return "al-edge-editor"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "edge": {
            "type": "Any",
            "attr": "edge",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "delete",
            "method": "delete",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

export { AlEdgeEditor };
