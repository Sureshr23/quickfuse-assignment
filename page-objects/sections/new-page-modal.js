import BaseSection from './base';

export default class NewPageModal extends BaseSection {
  get pageNameInput() {
    return this.section.$('#create-dialog input');
  }

  get createButton() {
    return $('.ui-dialog-buttonpane .ui-button:not(.ui-priority-secondary)');
  }

  createPage(pageName) {
    this.pageNameInput.waitForVisible();
    this.pageNameInput.setValue(pageName);
    this.createButton.click();
  }
}
