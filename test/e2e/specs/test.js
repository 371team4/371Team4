// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

let devServer

module.exports = {
  before: function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    devServer = browser.globals.devServerURL
  },

  'test title': function (browser) {
    browser
      .url(devServer)
      .waitForElementVisible('body', 10000)
      .assert.title('Retirement Party')
  },

  'test header': function (browser) {
    browser
      .expect.element('#app > div > nav > div > div').text.to.match(/^Slides$/)
  },

  'test menu': function (browser) {
    browser
      .click('#app > div.application--wrap > nav > div > button.toolbar__side-icon.btn.btn--icon > div')
      .waitForElementVisible('#app > div.application--wrap > aside > ul', 5000)
      .expect.element('#app > div.application--wrap > aside > ul > li:nth-child(4)').to.be.present.after(100)
  },

  'test showview': function (browser) {
    browser
      .expect.element('#app > div > aside > ul > li:nth-child(1) > a > div.list__tile__content > div')
      .text.to.contain('Show View')

    browser
      .click('#app > div > aside > ul > li:nth-child(1) > a > div.list__tile__content > div')
      .waitForElementVisible('h1', 5000)
      .expect.element('h1').text.to.equal('Show View')
  },

  'test card count': function (browser) {
    browser
      .click('#app > div > aside > ul > li:nth-child(2) > a > div.list__tile__content > div')
      .waitForElementVisible('body', 5000)
      .expect.element('#app > div.application--wrap > main > div > div.container.fluid.fill-height > div > div > div.layout.row.wrap > div:nth-child(2)').to.not.be.present.after(100)
  },

  'test text field': function (browser) {
    browser
      .setValue('input[type="text"]', ['hello world', browser.Keys.ENTER])
      .expect.element('input[type="text"]').to.have.value.that.equals('hello world')
  },

  after: function (browser) {
    browser.closeWindow().end()
  }
}
