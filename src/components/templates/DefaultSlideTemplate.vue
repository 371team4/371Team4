<template>
  <v-container
    id="slidePreviewPage"
    fluid
    grid-list-lg
    fill-height>
    <v-layout v-bind="$vuetify.breakpoint.smAndDown ? { column: true } : { row: true }">
      <v-flex
        d-flex
        xs12
        sm6
        md4>
        <v-layout
          row
          wrap>
          <v-flex
            xs12
            sm12>
            <v-card-title
              data-test-attr="previewTitle"
              :style="genFontStylingFor(slide.title)">{{ slide.title.content }}</v-card-title>
            <v-card-title>
              <h2>
                <span :style="genFontStylingFor(slide.date)">{{ formattedDate }},</span>
                <span :style="genFontStylingFor(slide.time)">{{ formattedTime }}</span>
              </h2>
            </v-card-title>
            <v-card-title class="grey lighten-3 d-block">
              <v-divider class="my-3" />
              <br>
              <div
                data-test-attr="previewDescription"
                :style="genFontStylingFor(slide.description)">{{ slide.description.content }}
              </div>
              <br>
              <v-divider class="my-3" />
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
        sm8
        md8>
        <v-carousel
          :value="carousel"
          hide-controls
          hide-delimiters
          :interval="carouselInterval"
          class="fill-height">
          <v-carousel-item
            v-for="(image, index) in slide.images"
            :src="imageUrl(image)"
            :key="index" />
        </v-carousel>
      </v-flex>
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
      if (this.slide && this.slide.date && this.slide.date.content && this.slide.date.content.length > 0) {
        return moment(this.slide.date.content[0]).format('dddd, MMMM D')
      }
      return ''
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
/* .jumbotron__image {
  max-width: 100%;
  max-height: 100%;
} */
</style>
