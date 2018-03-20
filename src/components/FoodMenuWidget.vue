<template>
  <v-container fluid>
    <!-- Food Menu Widget Toolbar -->
    <v-toolbar
      dark
      tabs
      color="light-blue darken-1">
      <v-icon>restaurant</v-icon>
      <v-toolbar-title>Food Menu</v-toolbar-title>
      <v-spacer/>
      <v-btn
        icon
        small
        color="red darken-3"
        @click.native="addWeek">

        <v-icon dark>add</v-icon>
      </v-btn>

      <!-- buttons to save changes and schedule the menu -->
      <!-- NOT YET IMPLEMENTED YET. -->
      <v-btn
        small
        icon
        @click.native="saveChanges">
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn
        small
        icon
        @click.native="scheduleMenu">
        <v-icon>event</v-icon>
      </v-btn>

      <!-- Week Component begins here -->
      <v-tabs
        v-model="active"
        color="light-blue darken-1"
        slot="extension"
        slider-color="amber lighten-3">
        <v-tab
          v-for="(week, index) in weeks"
          :key="index">

          <!-- Delete week button -->
          <v-btn
            small
            flat
            icon
            class="ml-0"
            @click="removeWeek(index)">
            <v-icon>close</v-icon>
          </v-btn>
          Week {{ index + 1 }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="active">
      <v-tab-item
        v-for="(week, index) in weeks"
        :key="index">

        <!-- Temporary solution: Day Cards in Week Component -->
        <!-- Need Day Cards component in here. Not testing this portion
          extensively because will be replaced soon with Day Cards; integrated after-->
        <v-container
          justify-center
          justify-space-around
          grid-list-md
          text-xs-center>
          <v-layout
            row
            wrap>
            <v-flex
              xs4
              v-for="(day, i) in week"
              :key="i">
              <v-card height="250px">
                <div>
                  <h3 class="headline mb-0">{{ day.name }}</h3>
                  <div
                    v-for="(mealContent, mealName) in day.meals"
                    :key="mealName">
                    <h2>{{ mealName }}</h2>
                    <p
                      v-for="menuItem in mealContent"
                      :key="menuItem">
                      {{ menuItem }}
                    </p>
                  </div>
                </div>
              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
        <!-- Done Day Cards -->
      </v-tab-item>
    </v-tabs-items>
    <!-- Ensure the first week doesn't get deleted -->
    <v-snackbar
      multi-line
      right
      vertical
      v-model="dontDeleteTheFirstWeek">
      Cannot delete the first week!
      <v-btn
        flat
        color="blue lighten-3"
        @click.native="dontDeleteTheFirstWeek = false">Close</v-btn>
    </v-snackbar>

    <!-- Ensure only 5 weeks get added -->
    <v-snackbar
      multi-line
      right
      vertical
      v-model="tooManyWeeksDialogShown">
      {{ tooManyWeeksAdded }}
      <v-btn
        flat
        color="blue lighten-3"
        @click.native="tooManyWeeksDialogShown = false">Close</v-btn>
    </v-snackbar>
    <!-- Done Week Component -->
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
      active: null
    }
  },
  computed: {
    weeks () {
      return [
        [
          {
            name: 'Monday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          },
          {
            name: 'Tuesday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          },
          {
            name: 'Wednesday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          },
          {
            name: 'Thursday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          },
          {
            name: 'Friday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          },
          {
            name: 'Saturday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          },
          {
            name: 'Sunday',
            meals: {
              Lunch: ['Pizza', 'Spinach Casserole'],
              Supper: ['Meat Loaf', 'Chicken Noodle Soup']
            }
          }
        ]
      ]
    }
  },
  methods: {
    addWeek () {
      // Ensure only 5 weeks are added
      if (this.weeks.length === 5) {
        // Show that too many weeks are currently displayed
        this.tooManyWeeksDialogShown = true
      } else {
        // add an empty week to the list of weeks
        const weekTemplate = [
          { name: 'Monday', meals: { Lunch: [], Supper: [] } },
          { name: 'Tuesday', meals: { Lunch: [], Supper: [] } },
          { name: 'Wednesday', meals: { Lunch: [], Supper: [] } },
          { name: 'Thursday', meals: { Lunch: [], Supper: [] } },
          { name: 'Friday', meals: { Lunch: [], Supper: [] } },
          { name: 'Saturday', meals: { Lunch: [], Supper: [] } },
          { name: 'Sunday', meals: { Lunch: [], Supper: [] } }
        ]
        this.weeks.push(weekTemplate)
        // switch the tab view to the last week added to the list of weeks
        // vuetify tabs don't understand anything but strings
        this.active = (parseInt(this.weeks.length) - 1).toString()
      }
    },
    removeWeek (weekNumber) {
      // Don't delete the first week
      if (this.weeks.length > 1) {
        // Show alert dialog to warn users that they are deleting
        // this.dialog = true
        // Remove the week
        this.weeks.splice(weekNumber, 1)
        // switch the tab view to the week before the deleted one
        // vuetify tabs don't understand anything but strings
        this.active = (parseInt(weekNumber) - 1).toString()
      } else {
        // Set to show a message saying not to delete the first week
        this.dontDeleteTheFirstWeek = true
      }
    },
    saveChanges () {
      // Not yet implemented
      console.log('Save button was pressed')
      return 0 // <-- for testing purposes, test that a value was returned
    },
    scheduleMenu () {
      // Not yet implemented
      console.log('Event button was pressed')
      return 0 // <-- for testing purposes, test that a value was returned
    }
  }
}
</script>

<style scoped>

</style>
