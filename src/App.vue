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
        <v-layout id="contentWrapper">
          <transition
            name="fade"
            mode="in-out">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </v-layout>
      </v-container>
      <v-snackbar
        data-test-attr="errorWrapper"
        :timeout="snackbarTimeout"
        multi-line
        right
        vertical
        v-model="snackbarStatus">
        {{ snackbarMessage }}
        <v-btn
          data-test-attr="dismissError"
          flat
          color="blue lighten-3"
          @click.native="snackbarHandler">{{ snackbarButton }}</v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/landingPage/MainNavDrawer'
import MainHeader from '@/components/landingPage/MainHeader'
import { SET_SNACKBAR_STATUS } from '@/store/mutation-types'

export default {
  components: { NavDrawer, MainHeader },
  data () {
    return {
      drawerVis: false
    }
  },
  computed: {
    snackbarTimeout () {
      return this.$store.getters.snackbarTimeout
    },
    snackbarStatus: {
      get () {
        return this.$store.getters.snackbarStatus
      },
      set (val) {
        this.$store.commit(SET_SNACKBAR_STATUS, false)
      }
    },
    snackbarMessage () {
      return this.$store.getters.snackbarMessage
    },
    snackbarButton () {
      return this.$store.getters.snackbarButton
    },
    snackbarHandler () {
      return this.$store.getters.snackbarHandler
    },
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
