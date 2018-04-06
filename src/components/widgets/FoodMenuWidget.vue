<template>
  <v-container
    fluid
    class="px-2 py-2">
    <!-- Food Menu Widget Toolbar -->
    <v-toolbar
      extended
      dark
      tabs
      color="light-blue darken-3">
      <v-icon class="ml-1">restaurant</v-icon>
      <v-toolbar-title>Food Menu</v-toolbar-title>
      <v-spacer/>
      <v-btn
        icon
        small
        class="mx-1"
        color="red darken-3"
        @click.native="addWeek">
        <v-icon dark>add</v-icon>
      </v-btn>
      <v-btn
        icon
        small
        class="mx-1"
        color="blue lighten-3"
        @click.native="reload">
        <v-icon dark>autorenew</v-icon>
      </v-btn>

      <!-- buttons to save changes and schedule the menu -->
      <!-- NOT YET IMPLEMENTED YET. -->
      <v-btn
        small
        icon
        class="mx-1"
        @click.native="saveChanges">
        <v-icon>save</v-icon>
      </v-btn>
      <v-menu
        ref="menu"
        lazy
        :close-on-content-click="true"
        v-model="menu"
        transition="slide-x-reverse-transition"
        offset-x
        full-width
        :nudge-right="40"
        min-width="290px">
        <v-btn
          small
          icon
          class="mx-1"
          slot="activator"
          @click.native="scheduleMenu">
          <v-icon>event</v-icon>
        </v-btn>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
          event-color="green"
          :events="[date]"/>
      </v-menu>
      <!-- Week Component begins here -->
      <v-tabs
        v-model="active"
        color="light-blue darken-3"
        slot="extension"
        slider-color="amber lighten-3">
        <v-tab
          v-for="(week, index) in weeks"
          :key="index"
          class="px-0 py-0">

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
    <v-tabs-items
      touchless
      v-model="active">
      <v-tab-item
        v-for="(week, index) in weeks"
        :key="index">
        <v-container
          fluid
          grid-list-md
          text-xs-center
          class="py-1">
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              sm12
              md6
              lg4
              v-for="(day, dayIndex) in week.days"
              :key="dayIndex">
              <menu-day-card
                :day="day"
                @updateMenuItem="hendleItemUpdate(Object.assign({},{weekIndex:index,dayIndex:dayIndex},$event))"/>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- Done Day Cards -->
      </v-tab-item>
    </v-tabs-items>
    <!-- Done Week Component -->
  </v-container>
</template>

<script>
import MenuDayCard from '@/components/widgets/MenuDayCard'
import * as MUTATIONS from '@/store/mutation-types'
export default {
  components: { MenuDayCard },
  data () {
    return {
      active: '0',
      menu: false,
      date: null
    }
  },
  computed: {
    // weeks as a computed property returns an empty array
    weeks () {
      return this.$store.getters.weeks
    }
  },
  created () {
    this.reload()
  },
  methods: {
    addWeek () {
      // Ensure only 5 weeks are added
      if (this.weeks.length === 5) {
        // Show that too many weeks are currently displayed
        this.$store.commit(MUTATIONS.SET_SNACKBAR_STATUS, true)
        this.$store.commit(MUTATIONS.SET_SNACKBAR_MESSAGE, 'Cannot add more than 5 weeks!')
        this.$store.commit(MUTATIONS.SET_SNACKBAR_BUTTON, 'close')
        this.$store.commit(MUTATIONS.SET_SNACKBAR_HANDLER, function () {
          this.$store.commit(MUTATIONS.SET_SNACKBAR_STATUS, false)
        }.bind(this))
        this.$store.commit(MUTATIONS.SET_SNACKBAR_TIMEOUT, 10000)
      } else {
        // add an empty week to the list of weeks
        const weekTemplate = { startDate: null,
          days: [
            { name: 'Sunday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } },
            { name: 'Monday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } },
            { name: 'Tuesday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } },
            { name: 'Wednesday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } },
            { name: 'Thursday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } },
            { name: 'Friday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } },
            { name: 'Saturday', meals: { Lunch: ['', '', '', '', ''], Supper: ['', '', '', '', ''] } }
          ] }
        this.$store.commit(MUTATIONS.ADD_WEEK, weekTemplate)
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
        this.$nextTick(() => { this.active = (parseInt(weekNumber) - 1).toString() })
      } else {
        // Set to show a message saying not to delete the first week
        this.$store.commit(MUTATIONS.SET_SNACKBAR_STATUS, true)
        this.$store.commit(MUTATIONS.SET_SNACKBAR_MESSAGE, 'Cannot delete the first week!')
        this.$store.commit(MUTATIONS.SET_SNACKBAR_BUTTON, 'close')
        this.$store.commit(MUTATIONS.SET_SNACKBAR_HANDLER, function () {
          this.$store.commit(MUTATIONS.SET_SNACKBAR_STATUS, false)
        }.bind(this))
        this.$store.commit(MUTATIONS.SET_SNACKBAR_TIMEOUT, 10000)
      }
    },
    reload () {
      this.$store.dispatch('retrieveAllWeeks')
    },
    hendleItemUpdate (updatePackage) {
      this.$store.commit(MUTATIONS.UPDATE_MENU_ITEM, updatePackage)
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
