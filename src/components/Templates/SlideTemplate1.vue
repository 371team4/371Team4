<template>
  <v-container>
    <v-layout
      row
      wrap>
      <h1>hi</h1>
    </v-layout>

    <!-- Carousel Component -->
    <v-layout
      row
      wrap>
      <v-flex
      xs12>

        <v-carousel
          hide-controls
          hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item.src"
            :key="i">
          </v-carousel-item>
        </v-carousel>

      </v-flex>
    </v-layout>
    <!-- Done the Carousel item -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { src: 'https://www.usask.ca/programs/images/college.jpg', id: '1' },
        { src: 'http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg', id: '2' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
