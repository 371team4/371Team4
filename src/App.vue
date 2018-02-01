<template>
  <v-app light>
    <v-navigation-drawer
      app
      v-model="drawerVis"
      v-show="drawerVis"
      clipped
      fixed
      floating
      dark
      persistent
      hide-overlay>
      <v-list
        transition="slide-x-transition"
        two-line
        dense
        class="pt-0">
        <v-list-tile
          @click="1"
          v-for="tab in tabs"
          :key="tab.name"
          :to="{ name:tab.name }">
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
      app
      clipped-left>
      <v-toolbar-side-icon
        v-show="!drawerVis"
        @click="drawerVis = !drawerVis"/>
      <v-btn
        icon
        v-show="drawerVis"
        @click="drawerVis = !drawerVis">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          justify-center
          align-center>
          <transition>
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      fixed
      color="indigo"
      app>
      <v-spacer/>
      <span class="white--text bold">ReParty &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawerVis: false,
      source: 'hello',
      drawer: false,
      tabs: []
    }
  },
  computed: {
    title: {
      get () {
        return this.$route.name || 'Projects'
      },
      set (newTabName) { }
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      this.tabs.push({ name: route.name, icon: route.icon })
    })
  }
}
</script>
