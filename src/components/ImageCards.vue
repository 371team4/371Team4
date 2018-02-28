<template>
  <v-layout
  justify-end="true">
    <v-flex
    sm3>
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
              <AddButton/>
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
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      cards: [
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        },
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        },
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        },
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        },
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        },
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        },
        {
          thumbnail: `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        }
      ]
    }
  },
  methods: {
    deleteCard (index) {
      this.cards.splice(index, 1)
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
  }
}
</script>
