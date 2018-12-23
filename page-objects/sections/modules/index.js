import { getSection } from '../../../lib/section-helper';
import BaseSection from '../base';
import Module from './base';

export default class Modules extends BaseSection {
  get basic() {
    return getSection(Module, 'h3[aria-expanded="true"] + div');
  }

  get messaging() {
    return getSection(Module, 'h3[aria-expanded="true"] + div');
  }

  get modules() {
    return this.section.$$('h3 a');
  }

  selectModule(moduleName) {
    browser.findAndClick(this.modules, moduleName);
  }
}
