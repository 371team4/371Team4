<template>
  <div>
    <input
      accept="image/*"
      type="file"
      @change="uploadAndSubmit">
    <button
    @click="cancelUpload">cancel</button>
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
    uploadAndSubmitOne: function ({ target }) {
      let tmpArray = [...target.files]
      this.files = tmpArray.filter(file => file.type.indexOf('image/') !== -1)
      this.$store.dispatch('uploadSingleFile', tmpArray[0])
    },
    cancelUpload: function () {
      this.$store.dispatch('cancelUpload', true)
    }
  }
}
</script>

<style scoped>

</style>
