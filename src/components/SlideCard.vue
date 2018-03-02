<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg>
      <v-layout row>
        <v-flex xl7>
          <div class="headline">
            {{ title }}
          </div>
        </v-flex>
        <v-flex xs12>
          <v-card-media
            :src="imageUrl"
            height="150px"
            contain/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-text class="overflow">
      {{ description.substring(0, 50).concat('...') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    slide: {
      type: Object,
      default: () => ({
        images: [
          {
            src: 'https://picsum.photos/200/300/?image=92'
          },
          {
            src: 'https://picsum.photos/200/300/?image=19'
          },
          {
            src: 'https://picsum.photos/200/300/?image=14'
          },
          {
            src: 'https://picsum.photos/200/300/?image=94'
          }
        ],
        title: {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        },
        description: {
          content: 'This is the description for Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        },
        date: {
          content: '2018-02-15',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        },
        time: {
          content: '13:05',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        },
        meta: {
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
    title () {
      if (this.slide && this.slide.title && this.slide.title.content) {
        return this.slide.title.content
      } else {
        return ''
      }
    },
    description () {
      if (this.slide && this.slide.description && this.slide.description.content) {
        return this.slide.description.content
      } else {
        return ''
      }
    },
    imageUrl () {
      if (this.slide && this.slide.images && this.slide.images.length > 0 && this.slide.images[0].src) {
        return this.slide.images[0].src
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.overflow {
  text-overflow: ellipsis;
}
</style>
