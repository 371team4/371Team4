<template>
  <v-card
    hover
    data-test-attr="menuDayCard">
    <!-- to be positioned later -->
    <v-card-text
      data-test-attr="dayName"
      class="pt-2 pb-0 headline">
      {{ day.name }}
    </v-card-text>
    <v-layout
      wrap
      horizontal>
      <v-flex
        class="mx-1 my-1"
        v-for="(content, mealName) in day.meals"
        :key="mealName">
        <!-- need a div to get this data test attr, v-flex and v-container don't accept custom html attrs -->
        <div :data-test-attr="`mealContainer_${mealName}`">
          <v-subheader
            data-test-attr="mealName"
            class="justify-center py-1">
            {{ mealName }}
          </v-subheader>
          <v-text-field
            solo
            class="mb-1"
            label="Food Item"
            data-test-attr="menuItem"
            v-for="(menuItem, index) in content"
            :key="index"
            :name="menuItem"
            :readonly="readOnly"
            :flat="readOnly"
            v-bind="{value: menuItem}"
            @blur="$emit('updateMenuItem', {mealName: mealName, itemIndex: index, value: $event.target.value})"/>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
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
  }
}
</script>
