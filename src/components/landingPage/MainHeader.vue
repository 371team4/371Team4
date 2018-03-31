<template>
  <v-toolbar
    v-show="show"
    data-test-attr="appToolBar"
    color="indigo"
    dark
    fixed
    app
    clipped-left>
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
  methods: {
    updateVisibility () {
      this.$emit('updateVisFromHeader')
    }
  }
}
</script>
