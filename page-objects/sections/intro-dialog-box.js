import BaseSection from './base';

export default class EditScreen extends BaseSection {
  get letsGetStartedButton() {
    return this.section.$('button.done.ui-button');
  }

  letsGetStarted() {
    this.letsGetStartedButton.waitForEnabled();
    this.letsGetStartedButton.click();
  }
}
