<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg>
      <v-layout row>
        <v-flex xl7>
          <div class="headline">
            {{ shortTitle }}
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
      {{ shortDescription }}
    </v-card-text>
  </v-card>
</template>

<script>
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
        return this.slide.title.content
      } else {
        return ''
      }
    },
    shortTitle () {
      let title = this.title

      if (title.length <= 15) {
        return title
      } else {
        return title.substring(0, 15).concat('...')
      }
    },
    description () {
      if (this.slide && this.slide.description && this.slide.description.content) {
        return this.slide.description.content
      } else {
        return ''
      }
    },
    shortDescription () {
      let description = this.description

      if (description.length <= 50) {
        return description
      } else {
        return description.substring(0, 50).concat('...')
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
