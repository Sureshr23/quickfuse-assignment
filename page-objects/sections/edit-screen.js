import { getSection } from '../../lib/section-helper';
import Start from '../sections/components/start';
import BaseSection from './base';
import Exit from './components/base';
import SendEmail from './components/send-email';
import SendSMS from './components/send-sms';

export default class EditScreen extends BaseSection {
  get start() {
    const selector = '.start-module';

    browser.waitForVisible(selector);

    return getSection(Start, selector);
  }

  get sendSms() {
    const selector = '#module-2';

    browser.waitForVisible(selector);

    return getSection(SendSMS, selector);
  }

  get sendEmail() {
    const selector = '#module-3';

    browser.waitForVisible(selector);

    return getSection(SendEmail, selector);
  }

  exits(n) {
    const selector = '.syn-module-red';

    browser.waitForVisible(selector);
    const id = $$(selector)[n - 1].getAttribute('id');

    return getSection(Exit, `#${id}`);
  }

  connectNodes(source, destination) {
    source.waitForVisible();
    destination.waitForVisible();
    browser.connectNodes(source, destination);
  }
}
