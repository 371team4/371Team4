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
              v-model="slide.title.content"
              :error-messages="titleErrors"
              :counter="30"
              @blur="$emit('titleBlur')"
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
                    v-model="slide.date.content"
                    prepend-icon="event"
                    readonly/>
                  <v-date-picker
                    v-model="slide.date.content"
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
                    v-model="slide.time.content"
                    :allowed-minutes="allowedMinutes"
                    @change="$refs.tMenu.save(slide.time.content)"/>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-text-field
              textarea
              label="Description"
              v-model="slide.description.content"
              :error-messages="descriptionErrors"
              :counter="140"
              @blur="$emit('descBlur')"
              required
            />
          </form>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
        lg10>
          <ImageCards
            :cards="slide.images"
            @imageSelected="imageSelected"
            @deleteImage="deleteImage"/>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import ImageCards from '@/components/ImageCards'

export default {
  components: { ImageCards },
  props: {
    slide: {
      type: Object,
      default: () => ({
        images: [],
        title: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        description: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        date: {
          content: null,
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        time: {
          content: null,
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        meta: {
          template: '',
          timeout: '',
          repeatable: false,
          startDate: null,
          endDate: null
        }
      })
    },
    titleErrors: {
      type: Array,
      default: null
    },
    descriptionErrors: {
      type: Array,
      default: null
    }
  },
  data: () => {
    return {
      dateMenu: false,
      timeMenu: false
    }
  },
  computed: {
    binding () {
      // shift images under the form on small screens
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) {
        binding.column = true
      }
      return binding
    },
    formattedTime () {
      if (this.slide && this.slide.time && this.slide.time.content !== null) {
        const timeFrags = this.slide.time.content.split(':')
        const timeFormatted = (timeFrags[0] > 12 ? timeFrags[0] - 12 : timeFrags[0]) + ':' + timeFrags[1] + (timeFrags[0] >= 12 ? ' PM' : ' AM')
        return timeFormatted
      }
      return null
    }
  },
  methods: {
    allowedMinutes (minute) {
      return (minute % 5) === 0
    },
    submit () {
      // submit the action packaging all of the fields
      this.$emit('submit')
    },
    clear () {
      // reset all of the data fields
      this.$emit('clear')
      this.dateMenu = false
      this.timeMenu = false
    },
    imageSelected (e) {
      this.$emit('imageSelected', e)
    },
    deleteImage (e) {
      this.$emit('deleteImage', e)
    }
  }
}
</script>
