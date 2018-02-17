<template>
  <v-card>
    <v-card-media
      :src="event.thumbnail"
      height="200px">
      <v-container
        fill-height
        fluid>
        <v-layout fill-height>
          <v-flex
            xs6
            align-end
            flexbox>
            <span
              class="headline white--text"
              v-text="event.name"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-actions class="white">
      <v-spacer/>
      <v-btn icon>
        <v-icon>info</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>input</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default () {
        return {
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
          tags: ['enim', 'et', 'cillum', 'reprehenderit', 'non'],
          isOnRotation: false
        }
      }
    }
  }
}
</script>
