import BasePage from './base';

export class HomePage extends BasePage {
  get createAnAppButton() {
    return $('#link-create');
  }

  goToCreateAppPage() {
    this.createAnAppButton.waitForVisible();
    this.createAnAppButton.click();
  }
}

export default new HomePage();
