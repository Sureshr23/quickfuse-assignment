import Component from './base';

export default class SendEmail extends Component {
  get smtpHostInput() {
    return this.section.$('input[name="smtp_url"]');
  }

  get portInput() {
    return this.section.$('input[name="port"]');
  }

  get usernameInput() {
    return this.section.$('input[name="username"]');
  }

  get passwordInput() {
    return this.section.$('input[name="password"]');
  }

  get fromInput() {
    return this.section.$('[name="from_constant"]');
  }

  get toInput() {
    return this.section.$('[name="to_constant"]');
  }

  get subjectInput() {
    return this.section.$('[name="subject_constant"]');
  }

  get messageInput() {
    return this.section.$('[name="message_phrase[]"]');
  }

  enterValues(data) {
    const {
      smtpHost,
      port,
      username,
      password,
      from,
      to,
      subject,
      message
    } = data;

    this.smtpHostInput.waitForVisible();
    this.smtpHostInput.setValue(smtpHost);
    this.portInput.setValue(port);
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.fromInput.setValue(from);
    this.toInput.setValue(to);
    this.subjectInput.setValue(subject);
    this.messageInput.setValue(message);
  }
}
