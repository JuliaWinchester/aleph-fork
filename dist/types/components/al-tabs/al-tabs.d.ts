import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
declare type HTMLIonTabElement = any;
declare type TabButtonClickEventDetail = any;
/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot top - Content is placed at the top of the screen.
 * @slot bottom - Content is placed at the bottom of the screen.
 */
export declare class Tabs {
    private transitioning;
    private leavingTab?;
    el: Element;
    tabs: HTMLIonTabElement[];
    selectedTab?: HTMLIonTabElement;
    doc: Document;
    /**
     * Emitted when the navigation will load a component.
     * @internal
     */
    ionNavWillLoad: EventEmitter<void>;
    /**
     * Emitted when the navigation is about to transition to a new component.
     */
    ionTabsWillChange: EventEmitter<{
        tab: string;
    }>;
    /**
     * Emitted when the navigation has finished transitioning to a new component.
     */
    ionTabsDidChange: EventEmitter<{
        tab: string;
    }>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    componentWillUpdate(): void;
    protected onTabClicked(ev: CustomEvent<TabButtonClickEventDetail>): void;
    /**
     * Index or the Tab instance, of the tab to select.
     */
    select(tab: string | HTMLIonTabElement): Promise<boolean>;
    /**
     * Get the tab element given the tab name
     */
    getTab(tab: string | HTMLIonTabElement): Promise<HTMLIonTabElement | undefined>;
    /**
     * Get the currently selected tab
     */
    getSelected(): Promise<string | undefined>;
    private initSelect;
    private setActive;
    private tabSwitch;
    private shouldSwitch;
    render(): JSX.Element[];
}
export {};
