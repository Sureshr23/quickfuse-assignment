import BaseSection from '../base';

export default class Module extends BaseSection {
  get components() {
    return this.section.$$('li');
  }

  dragAndDropComponent(componentName, offset) {
    browser.dragAndDropComponent(this.components, componentName, offset);
  }
}
