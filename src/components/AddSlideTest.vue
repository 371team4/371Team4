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
    <p>create slide</p>
    <div>
      <input
        type="text"
        v-if="seen"
        v-model="name" >
    </div>
    <div>
      <v-btn
        v-if="seen"
        @click="Save()"
        dark
        color="pink"
        ripple
        round>
        <v-icon>add</v-icon>
      </v-btn>
      <p v-if="seen">save slide</p>
    </div>

    <div>
      <v-btn
        @click="Delete()"
        dark
        color="pink"
        ripple
        round>
        <v-icon>add</v-icon>
      </v-btn>
      <p>delete slide</p>
      <input
        type="text"
        v-model="del" >
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'input slide name here',
      seen: false,
      del: 'name'
    }
  },
  methods: {
    testGet: function () {
      this.$store.dispatch('createSlide', this.name)
      this.name = 'input slide name here'
      this.seen = true
    },
    Save: function () {
      // after this button is pressed, commit the button into firebase
      // console.log(this.name)
      this.$store.dispatch('saveSlide', this.name)
      this.seen = false
    },
    Delete: function () {
      // after this button is pressed, slide will be deleted
      this.$store.dispatch('deleteTheSlide', this.del)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
