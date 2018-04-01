<template>
  <v-container
    class="px-0 py-0"
    fluid>
    <!-- Event title card -->
    <v-layout
      row
      wrap
      justify-space-between>
      <v-flex
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
            <h2
              class="display-3"
              :style="genFontStylingFor(slide.title)">{{ slide.title.content }}</h2>
          </v-card-title>
          <v-card-title
            primary
            class="title">
            <h2 class="display-2">
              <span :style="genFontStylingFor(slide.date)">{{ formattedDate }}</span>,
              <span :style="genFontStylingFor(slide.time)">{{ formattedTime }}</span>
            </h2>
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
          :interval="carouselInterval">
          <v-carousel-item
            v-for="(image, index) in slide.images"
            :src="imageUrl(image)"
            :key="index" />
        </v-carousel>
      </v-flex>
      <!-- Done the Carousel item -->

      <!-- Component used as Event Body -->
      <v-flex>
        <v-jumbotron
          class="mt-2"
          color="grey lighten-3">
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <v-divider class="my-3" />
                <h3
                  class="headline"
                  :style="genFontStylingFor(slide.description)"> {{ slide.description.content }}</h3>
                <v-divider class="my-3" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </v-flex>
      <!-- Done event body component -->
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'
import { server } from '@/services/api.endpoint'

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
          content:
            'Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.',
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
          content: '07:00',
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
      if (
        this.slide &&
        this.slide.images &&
        this.slide.images.length > 0 &&
        this.slide.meta &&
        this.slide.meta.timeout &&
        this.slide.meta.timeout > 0
      ) {
        return this.slide.meta.timeout * 1000 / this.slide.images.length
      }
    },
    formattedTime () {
      if (this.slide && this.slide.time && this.slide.time.content !== null) {
        return moment(this.slide.time.content).format('hh:mm A')
      }
      return null
    },
    formattedDate () {
      if (this.slide && this.slide.date && this.slide.date.content !== null) {
        return moment(this.slide.date.content).format('dddd, MMMM D')
      }
      return null
    }
  },
  methods: {
    imageUrl (image) {
      if (image && image.path) {
        // need to trim the leading backslash
        return `${server.defaults.baseURL}${image.path.substring(1)}`
      } else {
        return ''
      }
    },
    genFontStylingFor (someObj) {
      let styleString = ''
      if (someObj) {
        if (someObj.fontColor) {
          styleString += `color: ${someObj.fontColor.toLowerCase()}; `
        }
        if (someObj.fontSize) {
          styleString += `font-size: ${someObj.fontSize.toLowerCase()}; `
        }
        if (someObj.fontStyle) {
          styleString += `font-style: ${someObj.fontStyle.toLowerCase()}; `
        }
        if (someObj.fontWeight) {
          styleString += `font-weight: ${someObj.fontWeight.toLowerCase()}; `
        }
        return styleString
      }
    }
  }
}
</script>

<style>
.jumbotron__image {
  max-width: 100%;
  max-height: 100%;
}
</style>
