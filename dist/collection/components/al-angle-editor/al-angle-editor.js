export class AlAngleEditor {
    render() {
        if (this.angle) {
            const [angleId] = this.angle;
            return (h("form", { onSubmit: e => e.preventDefault() },
                h("ion-button", { size: "small", onClick: () => {
                        this.delete.emit(angleId);
                        this.angle = null;
                    } },
                    h("ion-icon", { name: "remove" }))));
        }
        return null;
    }
    static get is() { return "al-angle-editor"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "angle": {
            "type": "Any",
            "attr": "angle",
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
    static get style() { return "/**style-placeholder:al-angle-editor:**/"; }
}
