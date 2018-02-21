<template>
  <form>
    <v-text-field
      label="Title"
      v-model="slideTitle"
      :error-messages="slideTitleErrors"
      :counter="30"
      @input="$v.slideTitle.$touch()"
      @blur="$v.slideTitle.$touch()"
      required/>
    <v-layout
      row
      wrap>
      <v-flex
        xs11
        sm5>
        <v-menu
          lazy
          :close-on-content-click="true"
          v-model="dateMenu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px">
          <v-text-field
            slot="activator"
            label="Date of Event"
            v-model="date"
            prepend-icon="event"
            readonly/>
          <v-date-picker
            v-model="date"
            no-title
            scrollable/>
        </v-menu>
      </v-flex>
      <v-spacer/>
      <v-flex
        xs11
        sm5>
        <v-menu
          lazy
          :close-on-content-click="false"
          v-model="timeMenu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px">
          <v-text-field
            slot="activator"
            label="Time of Event"
            v-model="formattedTime"
            prepend-icon="access_time"
            readonly/>
          <v-time-picker
            v-model="time"
            :allowed-minutes="allowedMinutes"/>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-text-field
      label="Description"
      v-model="description"
      :error-messages="descriptionErrors"
      :counter="140"
      @input="$v.description.$touch()"
      @blur="$v.description.$touch()"
      required
    />
    <v-btn
      color="error"
      @click="clear">clear</v-btn>
    <v-btn
      color="success"
      @click="submit">submit</v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  data: () => {
    return {
      slideTitle: '',
      description: '',
      dateMenu: false,
      timeMenu: false,
      date: null,
      time: null
    }
  },
  validations: {
    slideTitle: { required, maxLength: maxLength(30) },
    description: { required, maxLength: maxLength(140) }
  },
  computed: {
    slideTitleErrors () {
      const errors = []
      if (!this.$v.slideTitle.$dirty) {
        return errors
      }
      if (!this.$v.slideTitle.maxLength) {
        errors.push('Title must be at most 30 characters long')
      }
      if (!this.$v.slideTitle.required) {
        errors.push('Title is required.')
      }
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) {
        return errors
      }
      if (!this.$v.description.maxLength) {
        errors.push('Description must be at most 140 characters long')
      }
      if (!this.$v.description.required) {
        errors.push('Description is required')
      }
      return errors
    },
    formattedTime () {
      if (this.time) {
        const timeFrags = this.time.split(':')
        const timeFormatted = (timeFrags[0] > 12 ? timeFrags[0] - 12 : timeFrags[0]) + ':' + timeFrags[1] + (timeFrags[0] > 12 ? ' PM' : ' AM')
        return timeFormatted
      }
      return this.time
    }
  },
  methods: {
    allowedMinutes (minute) {
      return minute % 5 === 0
    },
    submit () {
      // submit the action packaging all of the fields
      this.$v.$touch()
    },
    clear () {
      // reset all of the data fields
      this.$v.$reset()
      this.slideTitle = ''
      this.description = ''
      this.dateMenu = false
      this.timeMenu = false
      this.date = null
      this.time = null
    }
  }
}
</script>
