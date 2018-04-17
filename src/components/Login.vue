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
              data-test-attr="loginForm"
              :v-model="valid"
              ref="form"
              lazy-validation
              autocomplete="off">
              <v-text-field
                data-test-attr="usernameField"
                prepend-icon="person"
                name="login"
                label="Username"
                type="text"
                v-model="username"
                :rules="[rules.required, rules.username, rules.usernameLength]"
                required
                @keyup.enter="submit"/>
              <v-text-field
                data-test-attr="passwordField"
                prepend-icon="lock"
                name="password"
                label="Password"
                :type="unmask ? 'text' : 'password'"
                v-model="password"
                :append-icon="unmask ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (unmask = !unmask)"
                :rules="[rules.required]"
                required
                @keyup.enter="submit"/>
                <!--, rules.password]"-->
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              data-test-attr="loginButton"
              color="primary"
              @click="submit"
              :disabled="isLoading"
              :loading="isLoading">Login</v-btn>
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
      username: 'admin',
      password: 'admin001',
      unmask: false,
      valid: true,
      rules: {
        required: value => (!!value && !!value.trim()) || 'Required',
        username: value => /(?=[A-Za-z]{4})([A-Za-z0-9_]+)/.test(value) || 'Username must be alphanumeric',
        password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value) || 'Password doesn\'t meet password standards',
        usernameLength: value => (!!value && value.length >= 5) || 'Username must be at least 5 characters long'
      }
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        const loginInfo = {
          username: this.username,
          password: this.password
        }
        if (this.$store.getters.isAuthenticated) {
          this.$router.push(this.$route.query.fullPath)
        } else {
          this.$store.dispatch('signIn', loginInfo).then(function () {
            this.$router.push({ name: 'Slides' })
          }.bind(this))
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
