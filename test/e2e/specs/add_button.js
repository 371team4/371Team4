let devServer

module.exports = {

  before: function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js  //browser.globals.devServerURL
    devServer = browser.globals.devServerURL
  },

  'test title': function (browser) {
    browser
      .url(devServer)
      .waitForElementVisible('body', 10000)
      .assert.title('Retirement Party')
  },

  'check add button visible': function (browser) {
    browser
      .expect.element('#app [data-test-attr=addButton]').to.be.present.after(1000)
  },

  'click add button': function (browser) {
    browser
      .click('#app [data-test-attr=addButton]')
      .pause(500)
      .acceptAlert()
  },

  after: function (browser) {
    browser.closeWindow().end()
  }
}
