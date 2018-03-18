<template>
  <v-container>
    <div>
      <!-- Food Menu Widget Toolbar -->
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

        <!-- buttons to save changes and schedule the menu -->
        <!-- NOT YET IMPLEMENTED YET. -->
        <v-btn
          icon
          @click.native="saveChanges">
          <v-icon>save</v-icon>
        </v-btn>
        <v-btn
          icon
          @click.native="scheduleMenu">
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
            v-for="(i, index) in weeks, numWeeks"
            :key="index">

            <!-- Delete week button -->
            <v-btn
              round
              small
              flat
              icon
              @click="removeWeek(index)">
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
          <!-- Need Jordan's Day Cards in here -->
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
              xs4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Monday</h3>
                    <div> {{ i.Monday }} </div>
                  </div>
                </v-card>
              </v-flex>

              <v-flex
              xs4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Tuesday</h3>
                    <div> {{ i.Tuesday }} </div>
                  </div>
                </v-card>
              </v-flex>

              <v-flex
              xs4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Wednesday</h3>
                    <div> {{ i.Wednesday }} </div>
                  </div>
                </v-card>
              </v-flex>

              <v-flex
              xs4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Thursday</h3>
                    <div> {{ i.Thursday }} </div>
                  </div>
                </v-card>
              </v-flex>

              <v-flex
              xs4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Friday</h3>
                    <div> {{ i.Friday }} </div>
                  </div>
                </v-card>
              </v-flex>

              <v-flex
              xs4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Saturday</h3>
                    <div> {{ i.Saturday }} </div>
                  </div>
                </v-card>
              </v-flex>

              <v-flex
                xs4
                offset-xs0
                offset-md0
                offset-lg4>
                <v-card>
                  <div>
                    <h3 class="headline mb-0">Sunday</h3>
                    <div> {{ i.Sunday }} </div>
                  </div>
                </v-card>
              </v-flex>

            </v-layout>
          </v-container>
          <!-- Done Day Cards -->

          <!-- Ensure the first week doesn't get deleted -->
          <v-snackbar
            v-model="dontDeleteTheFirstWeek"
          >
            Cannot delete the first week!
            <v-btn
              flat
              color="blue lighten-3"
              @click.native="dontDeleteTheFirstWeek = false">Close</v-btn>
          </v-snackbar>

          <!-- Ensure only 5 weeks get added -->
          <v-snackbar
            v-model="tooManyWeeksDialogShown"
          >
            {{ tooManyWeeksAdded }}
            <v-btn
              flat
              color="blue lighten-3"
              @click.native="tooManyWeeksDialogShown = false">Close</v-btn>
          </v-snackbar>

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
      // Information dialog when there are more than 5 weeks added
      tooManyWeeksDialogShown: false,
      tooManyWeeksAdded: 'Cannot add more than 5 weeks!',
      // Ensure first week does not get deleted
      dontDeleteTheFirstWeek: false,
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
      } else if (this.numWeeks >= 5) {
        this.tooManyWeeksDialogShown = true
      }
    },
    removeWeek (weekNumber) {
      console.log('Whats the number', weekNumber)

      // Don't delete the first week
      if (weekNumber !== 0) {
        this.weeks.splice(weekNumber + 1, 1)
        this.numWeeks = this.numWeeks - 1
      } else {
        // Set to show a message saying not to delete the first week
        this.dontDeleteTheFirstWeek = true
      }

      // console.log(this.weeks[weekNumber-1].Monday)
    },
    saveChanges () {
      // Not yet implemented
      console.log('Save button was pressed')
    },
    scheduleMenu () {
      // Not yet implemented
      console.log('Event button was pressed')
    }
  }
}
</script>

<style scoped>

</style>
