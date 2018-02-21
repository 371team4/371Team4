<template>
  <v-card
  v-show="isVisible">
    <v-flex
    align-center>
      <v-btn
        :disabled="isDisabled"
        @click.stop="broadcastEvent"
        color="blue"
        large
        block
        class="largeButton">
        <v-icon
        x-large>
          add
        </v-icon>
      </v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    broadcastEvent () {
      this.$emit('cButtonClick')
    }
  }
}
</script>

<style scoped>
.largeButton {
  height: 200px;
}

</style>
