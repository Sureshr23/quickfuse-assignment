import {
  HANG_UP_OR_EXIT,
  SEND_AN_EMAIL,
  SEND_AN_SMS,
  BASIC, 
  MESSAGING
} from '../constants/components';
import ConfigHelper from '../lib/config-helper';

const pageName = 'Test';
const smsData = ConfigHelper.load('sms');
const emailData = ConfigHelper.load('email');
const {
  sms: SMS_OFFSET,
  email: EMAIL_OFFSET,
  exit: { one: EXIT_1_OFFSET, two: EXIT_2_OFFSET, three: EXIT_3_OFFSET }
} = ConfigHelper.load('offsets');

describe('Feature: Send SMS and Email', () => {
  before(() => {
    quickfuse.homePage.open();
  });

  it('Send SMS and Email flow', () => {
    quickfuse.homePage.goToCreateAppPage();
    quickfuse.createAppPage.introDialogBox.letsGetStarted();
    quickfuse.createAppPage.createNewPage(pageName);
    quickfuse.createAppPage.selectModule(MESSAGING);
    quickfuse.createAppPage.modules.messaging.dragAndDropComponent(
      SEND_AN_SMS,
      SMS_OFFSET
    );
    quickfuse.createAppPage.editScreen.sendSms.enterValues(smsData);
    quickfuse.createAppPage.modules.messaging.dragAndDropComponent(
      SEND_AN_EMAIL,
      EMAIL_OFFSET
    );
    quickfuse.createAppPage.editScreen.sendEmail.enterValues(emailData);
    quickfuse.createAppPage.selectModule(BASIC);
    quickfuse.createAppPage.modules.basic.dragAndDropComponent(
      HANG_UP_OR_EXIT,
      EXIT_1_OFFSET
    );
    quickfuse.createAppPage.modules.basic.dragAndDropComponent(
      HANG_UP_OR_EXIT,
      EXIT_2_OFFSET
    );
    quickfuse.createAppPage.modules.basic.dragAndDropComponent(
      HANG_UP_OR_EXIT,
      EXIT_3_OFFSET
    );
    const startSouthNode = quickfuse.createAppPage.editScreen.start.southNode;
    const sendSmsNorthNode = quickfuse.createAppPage.editScreen.sendSms.northNode;

    quickfuse.createAppPage.editScreen.connectNodes(startSouthNode, sendSmsNorthNode);
    
    const sendSmsEastNode = quickfuse.createAppPage.editScreen.sendSms.eastNode;
    const sendEmailNorthNode = quickfuse.createAppPage.editScreen.sendEmail.northNode;

    quickfuse.createAppPage.editScreen.connectNodes(
      sendSmsEastNode,
      sendEmailNorthNode
    );
    const sendSmsWestNode = quickfuse.createAppPage.editScreen.sendSms.westNode;
    const firstExitNorthNode = quickfuse.createAppPage.editScreen.exits(1).northNode;

    quickfuse.createAppPage.editScreen.connectNodes(
      sendSmsWestNode,
      firstExitNorthNode
    );
    const sendEmailWestNode = quickfuse.createAppPage.editScreen.sendEmail.westNode;
    const secondExitNorthNode = quickfuse.createAppPage.editScreen.exits(2).northNode;

    quickfuse.createAppPage.editScreen.connectNodes(
      sendEmailWestNode,
      secondExitNorthNode
    );
    const sendEmailEastNode = quickfuse.createAppPage.editScreen.sendEmail.eastNode;
    const thirdExitNorthNode = quickfuse.createAppPage.editScreen.exits(3).northNode;

    quickfuse.createAppPage.editScreen.connectNodes(
      sendEmailEastNode,
      thirdExitNorthNode
    );
    browser.pause(5000); //Pausing browser to view results
  });
});
