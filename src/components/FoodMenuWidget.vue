<template>
  <v-container>
    <div>
      <v-tabs
        xs12
        md12
        sm12
        lg12
        v-model="active"
        color="cyan darken-1"
        dark
        slider-color="yellow">
        <v-tab
          v-for="n in numWeeks"
          :key="n"
          ripple>
          Week {{ n }}
        </v-tab>

        <v-btn
          fab
          small
          color="red lighten-1"
          @click.native="addWeek">

          <v-icon dark>add</v-icon>
        </v-btn>

        <v-btn
          flat
          fab
          small>

          <v-icon>save</v-icon>
        </v-btn>

        <v-btn
          small
          fab
          flat>

          <v-icon dark>event</v-icon>
        </v-btn>

        <v-tab-item
          v-for="n in numWeeks"
          :key="n">
          <!--
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
          -->
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
                      <div>testing</div>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </template>

        </v-tab-item>
      </v-tabs>
    </div>
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
