<template>
  <v-app light>
    <v-navigation-drawer
      app
      v-model="drawerVis"
      v-show="drawerVis"
      clipped
      floating
      fixed
      persistent
      hide-overlay>
      <v-list
        dense
        class="pt-0">
        <v-list-tile
          v-for="tab in tabs"
          :key="tab.name">
          <v-list-tile-action>
            <v-icon>{{ tab.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="indigo"
      dark
      fixed
      app>
      <v-toolbar-side-icon
        @click="drawerVis = !drawerVis"/>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          justify-center
          align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      fixed
      color="indigo"
      app>
      <v-spacer/>
      <span class="white--text bold">ReParty &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawerVis: false,
      title: 'Projects',
      source: 'hello',
      drawer: false,
      tabs: []
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      this.tabs.push({ name: route.name, icon: route.icon })
    })
  }
}
</script>
