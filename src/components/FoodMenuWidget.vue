<template>
  <v-container>
    <v-toolbar
      dark
      color="teal lighten-2">

      <v-toolbar-title class="white--text">Food Menu Widget</v-toolbar-title>

      <v-spacer/>
      <v-btn
        fab
        small
        color="red darken-3"
        @click.native="addWeek">

        <v-icon dark>add</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>event</v-icon>
      </v-btn>

      <v-tabs
        v-model="active"
        align-with-title
        color="teal lighten-2"
        dark
        slot="extension"
        slider-color="amber lighten-2">

        <v-tab
          v-for="n in numWeeks"
          :key="n"
          ripple>
          Week {{ n }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tab-item
      v-for="n in numWeeks"
      :key="n">

      <v-card flat>
        <v-card-text v-text="text"/>
      </v-card>
    </v-tab-item>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      numWeeks: 1
    }
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0).toString()
    },
    addWeek () {
      this.numWeeks = this.numWeeks + 1
    }
  }
}
</script>

<style scoped>

</style>
