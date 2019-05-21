import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { AlNode } from "../../interfaces";
export declare class AlNodeEditor {
    delete: EventEmitter;
    save: EventEmitter;
    node: [string, AlNode];
    render(): JSX.Element;
}
