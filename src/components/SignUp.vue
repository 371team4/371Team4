<template>
  <v-container>
    <v-layout
      align-center
      justify-center>
      <v-card>
        <v-card-title class="headline">Sign Up</v-card-title>
        <v-container fluid>
          <v-form
            v-model="valid"
            ref="form"
            lazy-validation>
            <v-text-field
              label="User Id "
              v-model="userid"
              :counter="10"
              required/>
            <v-text-field
              label="Password "
              v-model="password"
              required/>
            <v-btn
              @click="signUserUp({userid: userid, password: password})"
              :disabled="!valid">
              submit
            </v-btn>
            <v-btn :to="{name: 'Login'}">
              Bakc to Login
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      userid: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'signUserUp'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
