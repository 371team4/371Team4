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
import NavDrawer from '@/components/LandingPage/MainNavDrawer'
import MainHeader from '@/components/LandingPage/MainHeader'
import { slidesDB } from '@/services/firebase.conf'

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
    console.log('I was here ')
    this.$store.dispatch('setSlidesRef', slidesDB)
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
