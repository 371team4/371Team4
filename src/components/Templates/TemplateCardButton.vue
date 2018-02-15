<template>
  <v-card
    height="200px"
    @click="clickFunc()"
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
      required: true
    },
    isDisabled: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    clickFunc: function () {
      this.$emit('ButtonClick')
    }
  }

}
</script>

<style scoped>

</style>
