<template>
  <v-container fluid>
    <full-calendar :events="fcEvents"/>
  </v-container>
</template>

<script>

export default {
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  computed: {
    fcEvents () {
      const Slides = this.$store.getters.getSlide
      const filteredSlides = (Slides.map((slide) => {
        const newSlide = {}
        if (slide &&
            slide.title &&
            slide.title.content &&
            slide.date &&
            slide.date.content) {
          // Copy the title and start time
          newSlide.title = slide.title.content
          newSlide.start = this.addOneDay(slide)
        }
        return newSlide
      }))
      return filteredSlides
    }
  },
  methods: {
    // Since the calendar view cannot show the correct date,
    // One day is added manually
    addOneDay: function (slide) {
      var Data = new Date(slide.date.content)
      Data.setDate(Data.getDate() + 1)
      return Data
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
