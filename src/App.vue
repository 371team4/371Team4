<template>
  <v-app light>
    <nav-drawer
      :is-visible="drawerVis"
      :tabs="tabs"/>
    <main-header
      :is-visible="drawerVis"
      :title="title"
      @updateVisFromHeader="changeVisibilty"/>
    <v-content>
      <v-progress-linear
        v-show="isLoading"
        :indeterminate="true"
        color="light-green accent-3"
        class="my-0"/>
      <v-container
        fluid
        fill-height
        class="px-0 py-0">
        <v-layout>
          <transition>
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/landingPage/MainNavDrawer'
import MainHeader from '@/components/landingPage/MainHeader'

export default {
  components: { NavDrawer, MainHeader },
  data () {
    return {
      drawerVis: false
    }
  },
  computed: {
    title () {
      return this.$route.name
    },
    tabs () {
      return this.$router.options.routes
        .filter(route => {
          if (route.name && route.icon && route.showInTabs) {
            if (route.meta && route.meta.requiresAuth && !this.$store.getters.isAuthenticated) {
              // don't show this route
              return false
            }
            // fall through
            return true
          } else {
            return false
          }
        })
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  created () {
    this.$store.dispatch('retrieveAllSlides')
    setInterval(() => this.$store.dispatch('retrieveAllSlides'), 30000)
  },
  methods: {
    changeVisibilty () {
      this.drawerVis = !this.drawerVis
    }
  }
}
</script>

<!-- we need to override the scroll bar behaviour set by default by vuetify -->
<style>
  html {
    overflow-y: auto
  }
</style>
