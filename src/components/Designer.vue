<template>
  <form>
    <v-text-field
      label="Title"
      v-model="title"
      :error-messages="titleErrors"
      :counter="30"
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
      required
    />
    <v-layout
      row
      wrap>
      <v-flex
        xs11
        sm5>
        <v-menu
          ref="dateMenu"
          lazy
          :close-on-content-click="true"
          v-model="dateMenu"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="date">
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
          ref="timeMenu"
          lazy
          :close-on-content-click="false"
          v-model="menu2"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
          :return-value.sync="time">
          <v-text-field
            slot="activator"
            label="Time of Event"
            v-model="time"
            prepend-icon="access_time"
            readonly/>
          <v-time-picker
            v-model="time"
            :allowed-minutes="allowedMinutes"
            @change="$refs.menu.save(time)"/>
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

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(30) },
    description: { required, maxLength: maxLength(140) }
  },
  data: () => ({
    title: '',
    description: '',
    date: null,
    menu: false,
    modal: false,
    time: null,
    menu2: false,
    modal2: false,
    allowedMinutes: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
  }),

  computed: {
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push('Title must be at most 30 characters long')
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.maxLength && errors.push('Title must be at most 140 characters long')
      !this.$v.description.required && errors.push('Description is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.title = ''
      this.description = ''
      this.date = ''
      this.time = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
