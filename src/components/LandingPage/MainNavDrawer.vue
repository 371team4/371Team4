<template>
  <v-navigation-drawer
    app
    v-model="isVisible"
    clipped
    fixed
    dark
    hide-overlay
    stateless
    disable-resize-watcher>
    <v-list
      two-line
      dense
      class="pt-0">
      <v-list-tile
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
  }
}
</script>
