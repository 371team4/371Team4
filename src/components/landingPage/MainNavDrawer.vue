<template>
  <v-navigation-drawer
    data-test-attr="appNav"
    app
    v-model="isVisible"
    clipped
    fixed
    dark
    hide-overlay
    stateless
    touchless
    disable-resize-watcher
    v-if="!inFullScreenMode">
    <v-list
      two-line
      dense
      class="pt-0">
      <v-list-tile
        v-for="tab in tabs"
        :key="tab.name"
        :to="(tab.name === 'Designer') ? '/designer/new' : { name: tab.name }">
        <v-list-tile-action>
          <v-icon>{{ tab.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ tab.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>
      <v-list-tile
        :to="authTab.path"
        @click.native="changeRoute">
        <v-list-tile-action>
          <v-icon>{{ authTab.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ authTab.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      inFullScreenMode: false
    }
  },
  computed: {
    authTab () {
      if (this.$store.getters.isAuthenticated) {
        return { // return the signout route
          path: '/signout',
          name: 'Sign out',
          icon: 'exit_to_app'
        }
      } else {
        return { // return the sign in route
          path: '/signin',
          name: 'Sign in',
          icon: 'account_circle'
        }
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.isInFullScreenMode)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.isInFullScreenMode)
  },
  methods: {
    isInFullScreenMode () {
      let windowIsFullScreen = (window.width === screen.width && window.height === screen.height)
      let clientIsFullScreen = (document.documentElement.clientWidth === screen.width &&
                                document.documentElement.clientHeight === screen.height)
      this.inFullScreenMode = windowIsFullScreen || clientIsFullScreen
    },
    changeRoute (event) {
      if (this.authTab.name === 'Sign out') {
        this.$store.dispatch('signOut')
        this.$router.push({ name: 'Sign in' })
      } else {
        this.$router.push({ name: this.authTab.name })
      }
    }
  }
}
</script>
