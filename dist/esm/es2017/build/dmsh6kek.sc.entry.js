import { h } from '../aleph.core.js';

class AlNodeList {
    constructor() {
        this.nodes = null;
        this.selected = null;
    }
    render() {
        if (this.nodes && this.nodes.size) {
            return (h("ion-list", null, Array.from(this.nodes).map(([nodeId, node]) => {
                return (h("ion-item", { class: this.selected === nodeId ? "selected" : null, onClick: () => this.selectedChanged.emit(nodeId) }, node.title));
            })));
        }
        return h("p", null, "No nodes exist");
    }
    static get is() { return "al-node-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "nodes": {
            "type": "Any",
            "attr": "nodes",
            "mutable": true
        },
        "selected": {
            "type": String,
            "attr": "selected",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "selectedChanged",
            "method": "selectedChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-item.selected.sc-al-node-list{--color:#6495ed}"; }
}

export { AlNodeList };
