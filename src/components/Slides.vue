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
          @edit="openSlide"
          class="mx-1 px-1 my-1 py-1"/>
      </v-flex>
    </v-layout>
    <v-btn
      fixed
      bottom
      right
      big
      color="blue"
      fab
      @click.stop="createNewSlide">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290">
      <v-card>
        <v-card-title class="headline">Unsaved changes</v-card-title>
        <v-card-text>
          You have unsaved slide changes. Click Discard to delete them, or Edit to go back and save them
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="green darken-1"
            flat
            @click.native="discardDirtySlide">Discard</v-btn>
          <v-btn
            color="green darken-1"
            flat
            @click.native="editDirtySlide">Edit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import SlideCard from '@/components/SlideCard'
import { mapGetters } from 'vuex'

import * as MUTATIONS from '@/store/mutation-types'

export default {
  components: { SlideCard },
  data () {
    return {
      dialog: false,
      searchString: '',
      deletedSlide: '',
      slideToOpen: null
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
      this.$store.commit(MUTATIONS.SET_SNACKBAR_STATUS, true)
      this.$store.commit(MUTATIONS.SET_SNACKBAR_MESSAGE, `Deleted Slide ${slide.title.content}`)
      // if there a slide that has a deletion timeout set on it delete it now
      if (this.deletedSlide && this.$store.getter.snackbarHandler) {
        // delete the previous slide right away
        this.$store.commit(MUTATIONS.SET_SNACKBAR_HANDLER, null)
        this.$store.dispatch('deleteSlide', this.deletedSlide)
      }
      // set up to delete in 30 seconds
      this.$store.commit(MUTATIONS.SET_SNACKBAR_TIMEOUT, 10000)
      const _self = this
      this.$store.commit(MUTATIONS.SET_SNACKBAR_HANDLER, setTimeout(() => {
        _self.$store.dispatch('deleteSlide', slide._id)
        // clear up delete stuff
        _self.handleUndoDelete()
      }, this.$store.getters.snackbarTimeout))
      this.deletedSlide = slide._id
    },
    // this is doing two things, clearing the delete props and undoing the deletion
    handleUndoDelete () {
      this.$store.commit(MUTATIONS.SET_SNACKBAR_STATUS, false)
      this.$store.commit(MUTATIONS.SET_SNACKBAR_MESSAGE, '')
      this.$store.commit(MUTATIONS.SET_SNACKBAR_HANDLER, null)
      this.$store.commit(MUTATIONS.SET_SNACKBAR_TIMEOUT, 0)
      this.deletedSlide = ''
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
    createNewSlide () {
      if (this.$store.getters.isCurrentSlideDirty) {
        this.dialog = true
      } else {
        this.gotoDesigner('new')
      }
    },
    discardDirtySlide () {
      debugger
      this.$store.commit(MUTATIONS.CLEAR_CURRENT_SLIDE)
      if (this.slideToOpen) {
        this.openSlide(this.slideToOpen)
      } else {
        this.gotoDesigner('new')
      }
    },
    editDirtySlide () {
      this.dialog = false
      if (this.$store.getters.currentSlide._id) {
        this.gotoDesigner(this.$store.getters.currentSlide._id)
      } else {
        this.gotoDesigner('new')
      }
    },
    gotoDesigner (id) {
      this.slideToOpen = null
      this.$router.push(
        {
          name: 'Designer',
          params: {
            id: id
          }
        }
      )
    },
    openSlide (slide) {
      if (this.$store.getters.isCurrentSlideDirty) {
        this.slideToOpen = slide
        this.dialog = true
      } else {
        if (slide) {
          this.$store.commit(MUTATIONS.SET_CURRENT_SLIDE, slide)
        }
        this.gotoDesigner(slide._id)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
