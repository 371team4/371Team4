<template>
  <v-container fluid>
    <full-calendar :events="Events"/>
  </v-container>
</template>

<script>

export default {
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  computed: {
    Events () {
      return this.$store.getters.getAllSlides.map((slide) => {
        const newSlide = {}
        if (slide &&
            slide.title &&
            slide.title.content &&
            slide.date &&
            slide.date.content) {
          // Copy the title and start time
          newSlide.title = slide.title.content
          newSlide.start = this.addOneDay(slide.date.content)
        }
        return newSlide
      })
    }
  },
  methods: {
    // Since the calendar view cannot show the correct date,
    // One day is added manually
    addOneDay: function (dateString) {
      return new Date(dateString).setDate(new Date(dateString).getDate() + 1)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
