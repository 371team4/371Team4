<template>
  <v-container
  grid-list-xl>
    <v-layout
    v-bind="binding">
      <v-layout>
        <v-flex
        lg8>
          <form>
            <v-text-field
              label="Title"
              v-model="slideTitle"
              :error-messages="slideTitleErrors"
              :counter="30"
              @input="$v.slideTitle.$touch()"
              @blur="$v.slideTitle.$touch()"
              required/>
            <v-layout>
              <v-flex
              xs11>
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
                  ref="tMenu"
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
                    :allowed-minutes="allowedMinutes"
                    @change="$refs.tMenu.save(time)"/>
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
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
        lg10>
          <ImageCards
            :cards="slide.images"
            @imageSelected="uploadImage"
            @deleteImage="deleteImage"/>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import ImageCards from '@/components/ImageCards'

export default {
  components: { ImageCards },
  mixins: [validationMixin],
  props: {
    slide: {
      type: Object,
      default: () => ({
        images: []
      })
    }
  },
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
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true

      return binding
    },
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
    },
    forceUpdateCarousel () {
      this.$nextTick(() => (this.carousel = (this.showPreview ? 0 : -1)))
    },
    uploadImage (files) {
      debugger
      const tmpArray = [...files].filter(file => file.type.indexOf('image/') !== -1)
      this.$store.dispatch('uploadSingleFile', tmpArray[0]).then(function () {
        this.addImage({ src: this.$store.getters.getUploadTask })
      }.bind(this))
    },
    deleteImage (index) {
      this.slide.images.splice(index, 1)
    },
    addImage (imgObject) {
      this.slide.images.push(imgObject)
      this.forceUpdateCarousel()
    }
  }
}
</script>
