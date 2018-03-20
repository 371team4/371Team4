import Vue from 'vue'
import FoodMenuWidget from '@/components/FoodMenuWidget'

// This testing will change. Was not able to test the Vue components themselves, so
// I am testing the data and computed components within this unit test instead.

describe('FoodMenuWidget.vue', function () {
  let vm, Constructor // <-- objects to be redefined

  before(function () {
    Constructor = Vue.extend(FoodMenuWidget)
  })

  describe('Test default Food Menu Widget contents', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('Dialog showing that "too many weeks have been added" should be false by default', function () {
      expect(vm.$data.tooManyWeeksDialogShown).to.equal(false)
      expect(vm.$data.tooManyWeeksAdded).to.equal('Cannot add more than 5 weeks!')
    })

    it('Ensure property to control not deleting the first week is set to false by default', function () {
      expect(vm.$data.dontDeleteTheFirstWeek).to.equal(false)
    })

    it('Number of weeks to be added counter should be 1 by default', function () {
      expect(vm.$data.weeks).to.have.lengthOf(1)
    })
  })

  describe('Computed properties should match default', function (done) {
    before(function () {
      vm = new Constructor().$mount()
      Vue.nextTick(() => {
        done()
      })
    })

    it('Week array should remain unaltered', function () {
      const weeks = [
        [
          {
            name: 'Monday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          },
          {
            name: 'Tuesday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          },
          {
            name: 'Wednesday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          },
          {
            name: 'Thursday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          },
          {
            name: 'Friday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          },
          {
            name: 'Saturday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          },
          {
            name: 'Sunday',
            meals: { Lunch: ['Pizza', 'Spinach Casserole'], Supper: ['Meat Loaf', 'Chicken Noodle Soup'] }
          }
        ]
      ]
      expect(vm.$data.weeks).to.deep.equal(weeks)
    })
  })

  describe('Functions should be called and return the correct values', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('saveChanges() - returns 0 for now', function () {
      const result = vm.saveChanges()
      expect(result).to.equal(0)
    })

    it('scheduleMenu() - returns 0 for now', function () {
      const result = vm.scheduleMenu()
      expect(result).to.equal(0)
    })
    // TO DO when integrated - ADDING THE NUMBER OF WEEKS TO THE FOOD MENU WIDGET
    it('addWeek() - should be keeping track of the number of weeks added')
    // TO DO when integrated - REMOVING THE WEEKS OF THE FOOD MENU WIDGET
    it('removeWeek() - should remove the week from the Weeks component when button is pressed')
  })
})
