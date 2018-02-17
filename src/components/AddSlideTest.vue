<template>
  <div>
    <v-btn
      @click="testGet()"
      dark
      color="pink"
      ripple
      round>
      <v-icon>add</v-icon>
    </v-btn>
    <div>
      <input
        type="text"
        v-model="name" >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'input slide name here'
    }
  },
  methods: {
    testGet: function () {
      this.$store.dispatch('createSlide', this.name)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
