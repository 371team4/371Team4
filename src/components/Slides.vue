<template>
  <v-container
    fluid
    class="mt-2"
    align-center
    justify-center>
    <v-layout
      row
      align-center
      justify-center>
      <v-flex
        xl6
        lg8
        md8
        sm10
        xs12
        class="mb-2">
        <v-card class="card--flex-toolbar elevation-3">
          <v-toolbar
            card
            color="white"
            prominent>
            <v-text-field
              id="search_bar"
              prepend-icon="search"
              hide-details
              single-line
              v-model="searchString"/>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        xl2
        lg3
        md4
        sm6
        xs12
        v-for="(slide, index) in filteredSlides"
        :key="index">
        <slide-card
          :slide="slide"
          @click="goToSlide(slide)"
          class="mx-1 px-1 my-1 py-1"/>
      </v-flex>
      <v-flex xs3>
        <add-button
          class="mx-1 px-1 my-1 py-1"
          :is-disabled="false"
          :is-visible="true"
          @cButtonClick="dialog=true"/>
      </v-flex>
      <v-dialog
        v-model="dialog"
        max-width="1000">
        <v-card>
          <v-card-title class="headline">Choose a Template</v-card-title>
          <v-layout
            row
            wrap>
            <v-flex
              xs3
              v-for="i in 4"
              :key="i">
              <v-card class="mx-1 px-1 my-1 py-1">
                <v-card-media
                  src="http://placehold.it/32x32"
                  height="200px"/>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import SlideCard from './SlideCard'
import AddButton from './shared/AddButton'

import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

export default {
  components: { SlideCard, AddButton },
  data () {
    return {
      searchString: '',
      dialog: false
    }
  },
  computed: {
    slides () {
      return this.$store.getters.allSlides
    },
    filteredSlides () {
      // check if something is typed into the search bar
      if (this.searchString) {
        // if there is something the in the search bar then filter the array fo current slides
        // search the list of slides
        let filteredSlides = this.slides.filter(
          (slide) => slide.title.content.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1)
        // if there are no slides to show, then show something funny. An error message
        if (filteredSlides.length === 0) {
          filteredSlides.push({
            title: {
              content: 'None Found'
            },
            description: {
              content: 'No matching slides were found'
            },
            images: [
              {
                src: 'https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png'
              }
            ]
          })
        }
        // return the filtered list of slides
        return filteredSlides
      } else {
        // if the search string is empty then return all the slides
        return this.slides
      }
    }
  },
  methods: {
    goToSlide (slide) {
      this.$store.commit(CURRENT_SLIDE.SET, slide)
      this.$router.push(
        {
          name: 'Designer',
          params: {
            slide: slide
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
