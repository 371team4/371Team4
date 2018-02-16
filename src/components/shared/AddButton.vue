<template>
  <v-card
  v-if="isVisible">
    <v-flex
    align-center>
      <v-btn
        :disabled="isDisabled"
        @click.stop="add"
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
    add () {
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
