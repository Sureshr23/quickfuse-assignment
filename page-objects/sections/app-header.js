import BaseSection from './base';

export default class AppHeader extends BaseSection {
  get newPageButton() {
    return this.section.$('#add-page');
  }
}
