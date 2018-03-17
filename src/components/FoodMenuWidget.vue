<template>
  <v-container>
    <div>
      <v-toolbar
        color="light-blue darken-3"
        dark
        tabs>
        <v-icon>assignment</v-icon>
        <v-toolbar-title>Food Menu Widget</v-toolbar-title>
        <v-spacer/>
        <v-btn
          fab
          small
          color="red darken-3"
          @click.native="addWeek">

          <v-icon dark>add</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>save</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>event</v-icon>
        </v-btn>

        <!-- Week Component begins here -->
        <v-tabs
          align-with-title
          color="light-blue darken-3"
          slot="extension"
          slider-color="amber lighten-3"
          v-model="active">
          <v-tab
            v-for="(i) in numWeeks"
            :key="i">

            <!-- Delete week button -->
            <v-btn
              round
              small
              flat
              icon
              @click="removeWeek(i)">
              <v-icon>close</v-icon>
            </v-btn>

            Week {{ i }}

          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tabs-items v-model="active">
        <v-tab-item
          v-for="(i, index) in weeks"
          :key="index">

          <!-- Temporary solution: Day Cards in Week Component -->
          <!-- <template>
            <v-layout>
              <v-flex
                xs3
                sm3
                md3
                lg3
                offset-sm2>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Monday</h3>
                      <div> {{ i }} </div>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </template> -->

          <v-container
            align-content-center
            align-center
            align-baseline
            align-content-space-around
            justify-center
            justify-space-around
            grid-list-md
            text-xs-center>
            <v-layout
              row
              wrap>
              <v-flex
                xs4
                v-for="j in 3"
                :key="j*89">
                <v-card>
                  <v-card-text class="px-0">sup</v-card-text>
                </v-card>
              </v-flex>

              <v-flex
                xs4
                v-for="p in 3"
                :key="p*865">
                <v-card>
                  <v-card-text class="px-0">b</v-card-text>
                </v-card>
              </v-flex>

              <v-flex
                xs4
                offset-xs0
                offset-md0
                offset-lg4
                v-for="k in 1"
                :key="k*809">
                <v-card>
                  <v-card-text class="px-0">lol</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- Done Day Cards -->

        </v-tab-item>
      </v-tabs-items>
      <!-- Done Week Component -->
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      numWeeks: 1,
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    weeks () {
      return [
        {
          Monday: {
            Lunch: ['Pizza', 'Spinach and Peas', '', '', ''],
            Dinner: ['Meat Loaf', 'Chicken Noodle Soup', '', '', '']
          },
          Tuesday: {
            Lunch: ['Thai Curry', 'Strawberry Pancakes', '', '', ''],
            Dinner: ['Fish Tacos', 'Cream of Broccoli Soup', '', '', '']
          },
          Wednesday: {
            Lunch: ['Chili Prawns', 'Fried Rice', '', '', ''],
            Dinner: ['Beef Wellington', 'Sushi', '', '', '']
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
            Dinner: ['Kimchi Pancakes', 'Enchiladas with Salsa Verde', '', '', '']
          },
          Sunday: {
            Lunch: ['Baked Salmon', 'Sirloin Steak', '', '', ''],
            Dinner: ['Gumbo', 'Kale Salad', '', '', '']
          }
        },
        {
          Monday: {
            Lunch: ['Pizza', 'Spinach and Peas', '', '', ''],
            Dinner: ['Meat Loaf', 'Chicken Noodle Soup', '', '', '']
          },
          Tuesday: {
            Lunch: ['Thai Curry', 'Strawberry Pancakes', '', '', ''],
            Dinner: ['Fish Tacos', 'Cream of Broccoli Soup', '', '', '']
          },
          Wednesday: {
            Lunch: ['Chili Prawns', 'Fried Rice', '', '', ''],
            Dinner: ['Beef Wellington', 'Sushi', '', '', '']
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
            Dinner: ['Kimchi Pancakes', 'Enchiladas with Salsa Verde', '', '', '']
          },
          Sunday: {
            Lunch: ['Baked Salmon', 'Sirloin Steak', '', '', ''],
            Dinner: ['Gumbo', 'Kale Salad', '', '', '']
          }
        },
        {
          Monday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Tuesday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Wednesday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Thursday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Friday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Saturday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Sunday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          }
        },
        {
          Monday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Tuesday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Wednesday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Thursday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Friday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Saturday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Sunday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          }
        },
        {
          Monday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Tuesday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Wednesday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Thursday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Friday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Saturday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          },
          Sunday: {
            Lunch: ['', '', '', '', ''],
            Dinner: ['', '', '', '', '']
          }
        }
      ]
    }
  },
  methods: {
    addWeek () {
      if (this.numWeeks < 5) {
        this.numWeeks = this.numWeeks + 1
      }
    },
    removeWeek (weekNumber) {
      console.log(weekNumber)
      this.weeks.splice(weekNumber, 1)
      // console.log(this.weeks[weekNumber-1].Monday)
    }
  }
}
</script>

<style scoped>

</style>
