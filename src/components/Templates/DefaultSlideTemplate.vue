<template>
  <v-container
    row
    wrap
    fluid
    grid-list-sm>
    <!-- Event title card -->
    <v-layout
      v-show="!slideModeOn"
      row
      wrap
      justify-space-between>
      <v-flex
        d-flex
        xs12
        sm8
        md9
        lg6>
        <v-card
          color="transparent"
          flat
          height="100px">
          <v-card-title
            primary
            class="title">
            <h2 class="display-3">{{ title }}</h2>
          </v-card-title>
          <v-card-title
            primary
            class="title">
            <h2 class="display-2">{{ time }}</h2>
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
        xs12
        v-show="!slideModeOn">
        <v-card
          color="transparent"
          flat
          height="40px"/>
      </v-flex>
    </v-layout>

    <!-- Component used as Event Body -->
    <v-layout
      row
      wrap
      fluid>
      <v-flex
        xs12
        v-show="!slideModeOn">

        <v-card
          color="white"
          height="300px">
          <v-container
            fill-height
            fluid>
            <v-layout align-center>
              <v-flex>
                <div class="title mb-3"> {{ subtitle }}</div>
                <v-divider class="my-3"/>
                <span class="title mb-3"> {{ eventBody }} </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- Done event body component -->

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
      title: 'Sherbrooke Event Title',
      subtitle: 'Sherbrooke event slide subtitle',
      eventBody: 'Sherbrooke event slide body. CMPT371 Team 4: Erik, Mahmoud, Jordan, Amy, Peggy, Ehtasham, Ben, Li, Ridwan, Duke, Mason, Nam',
      slideModeOn: false,
      time: '7:00 PM'
    }
  }
}
</script>

<style scoped>

</style>
