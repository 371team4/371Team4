<template>
  <v-card
    height="200px"
    @click="add()"
    v-model="isVisible"
    disabled="isDisabled">
    <v-btn>
      <v-icon>add</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: true,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  methods: {
    add: function () {
      this.$emit('cButtonClick')
    }
  }

}
</script>

<style scoped>

</style>
