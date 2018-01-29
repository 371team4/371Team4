<template>
  <v-layout>
    <v-tabs>
      <v-tabs-bar
        class="cyan"
        dark>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :to="{name: tab}"
          ripple>
          {{ tab }}
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <transition>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </v-tabs-items>
    </v-tabs>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      this.tabs.push(route.name)
    })
  }
}
</script>

<style scoped>
</style>
