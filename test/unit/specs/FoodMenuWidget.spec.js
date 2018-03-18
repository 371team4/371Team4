import Vue from 'vue'
import FoodMenuWidget from '@/components/FoodMenuWidget'

describe('FoodMenuWidget.vue', function () {
  let vm, Constructor // <-- objects to be redefined

  before(function () {
    Constructor = Vue.extend(FoodMenuWidget)
  })

  describe('Testing Food Menu Widget content', function () {
    let mockComputedProps
    /* define computed properties to be passed down */
    before(function () {
      mockComputedProps = [
        {
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
      ]
    })

    // Reset the test case
    beforeEach('Reset the contents of computed properties each new tests', function () {
      // pass data into propsData
      vm = new Constructor({ computed: mockComputedProps }).$mount()
    })
  })
})
