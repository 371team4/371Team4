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
              lazy-validation
              autocomplete="off">
              <v-select
                :items="domains"
                v-model="selectedDomain"
                bottom
                label="Domain"/>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Username"
                type="text"
                v-model="username"
                :rules="[rules.required, rules.username]"
                required
                @keyup.enter="submit"/>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                :type="unmask ? 'text' : 'password'"
                v-model="password"
                :append-icon="unmask ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (unmask = !unmask)"
                required
                :rules="[rules.required]"
                @keyup.enter="submit"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="primary"
              @click="submit"
              :disabled="isLoading">Login</v-btn>
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
      username: 'test',
      password: 'test01',
      unmask: true,
      selectedDomain: 'test.com',
      valid: true,
      domains: ['scc.ca', 'test.com', 'chcc.ca'],
      rules: {
        required: (value) => !!value || 'Required.',
        username: (value) => {
          // eslint-disable-next-line
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
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
          password: this.password,
          domain: this.selectedDomain
        }
        if (this.$store.getters.isAuthenticated) {
          this.$router.push({ name: 'Slides' })
        } else {
          this.$store.dispatch('signIn', loginInfo)
            .then(state => {
              console.log(state + 'hi hi hi')
            })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
