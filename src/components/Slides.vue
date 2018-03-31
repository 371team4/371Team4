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
            <v-container class="my-2 py-0 px-3">
              <v-text-field
                id="search_bar"
                prepend-icon="search"
                hide-details
                single-line
                v-model="searchString"/>
            </v-container>
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
          :data-test-attr="`slideCard_${index}`"
          :slide="slide"
          @delete="handleDelete"
          @edit="goToSlide"
          class="mx-1 px-1 my-1 py-1"/>
      </v-flex>
      <v-snackbar
        multi-line
        right
        vertical
        v-model="showSnackbar">
        {{ snackbarMessage }}
        <v-btn
          flat
          color="blue lighten-3"
          @click.native="handleUndoDelete">Undo</v-btn>
      </v-snackbar>
    </v-layout>
    <v-btn
      fixed
      bottom
      right
      big
      color="blue"
      fab>
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import SlideCard from './slide/SlideCard'
import AddButton from './shared/AddButton'
import { mapGetters } from 'vuex'

import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

export default {
  components: { SlideCard, AddButton },
  data () {
    return {
      snackbarMessage: '',
      showSnackbar: false,
      timeoutFunction: null,
      searchString: '',
      deletedSlide: ''
    }
  },
  computed: {
    filteredSlides () {
      let filteredSlides = this.filterSlidesBySearchString(this.allSlides, this.searchString)
      filteredSlides = this.filterSlidesByDeleteId(filteredSlides, this.deletedSlide)
      // return the filtered list of slides
      return filteredSlides
    },
    ...mapGetters([
      'allSlides'
    ])
  },
  methods: {
    handleDelete (slide) {
      // show the snackbar to inform the user about deleting slide
      this.showSnackbar = true
      this.snackbarMessage = `Deleted Slide ${slide.title.content}`
      // if there a slide that has a deletion timeout set on it delete it now
      if (this.deletedSlide && this.timeoutFunction) {
        // delete the previous slide right away
        clearTimeout(this.timeoutFunction)
        this.$store.dispatch('deleteSlide', this.deletedSlide)
      }
      // set up to delete in 30 seconds
      this.timeoutFunction = setTimeout(() => {
        this.$store.dispatch('deleteSlide', slide._id)
        // clear up delete stuff
        this.handleUndoDelete()
      }, 30000)
      this.deletedSlide = slide._id
    },
    // this is doing two things, clearing the delete props and undoing the deletion
    handleUndoDelete () {
      this.showSnackbar = false
      this.snackbarMessage = ''
      this.deletedSlide = ''
      clearTimeout(this.timeoutFunction)
    },
    filterSlidesBySearchString (slides, searchString) {
      // check if something is typed into the search bar
      if (searchString) {
        // if there is something the in the search bar then filter the array fo current slides
        // search the list of slides
        let filteredSlides = slides.filter(
          (slide) => slide.title.content.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
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
        return filteredSlides
      } else {
        return slides
      }
    },
    filterSlidesByDeleteId (slides, deletedId) {
      return slides.filter((slide) => deletedId !== slide._id)
    },
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
