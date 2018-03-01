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
            <h2 class="display-3">{{ slideView.title.content }}</h2>
          </v-card-title>
          <v-card-title
            primary
            class="title">
            <h2 class="display-2">{{ slideView.date.content }}, {{ slideView.time.content }} </h2>
          </v-card-title>
        </v-card>
      </v-flex>
      <!-- Done Event title card -->

      <!-- Carousel Component -->
      <v-flex
        xs12
        sm12
        md12
        lg6>
        <v-carousel
          :value="carousel"
          hide-controls
          hide-delimiters
          :interval="carouselInterval">
          <v-carousel-item
            v-for="(item,index) in slideView.items"
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
              <v-divider class="my-3"/>
              <h3 class="display-1"> {{ slideView.eventBody.content }}</h3>
              <v-divider class="my-3"/>
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
        eventBody: {
          content: 'Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.',
          fontColor: ' ',
          fontSize: ' ',
          fontStyle: ' ',
          fontWeight: ' '
        },
        date: {
          content: '2018-05-25',
          fontColor: ' ',
          fontSize: ' ',
          fontStyle: ' ',
          fontWeight: ' '
        },
        time: {
          content: '07:00 PM',
          fontColor: ' ',
          fontSize: ' ',
          fontStyle: ' ',
          fontWeight: ' '
        },
        overview: {
          template: 'DefaultSlideTemplate',
          timeout: '40',
          repeatable: false,
          startDate: '2018-02-16',
          endDate: '2018-03-01'
        }
      })
    }
  },
  computed: {
    carouselInterval () {
      if (this.slideView && this.slideView.items && this.slideView.items.length > 0 &&
      this.slideView.overview.timeout) {
        return ((this.slideView.overview.timeout * 1000) / this.slideView.items.length)
      }
      /* cannot return 0, Vuetify recognizes 0 as 0 time for carousel */
      return 1000
    }
  }
}

</script>

<style scoped>

</style>
