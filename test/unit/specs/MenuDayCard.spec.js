import Vue from 'vue'
import MenuDayCard from '@/components/MenuDayCard'

// props object that will be passed down to the menu card component
const props = {
  readOnly: false,
  day: {
    name: 'Monday',
    meals: {
      Lunch: ['', '', '', '', ''],
      Supper: ['', '', '', '', '']
    }
  }
}

// BEGIN: locators of key components in this Vue component
const cardLocator = '[data-test-attr="menuDayCard"]'
const dayNameLocator = '[data-test-attr="dayName"]'
const mealNameLocator = '[data-test-attr="mealName"]'
const mealContainerLocator = '[data-test-attr^="mealContainer_"]'
const menuItemLocator = '[data-test-attr="menuItem"]'
// END

let vm

describe('MenuDayCard.vue', () => {
  beforeEach('Before MenuDayCard test', function () {
    const Constructor = Vue.extend(MenuDayCard)
    vm = new Constructor({
      propsData: props
    }).$mount()
  })

  it('should have the correct props data', () => {
    // check thet props object is passed correctly
    expect(vm.$props.readOnly).to.equal(props.readOnly)
    expect(vm.$props.day.name).to.equal(props.day.name)
    expect(Object.keys(vm.$props.day.meals)).to.deep.equal(Object.keys(props.day.meals))
    for (let meal in props.day.meals) {
      expect(vm.$props.day.meals[meal]).to.deep.equal(props.day.meals[meal])
    }
  })

  it('should render the correct content according to props', function () {
    const mealsInTestProps = Object.keys(props.day.meals)
    // grab the main card element and check it
    const cardElements = vm.$el.querySelectorAll(cardLocator)
    expect(cardElements).to.have.lengthOf(1)
    const cardElement = cardElements[0]

    // grab the day name element and check that it matches the props
    const dayElements = cardElement.querySelectorAll(dayNameLocator)
    expect(dayElements).to.have.lengthOf(1)
    // trim the content of the text, because html get padded with white space
    expect(dayElements[0].textContent.trim()).to.equal(props.day.name)

    // check that there are only two meal containers
    let mealContainers = cardElement.querySelectorAll(mealContainerLocator)
    expect(mealContainers).to.have.lengthOf(2)

    let index = 0
    // check that inside each container there is n number of input elements
    for (let i = 0; i < mealContainers.length; i++) {
      let mealContainer = mealContainers[i]
      // get the name of this meal
      let mealNameElement = mealContainer.querySelector(mealNameLocator)
      expect(mealNameElement.textContent.trim()).to.equal(mealsInTestProps[index])
      // check the menu items in this meal
      let menuItemElements = mealContainer.querySelectorAll(menuItemLocator)
      expect(menuItemElements).to.have.lengthOf(props.day.meals[mealsInTestProps[index]].length)
      // need to expand the NodeList to an array and trim the textContent of each element
      let menuItems = [...menuItemElements].map(ele => ele.value)
      expect(menuItems).to.deep.equal(props.day.meals[mealsInTestProps[index]])
      // check that all the input fields are not disabled and editable
      for (let j = 0; j < menuItemElements.length; j++) {
        let menuItem = menuItemElements[j]
        expect(menuItem.disabled).to.equal(false)
        expect(menuItem.readOnly).to.equal(false)
      }
      index += 1
    }
  })

  it('should allow entring values when not in readOnly', function () {
    const mealsInTestProps = Object.keys(props.day.meals)
    // grab the main card element
    const cardElement = vm.$el.querySelectorAll(cardLocator)[0]
    // grab the meal containers
    let mealContainers = cardElement.querySelectorAll(mealContainerLocator)
    expect(mealContainers).to.have.lengthOf(2)

    let index = 0
    // check that inside each container there is n number of input elements
    for (let i = 0; i < mealContainers.length; i++) {
      let mealContainer = mealContainers[i]
      // check the menu items in this meal
      let menuItemElements = mealContainer.querySelectorAll(menuItemLocator)
      expect(menuItemElements).to.have.lengthOf(props.day.meals[mealsInTestProps[index]].length)

      // populate each field with some value
      // check that all the input fields are not disabled and editable
      let compArr = []
      for (let j = 0; j < menuItemElements.length; j++) {
        let menuItem = menuItemElements[j]
        expect(menuItem.disabled).to.equal(false)
        expect(menuItem.readOnly).to.equal(false)
        // set the value of the input field
        menuItem.value = 'a'
        // add to the array to compare later
        compArr.push('a')
      }
      // get the input fields again
      menuItemElements = mealContainer.querySelectorAll(menuItemLocator)

      // need to expand the NodeList to an array and trim the textContent of each element
      let menuItems = [...menuItemElements].map(ele => ele.value.trim())
      expect(menuItems).to.deep.equal(compArr)
      // reset the array
      compArr = []
      index += 1
    }
  })

  it('should NOT allow entring values when in readOnly', function () {
    // set the state to be readOnly
    vm.$props.readOnly = true
    // give vue some time to update the component
    Vue.nextTick(() => {
      // meal names
      const mealsInTestProps = Object.keys(props.day.meals)
      // grab the main card element
      const cardElement = vm.$el.querySelectorAll(cardLocator)[0]
      // grab the meal containers
      let mealContainers = cardElement.querySelectorAll(mealContainerLocator)
      expect(mealContainers).to.have.lengthOf(2)

      let index = 0
      // check that inside each container there is n number of input elements
      for (let i = 0; i < mealContainers.length; i++) {
        let mealContainer = mealContainers[i]
        // check the menu items in this meal
        let menuItemElements = mealContainer.querySelectorAll(menuItemLocator)
        expect(menuItemElements).to.have.lengthOf(props.day.meals[mealsInTestProps[index]].length)

        // populate each field with some value
        // check that all the input fields are not disabled and editable
        for (let j = 0; j < menuItemElements.length; j++) {
          let menuItem = menuItemElements[j]
          expect(menuItem.disabled).to.equal(false)
          expect(menuItem.readOnly).to.equal(true)
          // set the value of the input field
          menuItem.value = 'a'
        }
        // get the input fields again
        menuItemElements = mealContainer.querySelectorAll(menuItemLocator)

        // need to expand the NodeList to an array and trim the textContent of each element
        let menuItems = [...menuItemElements].map(ele => ele.value.trim())
        expect(menuItems).to.deep.equal(props.day.meals[mealsInTestProps[index]])

        index += 1
      }
    })
  })
})
