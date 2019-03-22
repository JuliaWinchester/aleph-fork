/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import {
  DisplayMode,
} from './enums/DisplayMode';
import {
  Orientation,
} from './enums/Orientation';
import {
  Tool,
} from './interfaces/interfaces';
import {
  ToolType,
} from './enums/ToolType';


export namespace Components {

  interface AlControlPanel {
    'addTool': (tool: Tool) => void;
    'angleToolEnabled': boolean;
    'annotationToolEnabled': boolean;
    'boundingBoxVisible': boolean;
    'displayMode': DisplayMode;
    'optionsEnabled': boolean;
    'optionsVisible': boolean;
    'orientation': Orientation;
    'removeTool': (id: number) => void;
    'rulerToolEnabled': boolean;
    'saveTools': () => void;
    'selectTool': (id: number) => void;
    'selectedTool': number;
    'setBoundingBoxVisible': (visible: boolean) => void;
    'setDisplayMode': (mode: DisplayMode) => void;
    'setOptionsEnabled': (enabled: boolean) => void;
    'setOrientation': (orientation: Orientation) => void;
    'setSlicesIndex': (index: number) => void;
    'setSlicesWindowCenter': (index: number) => void;
    'setSlicesWindowWidth': (index: number) => void;
    'setToolType': (toolType: ToolType) => void;
    'setToolsEnabled': (enabled: boolean) => void;
    'setVolumeSteps': (steps: number) => void;
    'setVolumeWindowCenter': (index: number) => void;
    'setVolumeWindowWidth': (index: number) => void;
    'slicesIndex': number;
    'slicesWindowCenter': number;
    'slicesWindowWidth': number;
    'stack': any;
    'stackHelper': AMI.StackHelper;
    'toolType': ToolType;
    'tools': Tool[];
    'toolsEnabled': boolean;
    'toolsVisible': boolean;
    'volumeSteps': number;
    'volumeWindowCenter': number;
    'volumeWindowWidth': number;
  }
  interface AlControlPanelAttributes extends StencilHTMLAttributes {
    'addTool'?: (tool: Tool) => void;
    'angleToolEnabled'?: boolean;
    'annotationToolEnabled'?: boolean;
    'boundingBoxVisible'?: boolean;
    'displayMode'?: DisplayMode;
    'optionsEnabled'?: boolean;
    'optionsVisible'?: boolean;
    'orientation'?: Orientation;
    'removeTool'?: (id: number) => void;
    'rulerToolEnabled'?: boolean;
    'saveTools'?: () => void;
    'selectTool'?: (id: number) => void;
    'selectedTool'?: number;
    'setBoundingBoxVisible'?: (visible: boolean) => void;
    'setDisplayMode'?: (mode: DisplayMode) => void;
    'setOptionsEnabled'?: (enabled: boolean) => void;
    'setOrientation'?: (orientation: Orientation) => void;
    'setSlicesIndex'?: (index: number) => void;
    'setSlicesWindowCenter'?: (index: number) => void;
    'setSlicesWindowWidth'?: (index: number) => void;
    'setToolType'?: (toolType: ToolType) => void;
    'setToolsEnabled'?: (enabled: boolean) => void;
    'setVolumeSteps'?: (steps: number) => void;
    'setVolumeWindowCenter'?: (index: number) => void;
    'setVolumeWindowWidth'?: (index: number) => void;
    'slicesIndex'?: number;
    'slicesWindowCenter'?: number;
    'slicesWindowWidth'?: number;
    'stack'?: any;
    'stackHelper'?: AMI.StackHelper;
    'toolType'?: ToolType;
    'tools'?: Tool[];
    'toolsEnabled'?: boolean;
    'toolsVisible'?: boolean;
    'volumeSteps'?: number;
    'volumeWindowCenter'?: number;
    'volumeWindowWidth'?: number;
  }

  interface UvAleph {
    'dracoDecoderPath': string | null;
    'height': number;
    'load': (src: string) => Promise<void>;
    'loadtools': (tools: any) => Promise<void>;
    'setDisplayMode': (displayMode: DisplayMode) => Promise<void>;
    'width': number;
  }
  interface UvAlephAttributes extends StencilHTMLAttributes {
    'dracoDecoderPath'?: string | null;
    'height'?: number;
    'onOnSave'?: (event: CustomEvent) => void;
    'width'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AlControlPanel': Components.AlControlPanel;
    'UvAleph': Components.UvAleph;
  }

  interface StencilIntrinsicElements {
    'al-control-panel': Components.AlControlPanelAttributes;
    'uv-aleph': Components.UvAlephAttributes;
  }


  interface HTMLAlControlPanelElement extends Components.AlControlPanel, HTMLStencilElement {}
  var HTMLAlControlPanelElement: {
    prototype: HTMLAlControlPanelElement;
    new (): HTMLAlControlPanelElement;
  };

  interface HTMLUvAlephElement extends Components.UvAleph, HTMLStencilElement {}
  var HTMLUvAlephElement: {
    prototype: HTMLUvAlephElement;
    new (): HTMLUvAlephElement;
  };

  interface HTMLElementTagNameMap {
    'al-control-panel': HTMLAlControlPanelElement
    'uv-aleph': HTMLUvAlephElement
  }

  interface ElementTagNameMap {
    'al-control-panel': HTMLAlControlPanelElement;
    'uv-aleph': HTMLUvAlephElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
