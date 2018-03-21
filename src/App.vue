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
    <main-footer/>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/LandingPage/MainNavDrawer'
import MainFooter from '@/components/LandingPage/MainFooter'
import MainHeader from '@/components/LandingPage/MainHeader'

export default {
  components: { NavDrawer, MainFooter, MainHeader },
  data () {
    return {
      drawerVis: false
    }
  },
  computed: {
    title () {
      return this.$route.name
    },
    authenticated () {
      return this.$store.getters.isAuthenticated
    },
    tabs () {
      return this.$router.options.routes
        .filter(route => route.name && route.icon)
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  created () {
    this.$store.dispatch('signIn', { username: 'admin', password: 'admin001' })
    setTimeout(function () {
      this.$store.dispatch('signIn', { username: 'admin', password: 'admin001' })
    }.bind(this), 2000)
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
