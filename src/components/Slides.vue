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
                prepend-icon="search"
                hide-details
                single-line
                @keyup.enter="searchForSlide"
                v-model="searchString"/>
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
        v-for="event in events"
        :key="event.name">
        <EventCard
          class="mx-1 px-1 my-1 py-1"
          :event="event"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EventCard from './EventCard'
export default {
  components: { EventCard },
  data () {
    return {
      searchString: '',
      events: [
        {
          _id: '5a700ee29c61ea4f72cd23e2',
          name: 'Lorem et proident',
          lastEditedBy: { first: 'Pearlie', last: 'Combs' },
          createdBy: { first: 'Shannon', last: 'Becker' },
          thumbnail: 'http://placehold.it/32x32',
          dateRange: {
            start: 'Thursday, September 7, 2017 9:28 AM',
            end: 'Thursday, February 2, 2017 2:09 PM',
            isRepeatable: false
          },
          description: 'Fugiat ea enim elit exercitation sunt proident pariatur sint dolore cillum. Qui ad anim est non proident et laboris laborum adipisicing adipisicing. Velit id nulla aliqua ipsum proident nostrud reprehenderit do laboris. Excepteur ut occaecat do consequat do est nostrud sint non ut. Sit est nulla ex laboris fugiat velit esse quis non. Nisi aute non reprehenderit veniam nisi.',
          isOnRotation: false
        },
        {
          _id: '5a700ee2edd05bd8edf9f8a5',
          name: 'nulla mollit magna',
          lastEditedBy: { first: 'Reynolds', last: 'Giles' },
          createdBy: { first: 'Myers', last: 'Maddox' },
          thumbnail: 'http://placehold.it/32x32',
          dateRange: {
            start: 'Thursday, December 14, 2017 3:14 PM',
            end: 'Thursday, May 14, 2015 9:01 AM',
            isRepeatable: true
          },
          description: 'Non ex sunt qui aliquip quis quis. Irure do dolore culpa minim veniam fugiat veniam consectetur in magna aliqua est. Sit minim aliquip non qui eu minim officia et. Excepteur occaecat nostrud sint esse incididunt proident sit amet amet. Sit nisi ut elit qui esse veniam laboris dolor Lorem.',
          isOnRotation: false
        },
        {
          _id: '5a700ee2802a86be6d0f3c89',
          name: 'commodo non quis',
          lastEditedBy: { first: 'Lawson', last: 'Charles' },
          createdBy: { first: 'Summers', last: 'Skinner' },
          thumbnail: 'http://placehold.it/32x32',
          dateRange: {
            start: 'Wednesday, October 12, 2016 12:46 PM',
            end: 'Saturday, July 26, 2014 6:34 PM',
            isRepeatable: true
          },
          description: 'Est exercitation veniam veniam esse ut cillum ullamco excepteur ea proident pariatur ad. Lorem et exercitation deserunt proident proident ex cillum et. Nostrud mollit laboris excepteur consequat et dolore esse dolore amet pariatur. Esse amet occaecat culpa est in amet dolore pariatur. Laboris officia Lorem ullamco veniam consectetur.',
          isOnRotation: false
        },
        {
          _id: '5a700ee3338ef9064a563672',
          name: 'quis laboris ipsum',
          lastEditedBy: { first: 'Liza', last: 'Mcconnell' },
          createdBy: { first: 'Michele', last: 'Miller' },
          thumbnail: 'http://placehold.it/32x32',
          dateRange: {
            start: 'Tuesday, October 4, 2016 9:18 PM',
            end: 'Sunday, April 13, 2014 10:46 AM',
            isRepeatable: false
          },
          description: 'Do et mollit cillum ullamco velit veniam ut incididunt qui cillum labore eiusmod. Magna non cupidatat et reprehenderit ullamco eu dolor adipisicing. Laborum esse aliquip Lorem culpa ipsum sit irure quis amet ullamco. Et deserunt laboris et culpa dolor magna labore irure cillum eiusmod sit proident. Sunt Lorem sit consectetur ipsum cillum deserunt in veniam ad non tempor enim. Voluptate fugiat quis dolore nisi.',
          isOnRotation: false
        },
        {
          _id: '5a700ee3f0146573268b1388',
          name: 'cillum adipisicing irure',
          lastEditedBy: { first: 'Palmer', last: 'Mcneil' },
          createdBy: { first: 'Harper', last: 'Thomas' },
          thumbnail: 'http://placehold.it/32x32',
          dateRange: {
            start: 'Tuesday, February 3, 2015 1:24 AM',
            end: 'Friday, December 15, 2017 8:59 PM',
            isRepeatable: false
          },
          description: 'In excepteur proident mollit minim minim. Velit deserunt deserunt est in magna dolore qui. Pariatur occaecat magna pariatur magna qui nisi Lorem est. Voluptate consequat Lorem enim est ea sit laboris eu quis in esse occaecat consequat.',
          isOnRotation: true
        },
        {
          _id: '5a700ee390112ad6e37b1b91',
          name: 'non laboris et',
          lastEditedBy: { first: 'Stewart', last: 'Stewart' },
          createdBy: { first: 'Bethany', last: 'Riley' },
          thumbnail: 'http://placehold.it/32x32',
          dateRange: {
            start: 'Thursday, June 16, 2016 2:47 AM',
            end: 'Thursday, June 22, 2017 3:53 PM',
            isRepeatable: false
          },
          description: 'Magna nisi ipsum nostrud officia ipsum id do velit pariatur dolor elit ullamco. Ullamco voluptate commodo nostrud eu consectetur do ullamco id velit non. Quis adipisicing nulla sint ullamco irure incididunt. Qui eiusmod laborum dolore ea eiusmod esse ad pariatur occaecat id. Non eu fugiat officia amet Lorem proident quis fugiat esse aliquip ut ex nisi. In fugiat do ad elit in. Ullamco nulla mollit nulla qui officia laboris culpa laboris deserunt.',
          isOnRotation: true
        }
      ]
    }
  },
  methods: {
    searchForSlide () {
      console.log('Pressed search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
