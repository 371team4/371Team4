<template>
  <v-card
    @click="add()"
    v-model="isVisible"
    disabled="isDisabled">
    <v-container
      fill-height
      fluid>
      <v-btn
        color="blue"
        large
        block>
        <v-icon
        x-large>
          add
        </v-icon>
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
    add: function () {
      this.$emit('cButtonClick')
    }
  }

}
</script>

<style scoped>

</style>
