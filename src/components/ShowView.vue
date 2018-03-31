<template>
  <default-slide-template :slide="slide"/>
</template>

<script>
import DefaultSlideTemplate from '@/components/templates/DefaultSlideTemplate'
import { mapGetters } from 'vuex'
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
    this.intervalFunction = setInterval(() => {
      this.index < this.allSlides.length ? this.index++ : this.index = 0
    }, this.allSlides[this.index].meta.timeout * 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
