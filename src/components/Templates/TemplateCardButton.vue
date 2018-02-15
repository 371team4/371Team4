<template>
  <v-card
    height="200px"
    @click="clickFunc()"
    v-model="isVisible"
    disabled="isDisabled">
    <v-container
      fill-height
      fluid>
      <v-btn
        large
        block>
        <v-icon x-large>add</v-icon>
      </v-btn>
    </v-container>
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
    clickFunc: function () {
      this.$emit('ButtonClick')
    }
  }

}
</script>

<style scoped>

</style>
