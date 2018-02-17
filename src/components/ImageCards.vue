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
                v-for="card in cards"
                :key="card">
                <v-card
                tile>
                  <v-card-media
                    :src="card.thumbnail"
                    height="150px">
                    <v-spacer/>
                    <v-btn
                      icon
                      flat
                      @click="deleteCard(card)"> {{ index }}
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-media>
                </v-card>
              </v-flex>
              <!-- add add button from Ben here -->
            </v-layout>
          </v-container>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
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
    deleteCard (card) {
      this.cards.splice(this.cards.indexOf(card), 1)
    }
  }
}
</script>
