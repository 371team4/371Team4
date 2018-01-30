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
export default {
  components: {
    ppShowview: ShowView,
    ppCreateview: CreateView
  }
}
</script>
