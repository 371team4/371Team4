<template>
  <v-toolbar
    color="indigo"
    dark
    fixed
    app
    clipped-left>
    <v-toolbar-side-icon
      v-show="!isVisible"
      @click="updateVisibility"/>
    <v-btn
      icon
      v-show="isVisible"
      @click="updateVisibility">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
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
      default: 'something didn\'t work'
    }
  },
  methods: {
    updateVisibility () {
      this.$emit('updateVisFromHeader')
    }
  }
}
</script>
