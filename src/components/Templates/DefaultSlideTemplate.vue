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
            <h2 class="display-3">{{ slide.title.content }}</h2>
          </v-card-title>
          <v-card-title
            primary
            class="title">
            <h2 class="display-2">{{ slide.date.content }}, {{ slide.time.content }} </h2>
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
            v-for="(item,index) in slide.images"
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
              <h3 class="headline"> {{ slide.description.content }}</h3>
              <v-divider class="my-3"/>
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
    slide: {
      type: Object,
      default: () => ({
        images: [
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
        description: {
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
        meta: {
          template: 'DefaultSlideTemplate',
          timeout: '40',
          repeatable: false,
          startDate: '2018-07-26',
          endDate: '2018-08-01'
        }
      })
    }
  },
  computed: {
    carouselInterval () {
      if (this.slide && this.slide.images && this.slide.images.length > 0 &&
      this.slide.meta && this.slide.meta.timeout && this.slide.meta.timeout > 0) {
        return ((this.slide.meta.timeout * 1000) / this.slide.images.length)
      }
      /* cannot return 0, Vuetify recognizes 0 as 0 time for carousel */
      // if the above is false, undefined is returned which Vuetify treats as 'use the default'
    }
  }
}

</script>

<style scoped>

</style>
