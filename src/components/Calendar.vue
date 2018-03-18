<template>
  <v-container fluid>
    <full-calendar
      :config="config"
      :events="events"/>
  </v-container>
</template>

<script>
// Import calendar as a plugin
import { FullCalendar } from 'vue-full-calendar'
// CSS
import 'fullcalendar/dist/fullcalendar.min.css'
export default {
  name: 'Hello',
  components: {
    FullCalendar
  },
  data () {
    return {
      config: {
        defaultView: 'month'
      }
    }
  },
  computed: {
    events () {
      return this.$store.getters.getAllSlides.map((slide) => {
        const newSlide = {}
        // Events at least need title and date information
        if (slide &&
          slide.title &&
          slide.title.content &&
          slide.date &&
          slide.date.content) {
        // Copy the title and start time
          newSlide.title = slide.title.content
          newSlide.start = slide.date.content
          // Now if the event also has time or description, add it into the slide as well
          if (slide.description &&
            slide.description.content) {
            newSlide.description = slide.description.content
          }
          if (slide.time &&
            slide.time.content) {
          // Since the event cannot show correctly with the time from "0 AM" to "10 AM",
          // We have to make a new Date
            newSlide.start = new Date(newSlide.start + ' ' + slide.time.content)
          }
        }
        return newSlide
      })
    }
  },
  methods: {

  }
}

</script>
