import BasePage from './base';
import { getSection } from '../../lib/section-helper';
import IntroDialogBox from '../sections/intro-dialog-box';
import AppHeader from '../sections/app-header';
import NewPageModal from '../sections/new-page-modal';
import Modules from '../sections/modules';
import EditScreen from '../sections/edit-screen';

export class CreateAppPage extends BasePage {
  get introDialogBox() {
    return getSection(IntroDialogBox, '#intro-dialog-cont');
  }

  get appHeader() {
    return getSection(AppHeader, '#tabs-nav');
  }

  get newPageModal() {
    return getSection(NewPageModal, '[aria-labelledby="ui-dialog-title-create-dialog"]');
  }

  get modules() {
    return getSection(Modules, '#module-list');
  }

  get editScreen() {
    return getSection(EditScreen, '#tabs-1');
  }

  createNewPage(pageName = 'Test') {
    this.appHeader.newPageButton.click();
    this.newPageModal.createPage(pageName);
  }

  selectModule(moduleName) {
    this.modules.selectModule(moduleName);
  }
}

export default new CreateAppPage();
