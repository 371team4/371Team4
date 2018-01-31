<template>

  <v-app light>
    <!--
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
     -->
    <pp-showview/>
    <pp-createview/>
  </v-app>
</template>

<script>
import ShowView from './components/ShowView.vue'
import CreateView from './components/CreateView.vue'
import { eventsDB } from './services/firebase.conf'
export default {
  components: {
    ppShowview: ShowView,
    ppCreateview: CreateView
  },
  created () {
    this.$store.dispatch('setPageRef', eventsDB)
  }
}
</script>
