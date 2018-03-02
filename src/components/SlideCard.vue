<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg>
      <v-layout row>
        <v-flex xl7>
          <div
            class="headline"
            v-text="event.name"/>
          <div>sub heading</div>
        </v-flex>
        <v-flex xs12>
          <v-card-media
            :src="event.thumbnail"
            height="150px"
            contain/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-text
      class="overflow"
      v-text="event.description"/>
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

<style scoped>
.overflow {
  text-overflow: ellipsis;
}
</style>
