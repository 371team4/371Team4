<template>
  <div>
    <div
      v-for="page in getPageItems"
      :key="page._id">
      <h1>Show View</h1>
      <p>{{ page.name }}</p>
      <p>{{ page.description }}</p>
      <p>{{ page.image1 }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventsDB } from '../services/firebase.conf'
export default {
  data () {
    return {
      newEvent: {
        name: 'Eg. Happy New Year',
        description: 'Eg. Happy New year for 2019',
        image1: '../assets/2019_1.jpg',
        image2: '../assets/2019_2.jpg',
        image3: '../assets/2019_3.jpg'
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPageItems'
    ])
  },
  methods: {
    addMenuItem: function () {
      eventsDB.push(this.newEvent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
