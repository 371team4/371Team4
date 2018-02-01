<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        sm8
        md4>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-card-text>
            <v-form
              :v-model="valid"
              ref="form"
              lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Email"
                type="text"
                v-model="email"
                :rules="[rules.required, rules.email]"
                required/>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                :type="unmask ? 'text' : 'password'"
                v-model="password"
                :append-icon="unmask ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (unmask = !unmask)"
                required
                :rules="[rules.required]"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="primary"
              @click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      unmask: false,
      valid: true,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          // eslint-disable-next-line
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log(this.email, this.password)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
