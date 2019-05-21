import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class AlConsole {
    private _cmd;
    command: EventEmitter;
    cmd: string;
    render(): JSX.Element;
}
