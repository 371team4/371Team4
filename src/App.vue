<template>
  <v-app light>
    <nav-drawer
      :is-visible="drawerVis"
      :tabs="tabs"
      @updateVisFromNav="changeVisibilty"/>
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
      drawerVis: false,
      source: 'hello',
      drawer: false,
      showContentLoader: true
    }
  },
  computed: {
    title () {
      return this.$route.name || 'Slides'
    },
    authenticated () {
      return this.$store.getters.isAuthenticated
    },
    tabs () {
      return this.$router.options.routes.filter(route =>
        route.meta && route.meta.requiresAuth && route.meta.requiresAuth === true && this.authenticated)
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    changeVisibilty () {
      this.drawerVis = !this.drawerVis
    }
  }
}
</script>
