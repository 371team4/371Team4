var devServer

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
      .pause(2000)
      .expect.element('#app > div > div > main > div.container.fluid.fill-height > div > div > div.layout.row.wrap > div:nth-child(7) > div > div > button > div').to.be.present.after(1000)
  },

  'click add button': function (browser) {
    browser
      .click('#app > div > div > main > div.container.fluid.fill-height > div > div > div.layout.row.wrap > div:nth-child(7) > div > div > button > div')
      .pause(500)
  },

  after: function (browser) {
    browser.closeWindow().end()
  }
}
