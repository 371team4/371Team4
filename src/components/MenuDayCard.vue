<template>
  <v-container>
    <v-card
      hover
      :data-test-attr="testAttr">
      <!-- to be positioned later -->
      <v-card-text
        data-test-attr="dayName"
        class="pt-2 pb-0">
        {{ day.name }}
      </v-card-text>
      <v-layout
        wrap
        horizontal>
        <v-flex
          class="mx-1 my-1"
          v-for="(content, name) in day.meals"
          :key="name">
          <!-- need a div to get this data test attr, v-flex and v-container don't accept custom html attrs -->
          <div :data-test-attr="`mealContainer_${name}`">
            <v-subheader
              data-test-attr="mealName"
              class="justify-center py-1">
              {{ name }}
            </v-subheader>
            <v-text-field
              solo
              label="Food Item"
              class="mb-1"
              data-test-attr="menuItem"
              v-for="(menuItem, index) in content"
              :key="index"
              :name="menuItem"
              :readonly="readOnly"
              :flat="readOnly"/>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    day: {
      type: Object,
      default: () => ({
        name: 'Monday',
        meals: {
          'Lunch': [' ', ' ', ' ', ' ', ' '],
          'Supper': [' ', ' ', ' ', ' ', ' ']
        }
      })
    }
  },
  data () {
    return {
      testAttr: 'menuDayCard'
    }
  }
}
</script>
