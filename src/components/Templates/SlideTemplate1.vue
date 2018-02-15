<template>
  <v-container
    row
    wrap
    fluid
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex
        d-flex
        xs12
        sm6
        md6
        lg6>
        <v-card
          color="light grey"
          dark>
          <v-card-title
            primary
            class="title"> Hi
          </v-card-title>
        </v-card>
      </v-flex>

      <!-- Carousel Component -->
      <v-flex
        d-flex
        xs12
        sm6
        md6
        lg6>
        <v-carousel
          hide-controls
          hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item.src"
            :key="i"/>
        </v-carousel>
      </v-flex>
    </v-layout>
    <!-- Done the Carousel item -->
    <v-jumbotron color="grey lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Title is here</h3>
            <span class="subheading">Insert body here</span>
            <v-divider class="my-3"/>
            <div class="title mb-3">Check out our newest features!</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

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
