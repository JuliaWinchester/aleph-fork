import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { AlNode } from "../../interfaces";
export declare class AlNodeList {
    selectedChanged: EventEmitter;
    nodes: Map<string, AlNode> | null;
    selected: string | null;
    render(): JSX.Element;
}
