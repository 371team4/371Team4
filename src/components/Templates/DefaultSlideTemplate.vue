<template>
  <v-container
    row
    wrap
    fluid
    grid-list-md>
    <!-- Event title card -->
    <v-layout
      v-show="!slideModeOn"
      row
      wrap
      justify-space-between>
      <v-flex
        align-center
        justify-center
        xs12
        sm12
        md12
        lg6>
        <v-card
          color="transparent"
          flat>
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
        align-content-end
        xs12
        sm12
        md12
        lg6>
        <v-carousel
          hide-controls
          interval="6667"> <!-- Carousel flip time = 40,000 time per slide / 6 images = 6667 (roughly) -->
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
    <template>
      <v-jumbotron color="white">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex
            v-show="!slideModeOn">
              <h3 class="display-1">{{ subtitle }}</h3>
              <v-divider class="my-3"/>
              <span class="subheading"> {{ eventBody }} </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </template>
    <!-- Done event body component -->

  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return [ { src: 'http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg' },
          { src: 'https://www.usask.ca/programs/images/college.jpg' },
          { src: 'http://www.usask.ca/consumer_services//features/4730695474_e71554258d_b%20copy1.jpg' }
        ]
      }
    },
    title: {
      type: String,
      default: 'Sherbrooke Event Title'
    },
    subtitle: {
      type: String,
      default: 'Sherbrooke event slide subtitle'
    },
    eventBody: {
      type: String,
      default: 'Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum. '
    },
    slideModeOn: {
      type: Boolean,
      default: false
    },
    time: {
      type: String,
      default: '7:00 PM'
    }
  }
}

</script>

<style scoped>

</style>
