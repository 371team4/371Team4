<template>
  <v-card>
    <v-container
      fluid
      grid-list-md>
      <v-layout
        row
        wrap>
        <v-flex
          md6
          sm4
          xs12
          v-for="(image, index) in images"
          :key="index">
          <v-card
            flat
            tile>
            <v-card-media
              :src="'http://cmpt371g4.usask.ca:8081' + image.path"
              height="150px"/>
            <!-- shift the fab to the top left corner -->
            <v-btn
              class="px-0 py-0 mx-0 mt-4"
              style="margin-right: -10px !important;"
              fab
              small
              absolute
              top
              right
              color="red lighten-1"
              @click.stop="deleteImage(image)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex
          md6
          sm4
          xs12>
          <!-- Add button for the images-->
          <v-card
            flat
            tile
            :class="`${$vuetify.breakpoint.xs ? 'ml-5' : ''}`">
            <v-btn
              fab
              big
              color="blue"
              class="my-5 mx-5"
              @click.stop="$refs.uploadButton.click()">
              <!-- click the upload button below -->
              <v-icon>add</v-icon>
            </v-btn>
            <input
              ref="uploadButton"
              accept="image/*"
              type="file"
              v-show="false"
              @change="imageSelected">
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

export default {
  props: {
    images: {
      type: [String, Array],
      default: () =>
        // this is the same as a for each object add property `thumbnail` with value URL
        [{}, {}, {}, {}, {}, {}, {}].map(a => {
          // add this src property to the a object and return it
          return {
            ...a,
            path: `https://picsum.photos/150/300/?image=${Math.floor(
              Math.random() * 100 + 1
            )}`
          }
        })
    }
  },
  methods: {
    deleteImage (image) {
      this.$emit('deleteImage', image)
    },
    imageSelected (e) {
      this.$emit('imageSelected', e.target.files)
    }
  }
}
</script>
