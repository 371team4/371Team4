<template>
  <v-app light>
    <v-tabs v-model="active">
      <v-tabs-bar class="cyan" dark>
        <v-tabs-item v-for="tab in tabs" :key="tab" :href="'#' + tab" ripple>
          <router-link :to="{name: tab}">{{tab}}</router-link>
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content v-for="tab in tabs" :key="tab" :id="tab">
          <v-card flat>
            <v-card-text>{{ tab }}</v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
    <router-view></router-view>
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
