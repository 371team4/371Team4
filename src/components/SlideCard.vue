<template>
  <v-card>
    <v-card-media
      :src="imageUrl"
      height="150px"/>
    <v-card-title
      class="pt-1 pb-0"
      primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
        <div>{{ description }}</div>
      </div>
    </v-card-title>
    <v-card-actions class="py-0 px-0">
      <v-spacer/>
      <v-btn
        v-show="slide && !slide.hasOwnProperty('noTouch')"
        flat
        color="blue"
        @click="$emit('edit', slide)">Edit</v-btn>
      <v-btn
        v-show="slide && !slide.hasOwnProperty('noTouch')"
        flat
        color="red"
        @click="$emit('delete', slide)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { server } from '@/services/api.endpoint'
export default {
  props: {
    slide: {
      type: Object,
      default: () => ({
        images: [],
        title: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        description: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        date: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        time: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        meta: {
          template: '',
          timeout: '',
          repeatable: false,
          startDate: '',
          endDate: ''
        }
      })
    }
  },
  computed: {
    title () {
      if (this.slide && this.slide.title && this.slide.title.content) {
        if (this.slide.title.content.length <= 15) {
          return this.slide.title.content
        } else {
          return this.slide.title.content.substring(0, 15).concat('...')
        }
      } else {
        return ''
      }
    },
    description () {
      if (this.slide && this.slide.description && this.slide.description.content) {
        if (this.slide.description.content.length <= 50) {
          return this.slide.description.content
        } else {
          return this.slide.description.content.substring(0, 50).concat('...')
        }
      } else {
        return ''
      }
    },
    imageUrl () {
      if (this.slide && this.slide.images && this.slide.images.length > 0 && this.slide.images[0].path) {
        // need to trim the leading backslash
        return `${server.defaults.baseURL}${this.slide.images[0].path.substring(1)}`
      } else {
        return ''
      }
    }
  }
}
</script>
