module.exports = {
  'Demo WebbApp test': function (browser) {
    browser
      .url('https://repartyed.firebaseapp.com')
      .waitForElementVisible('body', 5000)

      .waitForElementVisible('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div > div > div > div.card__actions > button > div', 5000)
      .click('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div > div > div > div.card__actions > button > div')

      .end()
  }
}
