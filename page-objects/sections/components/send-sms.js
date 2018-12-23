import Component from './base';

export default class SendSMS extends Component {
  get phoneNumberInput() {
    return this.section.$('[name="phone_constant"]');
  }

  get messageInput() {
    return this.section.$('[name="message_phrase[]"]');
  }

  enterValues(data) {
    const { phoneNumber, message } = data;

    this.phoneNumberInput.waitForVisible();
    this.phoneNumberInput.setValue(phoneNumber);
    this.messageInput.setValue(message);
  }
}
