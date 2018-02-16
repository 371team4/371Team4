<template>
  <v-container
    row
    wrap
    fluid
    grid-list-sm>
    <!-- Event title card -->
    <v-layout
      row
      wrap
      justify-space-between>
      <v-flex
        d-flex
        xs12
        sm8
        md9
        lg3>
        <v-card
          color="transparent"
          flat
          height="100px">
          <v-card-title
            primary
            class="title">
            <h3 class="display-3">{{ title }}</h3>
            <span class="subheading">{{ subtitle }}</span>
          </v-card-title>
        </v-card>
      </v-flex>
      <!-- Done Event title card --> 
      <!-- Carousel Component -->
      <v-flex
        d-flex
        xs12
        sm8
        md6>
        <v-carousel
          hide-controls
          hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item.src"
            :key="i"/>
        </v-carousel>
      </v-flex>
      <!-- Done the Carousel item -->
      <v-flex
        d-flex
        xs12>
        <v-card
          color="transparent"
          flat
          height="100px"/>
      </v-flex>
    </v-layout>

    <v-jumbotron color="grey lighten-2">
      <v-container
        fill-height
        fluid>
        <v-layout align-center>
          <v-flex>
            <div class="title mb-3"> {{ subtitle }}</div>
            <v-divider class="my-3"/>
            <span class="subheading"> {{ eventBody }} </span>
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
      ],
      title: 'Hello World',
      subtitle: 'Hello World subtitle',
      eventBody: 'CMPT371 Team 4: Erik, Mahmoud, Jordan, Amy, Peggy, Ehtasham, Ben, Li, Ridwan, Duke, Mason, Nam',
      editMode: false
    }
  }
}
</script>

<style scoped>

</style>
