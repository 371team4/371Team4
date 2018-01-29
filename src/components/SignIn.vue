<template>
  <v-layout
    row
    justify-center>
    <v-dialog
      persistent
      max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-form
          v-model="valid"
          ref="form"
          lazy-validation>
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            required/>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required/>
          <v-select
            label="Item"
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            required/>
          <v-checkbox
            label="Do you agree?"
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            required/>
          <v-btn
            @click="submit"
            :disabled="!valid">
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {}
  },
  methods () {},
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('before route enter')
    console.log(to.path)
    console.log(from.path)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    console.log('before route update')
    console.log(to.path)
    console.log(from.path)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log('before route leave')
    console.log(to.path)
    console.log(from.path)
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
