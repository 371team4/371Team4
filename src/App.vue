<template>
  <v-app light>
    <v-tabs>
      <v-tabs-bar
        class="cyan"
        dark>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple>
          <router-link :to="{name: tab}">{{ tab }}</router-link>
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <router-view/>
      </v-tabs-items>
    </v-tabs>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      tabs: ['ShowView', 'Projects', 'Designer', 'Calendar']
    }
  }
}
</script>
