import BaseSection from '../base';

export default class Component extends BaseSection {
  get southNode() {
    return $(`${this.section.selector} div.mod-south`);
  }

  get northNode() {
    return $(`${this.section.selector} div.mod-north`);
  }

  get eastNode() {
    return $(`${this.section.selector} .syn-node-attached-e`);
  }

  get westNode() {
    return $(`${this.section.selector} .syn-node-attached-w`);
  }
}
