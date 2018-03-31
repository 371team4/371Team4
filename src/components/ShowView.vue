<template>
  <default-slide-template
    v-show="slide.meta.template === 'DefaultSlideTemplate'"
    :slide="slide"/>
</template>

<script>
import { mapGetters } from 'vuex'

import DefaultSlideTemplate from '@/components/templates/DefaultSlideTemplate'

export default {
  components: {
    DefaultSlideTemplate
  },
  data: () => {
    return {
      index: 0
    }
  },
  computed: {
    ...mapGetters([
      'allSlides'
    ]),
    slide () {
      return this.allSlides[this.index]
    }
  },
  created () {
    this.intervalFunction = this.updateIndexAfterTimeout()
  },
  methods: {
    updateIndexAfterTimeout () {
      const timeout = this.allSlides[this.index].meta.timeout * 1000
      return setTimeout(() => {
        this.index < (this.allSlides.length - 1) ? this.index++ : this.index = 0
        return this.updateIndexAfterTimeout()
      }, timeout)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
