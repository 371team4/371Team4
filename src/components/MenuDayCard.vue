<template>
  <v-container>
    <v-card
      width="450px"
      hover>
      <v-layout horizontal>
        <v-flex
          sm
          pr-3
          pl-1
          pb-1>
          <v-subheader>Lunch</v-subheader>
          <v-text-field
            solo
            name="item1"
            label="Food Item"/>
          <v-text-field
            solo
            name="item2"
            label="Food Item"/>
          <v-text-field
            solo
            name="item3"
            label="Food Item"/>
          <v-text-field
            solo
            name="item4"
            label="Food Item"/>
          <v-text-field
            solo
            name="item5"
            label="Food Item"/>
        </v-flex>
        <v-flex
          sm
          pb-1
          pr-1>
          <v-subheader>Supper</v-subheader>
          <v-text-field
            solo
            name="item1"
            label="Food Item"/>
          <v-text-field
            solo
            name="item2"
            label="Food Item"/>
          <v-text-field
            solo
            name="item3"
            label="Food Item"/>
          <v-text-field
            solo
            name="item4"
            label="Food Item"/>
          <v-text-field
            solo
            name="item5"
            label="Food Item"/>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    day: {
      type: Object,
      default: () => ({
        meal1: {
          item1: ' ',
          item2: ' ',
          item3: ' ',
          item4: ' ',
          item5: ' '
        },
        meal2: {
          item1: ' ',
          item2: ' ',
          item3: ' ',
          item4: ' ',
          item5: ' '
        }
      })
    }
  }
}

</script>

<style scoped>

</style>
