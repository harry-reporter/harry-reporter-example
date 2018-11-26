const path = require('path');

module.exports = {
  baseUrl: 'http://localhost:5000',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',
  compositeImage: true,

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  },
  plugins: {
    'html-reporter/hermione': {
      path: 'hermione/hermione-html-report'
    }
    // 'hermione-test-plugin': true
  }
};
