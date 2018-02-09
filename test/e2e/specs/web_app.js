
module.exports = {
  'Demo WebbApp test' : function (browser) {
    browser
      .url('https://repartyed.firebaseapp.com')
      .waitForElementVisible('body', 5000)

      .waitForElementVisible('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div > div > div > div.card__actions > button > div', 5000)
      .click('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div > div > div > div.card__actions > button > div')
      //.assert.containsText('#main', 'Night Watch')

	    .click('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div > div > div > div.card__actions > button > div')
      .pause(2000)

	    .click('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div > div > div > div.card__actions > button > div')
      .pause(2000)

	    .setValue('input[type=text]', 'LOLOLOLOLOLOL')
      .pause(1000)

	    .waitForElementVisible('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div.container > div > div > div > nav > div > button.btn.btn--round.theme--dark.pink > div', 5000)
	    .click('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div.container > div > div > div > nav > div > button.btn.btn--round.theme--dark.pink > div')
	    .pause(2000)

      .click('#app > div.application--wrap > div > main > div.container.fluid.fill-height > div > div > div.container > div > div > div > nav > div > button.btn.btn--round.theme--dark.pink > div')
	    .waitForElementVisible('#app > div.application--wrap > nav > div > button.toolbar__side-icon.btn.btn--icon > div', 2000)

      .click('#app > div.application--wrap > nav > div > button.toolbar__side-icon.btn.btn--icon > div')
	    .waitForElementVisible('#app > div.application--wrap > aside > ul > li:nth-child(4) > a > div.list__tile__content > div', 5000)
	    .click('#app > div.application--wrap > aside > ul > li:nth-child(4) > a > div.list__tile__content > div')
	    .pause(2000)

      .click('#app > div.application--wrap > nav > div > button:nth-child(2) > div')
	    .pause(6000)

      .end();
  }
 };
