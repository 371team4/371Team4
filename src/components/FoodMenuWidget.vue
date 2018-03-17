<template>
  <v-container>
    <div>
      <v-toolbar
        xs12
        sm12
        md12
        lg12
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
            v-for="i in numWeeks"
            :key="i"
            :href="`#tab-${i}`"
          >
            Week {{ i }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tabs-items v-model="model">
        <v-tab-item
          v-for="i in numWeeks"
          :key="i"
          :id="`tab-${i}`"
        >
          <!-- <v-card flat>
            <v-card-text v-text="text"/>
          </v-card> -->

          <template>
            <v-layout>
              <v-flex
                xs2
                sm2
                md2
                lg2
                offset-sm2>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Monday</h3>
                      <div> {{ text }} </div>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </template>

        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      numWeeks: 1,
      model: 'tab-2',
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
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
