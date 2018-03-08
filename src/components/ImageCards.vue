<template>
  <v-layout
  justify-end="true">
    <v-flex
    sm8>
      <v-card>
        <v-container
          fluid
          style="height: 650px"
          class="scroll-y"
          id="scroll-target">
          <v-container
          grid-list-sm>
            <v-layout
              column
              align-content-center="true"
              v-scroll:#scroll-target="onScroll">
              <v-flex
                v-for="(card, index) in cards"
                :key="index">
                <v-card
                tile>
                  <v-card-media
                    :src="card.thumbnail"
                    height="150px">
                    <v-spacer/>
                    <v-btn
                      icon
                      flat
                      @click="deleteCard(index)">
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-media>
                </v-card>
              </v-flex>
              <AddButton @cButtonClick="pickFile"/>
              <input
                ref="uploadButton"
                accept="image/*"
                type="file"
                v-show="false"
                @change="cardSelected">
            </v-layout>
          </v-container>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AddButton from '@/components/shared/AddButton'

export default {
  components: { AddButton },
  props: {
    cards: {
      type: [String, Array],
      default: () =>
        // this is the same as a for each object add property `thumbnail` with value URL
        [{}, {}, {}, {}, {}, {}, {}].map(a => {
          // add this src property to the a object and return it
          return {
            ...a,
            src: `https://picsum.photos/150/300/?image=${Math.floor(
              Math.random() * 100 + 1
            )}`
          }
        })
    }
  },
  methods: {
    deleteCard (index) {
      this.$emit('deleteImage', index)
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
    pickFile () {
      this.$refs.uploadButton.click()
    },
    cardSelected (e) {
      this.$emit('imageSelected', e.target.files)
    }
  }
}
</script>
