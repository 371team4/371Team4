<template>
  <full-calendar
    class="mx-3 my-3"
    :config="config"
    :events="events"/>
</template>

<script>
// Import calendar as a plugin
import { FullCalendar } from 'vue-full-calendar'

export default {
  name: 'Hello',
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
        contentHeight: 'auto'
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

<style>
  @import 'fullcalendar/dist/fullcalendar.min.css';

  @media print {
    @page {size: landscape; -moz-transform: rotate(-90deg) scale(.58,.58)}
    #calendar { margin: 0px;  }
    .fc-left { display: none; }
    /*
    .toolbar { display: none; }
    */

    [data-test-attr='appToolBar'] { display: none; }
    [data-test-attr='appNav'] { display: none; }
    .navigaton-drawer { display: none; }

  }
</style>
