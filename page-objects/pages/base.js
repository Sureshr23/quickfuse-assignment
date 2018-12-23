export default class BasePage {
  constructor() {
    this.path = '/';
  }

  open() {
    const route = `${this.path}`;

    browser.url(route);
  }
}
