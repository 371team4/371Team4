var devServer

module.exports = {

  before: function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js  //browser.globals.devServerURL
    devServer = 'http://localhost:8080/' // This have to be call straight up
  },

  'test title': function (browser) {
    browser
      .url(devServer)
      .waitForElementVisible('body', 10000)
      .assert.title('Retirement Party')
  },

  'check add button visible': function (browser) {
    browser
      .pause(10000)
      .expect.element('#app > div > div > main > div.container.fluid.fill-height > div > div > div.layout.row.wrap > div:nth-child(7) > div > div > button > div').to.be.present.after(1000)
  },

  'click add button': function (browser) {
    browser
      .click('#app > div > div > main > div.container.fluid.fill-height > div > div > div.layout.row.wrap > div:nth-child(7) > div > div > button > div')
      // The button does not do anything right now, I don't see any change after clicking the button
      .pause(500)
  },

  after: function (browser) {
    browser.closeWindow().end()
  }
}
