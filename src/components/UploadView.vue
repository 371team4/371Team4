<template>
  <div>
    <input
      accept="image/*"
      type="file"
      @change="uploadAndSubmit">
    <button
    @click="cancelUpload">
      cancel
    </button>
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
      let tmpArray = [...target.files]
      this.files = tmpArray.filter(file => file.type.indexOf('image/') !== -1)
      // console.log(this.files)
      this.$store.dispatch('uploadSingleFile', this.files[0])
    },
    cancelUpload: function () {
      this.$store.dispatch('cancelUploadFile', true)
    }
  }
}
</script>

<style scoped>

</style>
