<template>
  <v-container fluid>
    <v-container>
      <v-layout row>
        <v-flex
          xs8
          offset-xs2>
          <v-card class="card--flex-toolbar">
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
            <v-divider/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout
      row
      wrap>
      <v-flex
        xs3
        v-for="slide in filteredSlides"
        :key="slide.name">
        <EventCard
          class="mx-1 px-1 my-1 py-1"
          :event="slide"/>
      </v-flex>
      <v-flex
      xs3>
        <add-button
          class="mx-1 px-1 my-1 py-1"
          :is-disabled="false"
          :is-visible="true"
          @cButtonClick="alert('Hi you!')"/>
      </v-flex>
      <v-flex
      xs3>
        <add-button
          class="mx-1 px-1 my-1 py-1"
          :is-disabled="false"
          :is-visible="true"
          @cButtonClick="alert('Hi you!')"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EventCard from './EventCard'
import AddButton from './shared/AddButton'
export default {
  components: { EventCard, AddButton },
  data () {
    return {
      searchString: '',
      slides: []
    }
  },
  computed: {
    filteredSlides () {
      // check if something is typed into the search bar
      if (this.searchString) {
        // if there is something the in the search bar then filter the array fo current slides
        // search the list of slides
        let filteredSlides = this.slides.filter(
          (slide) => slide.name.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1)
        // if there are no slides to show, then show something funny. An error message
        if (filteredSlides.length === 0) {
          filteredSlides.push({
            name: 'None Found',
            thumbnail: 'https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png'
          })
        }
        // return the filtered list of slides
        return filteredSlides
      } else {
        // if the search string is empty then return all the slides
        return this.slides
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
