
// aleph: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './aleph.core.js';
import { COMPONENTS } from './aleph.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
