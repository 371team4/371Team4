<template>
  <v-container fluid>
    <full-calendar
      :config="config"
      :events="events" />
  </v-container>
</template>

<script>
// Import calendar as a plugin
import { FullCalendar } from 'vue-full-calendar'
import { mapGetters } from 'vuex'

export default {
  components: {
    FullCalendar
  },
  data () {
    return {
      config: {
        editable: false,
        selectable: false,
        defaultView: 'month',
        header: {
          left: 'prev,next',
          center: 'title',
          right: ''
        },
        height: 'auto',
        contentHeight: 'auto',
        timeFormat: 'hh:mm a'
      }
    }
  },
  computed: {
    ...mapGetters(['allSlides']),
    events () {
      return this.allSlides.map(slide => {
        const retVal = {}
        // Events at least need title and date information
        if (
          slide &&
          slide.title &&
          slide.title.content &&
          slide.date &&
          slide.date.content
        ) {
          let eventStart = new Date(slide.date.content)
          eventStart.setHours(0)
          eventStart.setMinutes(0)
          eventStart.setMilliseconds(0)
          retVal.start = eventStart
          if (slide.time && slide.time.content) {
            let eventTime = new Date(slide.time.content)
            // Since the event cannot show correctly with the time from "0 AM" to "10 AM",
            // We have to make a new Date
            retVal.start.setHours(eventTime.getHours())
            retVal.start.setMinutes(eventTime.getMinutes())
          }
          retVal.title = slide.title.content
        }
        return retVal
      })
    }
  }
}
</script>

<style>
@import 'fullcalendar/dist/fullcalendar.css';
@media print {
  @page {
    size: landscape;
    -moz-transform: rotate(-90deg) scale(0.58, 0.58);
  }
  /* main html content */
  main.content[data-booted] {
    margin: 0px;
    padding: 0px;
  }
  .container.fluid {
    margin: 0px;
  }
  /* fullCalendar */
  #calendar {
    margin: 0px;
    padding: 0px;
  }
  .fc-left {
    display: none;
  }
  /* App shell */
  [data-test-attr='appToolBar'] {
    display: none;
  }
  [data-test-attr='appNav'] {
    display: none;
  }
}
</style>
