import { BaseComponent } from "./BaseComponent";
interface AlVolumeComponent extends BaseComponent {
    createVolumePlane(): void;
    handleStack(stack: any): void;
    onInteraction(event: CustomEvent): void;
    onInteractionFinished(event: CustomEvent): void;
    renderBufferScene(): void;
    tickFunction(): void;
    createBufferTexture(): void;
}
declare const _default: import("aframe").ComponentConstructor<AlVolumeComponent>;
export default _default;
export declare class AlVolumeEvents {
    static LOADED: string;
    static ERROR: string;
    static RENDER_LOW: string;
    static RENDER_FULL: string;
}
