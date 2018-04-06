<template>
  <v-toolbar
    v-show="show"
    data-test-attr="appToolBar"
    color="indigo"
    dark
    fixed
    app
    clipped-left
    v-if="!inFullScreenMode">
    <v-toolbar-side-icon
      v-show="!isVisible"
      @click="updateVisibility"/>
    <v-toolbar-side-icon
      v-show="isVisible"
      @click="updateVisibility">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Something didn\'t work'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      inFullScreenMode: false
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
    updateVisibility () {
      this.$emit('updateVisFromHeader')
    }
  }
}
</script>
