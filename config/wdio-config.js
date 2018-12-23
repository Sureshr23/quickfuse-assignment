import ConfigHelper from '../lib/config-helper';
import customCommands from '../lib/custom-commands';

const debug = process.env.DEBUG;
const timeout = debug ? 999999999 : 400000;

global.ENVIRONMENT = process.env.ENVIRONMENT || 'prod';
const { baseURL } = ConfigHelper.load('urls');

global.BASE_URL = process.env.BASE_URL || baseURL;

export const config = {
  specs: ['./specs/**/*.js'],
  suites: {
    dragAndDrop: ['./specs/drag-and-drop.js']
  },
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  deprecationWarnings: false,
  bail: 0,
  debug,
  execArgv: debug && ['--inspect'],
  screenshotPath: './screenshots',
  screenshotOnReject: true,
  baseUrl: BASE_URL,
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  port: '9515',
  path: '/',
  services: ['chromedriver'],
  chromeDriverLogs: './test-results',
  framework: 'mocha',
  reporters: ['spec', 'timeline'],
  reporterOptions: {
    timelineReporter: {
      outputDir: './test-results',
      fileName: 'report.html',
      embedImages: true
    }
  },
  mochaOpts: {
    ui: 'bdd',
    timeout,
    compilers: ['js:babel-register']
  },
  before() {
    customCommands();
    browser.windowHandleFullscreen();
    global.quickfuse = require('../page-objects/pages'); 
  }
};
