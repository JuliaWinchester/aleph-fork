import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { AlEdge } from "../../interfaces";
export declare class AlEdgeEditor {
    delete: EventEmitter;
    edge: [string, AlEdge];
    render(): JSX.Element;
}
