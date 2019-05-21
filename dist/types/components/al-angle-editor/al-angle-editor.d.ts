import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { AlAngle } from "../../interfaces";
export declare class AlAngleEditor {
    delete: EventEmitter;
    angle: [string, AlAngle];
    render(): JSX.Element;
}
