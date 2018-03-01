<template>
  <v-container
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
        d-flex
        xs12
        sm12
        md12
        lg6>
        <v-carousel
          hide-controls
          hide-delimiters
          interval="40000/6">
          <v-carousel-item
            v-for="(item,index) in items"
            :src="item.src"
            :key="index"/>
        </v-carousel>
      </v-flex>
      <!-- Done the Carousel item -->

      <v-flex
      xs12>
        <v-card
          color="transparent"
          flat
          height="45px"/>
      </v-flex>
    </v-layout>

    <!-- Component used as Event Body -->
    <template>
      <v-jumbotron color="grey lighten-3">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-2"> {{ subtitle }} </h3>
              <v-divider class="my-3"/>
              <h3 class="display-1"> {{ eventBody }} </h3>
              <!-- <span class="display-1"> {{ eventBody }} </span> -->
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
    carousel: {
      type: Number,
      default: 0
    },
    slideView: {
      type: Object,
      default: () => ({
        items: [
          { src: 'https://www.usask.ca/programs/images/college.jpg' },
          { src: 'http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg' }
        ],
        title: {
          content: 'Sherbrooke Event Title',
          fontColor: ' ',
          fontSize: ' ',
          fontStyle: ' ',
          fontWeight: ' '
        },
        slideDescription: {
          content: 'Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum .',
          fontColor: ' ',
          fontSize: ' ',
          fontStyle: ' ',
          fontWeight: ' '
        }
      })
    },
    items: {
      type: Array,
      default: function () {
        return [ { src: 'https://www.usask.ca/programs/images/college.jpg' },
          { src: 'http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg' }
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
      default: 'Sherbrooke event slide body. CMPT371 Team 4: Erik, Mahmoud, Jordan, Amy, Peggy, Ehtasham, Ben, Li, Ridwan, Duke, Mason, Nam'
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
