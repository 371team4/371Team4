<!--
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

          <v-layout>
            <v-flex xs2 sm2 md2 lg2 offset-sm2>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Monday</h3>
                    <div>testing</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
    </v-tab-item>
  </v-container>
</template>
-->
<template>
  <div>
    <v-toolbar
      color="light-blue darken-3"
      dark
      tabs>
      <v-toolbar-title>Food Menu Widget</v-toolbar-title>
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
        align-with-title
        color="light-blue darken-3"
        slot="extension"
        slider-color="amber lighten-3"
        v-model="model"
      >
        <v-tab
          v-for="i in 3"
          :key="i"
          :href="`#tab-${i}`"
        >
          Week {{ i }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :id="`tab-${i}`"
      >
        <v-card flat>
          <v-card-text v-text="text"/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       active: null,
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       numWeeks: 1
//     }
//   },
//   methods: {
//     next () {
//       const active = parseInt(this.active)
//       this.active = (active < 2 ? active + 1 : 0).toString()
//     },
//     addWeek () {
//       this.numWeeks = this.numWeeks + 1
//     }
//   }
// }

export default {
  data () {
    return {
      numWeeks: 1,
      model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    addWeek () {
      this.numWeeks = this.numWeeks + 1
    }
  }
}

</script>

<style scoped>

</style>
