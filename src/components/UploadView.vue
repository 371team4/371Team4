<template>
  <div>
    <input
      accept="image/*"
      type="file"
      @change="uploadAndSubmit">
  </div>
</template>

<script>
export default {
  data () {
    return {
      files: []
    }
  },
  methods: {
    uploadAndSubmit: function ({ target }) {
      // check file type is image
      let tmpArray = [...target.files]
      this.files = tmpArray.filter(file => file.type.indexOf('image/') !== -1)
      this.$store.dispatch('uploadSingleFile', this.files[0])
    }
  }
}
</script>

<style scoped>

</style>
