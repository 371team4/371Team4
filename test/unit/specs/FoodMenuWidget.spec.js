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
      expect(vm.$data.numWeeks).to.equal(1)
    })

    it('Property to control behavior of week tabs should be null', function () {
      expect(vm.$data.active).to.equal(null)
    })
  })

  describe('Computed properties should match default', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('Week array should remain unaltered', function (done) {
      let weekOne = {
        Monday: {
          Lunch: ['Pizza', 'Spinach Casserole', '', '', ''],
          Dinner: ['Meat Loaf', 'Chicken Noodle Soup', '', '', '']
        },
        Tuesday: {
          Lunch: ['Thai Curry', 'Strawberry Pancakes', '', '', ''],
          Dinner: ['Fish Tacos', 'Cream of Broccoli Soup', '', '', '']
        },
        Wednesday: {
          Lunch: ['Chili Prawns', 'Fried Rice', '', '', ''],
          Dinner: ['Beef Wellington', 'Calzones', '', '', '']
        },
        Thursday: {
          Lunch: ['Poutine', 'Chicken Burgers', '', '', ''],
          Dinner: ['Quinoa Salad', 'Quesadillas with Chipotle Sauce', '', '', '']
        },
        Friday: {
          Lunch: ['Banana Crepes', 'Beef Stroganoff', '', '', ''],
          Dinner: ['Peach Cobbler', 'Spaghetti and Meatballs', '', '', '']
        },
        Saturday: {
          Lunch: ['New York Cheesecake', 'Spicy Pork Ramen', '', '', ''],
          Dinner: ['Pho', 'Enchiladas with Salsa Verde', '', '', '']
        },
        Sunday: {
          Lunch: ['Baked Salmon', 'Sirloin Steak', '', '', ''],
          Dinner: ['Baked Alaska', 'Kale Salad', '', '', '']
        }
      }
      expect(vm.weeks[0]).to.contain(weekOne)
      Vue.nextTick(() => {
        done()
      })
    })
  })
})
