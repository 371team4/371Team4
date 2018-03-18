
<template>
  <v-container
    fluid
    class="my-0"
    align-content-start>
    <v-layout column>
      <!-- insert slide template here -->
      <AuthorSlide
        :slide="slide"
        @titleBlur="$v.slide.title.content.$touch()"
        @descBlur="$v.slide.description.content.$touch()"
        @imageSelected="uploadImage"
        @deleteImage="deleteImage"
        @clear="clear"
        @submit="submit"/>
    </v-layout>
    <button
      :onClick="getURL()"
    >Submit</button>
    <img
    id="testImage"
    />
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import ImageCards from '@/components/ImageCards'
import AuthorSlide from '@/components/AuthorSlide'

export default {
  components: { ImageCards, AuthorSlide },
  mixins: [validationMixin],
  props: {
    slide: {
      type: Object,
      default: () => ({
        images: []
      })
    }
  },
  data: () => {
    return {
      slideTitle: '',
      description: '',
      dateMenu: false,
      timeMenu: false,
      date: null,
      time: null
    }
  },
  validations: {
    slideTitle: { required, maxLength: maxLength(30) },
    description: { required, maxLength: maxLength(140) }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true

      return binding
    },
    slideTitleErrors () {
      const errors = []
      if (!this.$v.slideTitle.$dirty) {
        return errors
      }
      if (!this.$v.slideTitle.maxLength) {
        errors.push('Title must be at most 30 characters long')
      }
      if (!this.$v.slideTitle.required) {
        errors.push('Title is required.')
      }
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) {
        return errors
      }
      if (!this.$v.description.maxLength) {
        errors.push('Description must be at most 140 characters long')
      }
      if (!this.$v.description.required) {
        errors.push('Description is required')
      }
      return errors
    },
    formattedTime () {
      if (this.time) {
        const timeFrags = this.time.split(':')
        const timeFormatted = (timeFrags[0] > 12 ? timeFrags[0] - 12 : timeFrags[0]) + ':' + timeFrags[1] + (timeFrags[0] > 12 ? ' PM' : ' AM')
        return timeFormatted
      }
      return this.time
    }
  },
  methods: {
    allowedMinutes (minute) {
      return minute % 5 === 0
    },
    submit () {
      // submit the action packaging all of the fields
      this.$v.$touch()
    },
    clear () {
      // reset all of the data fields
      this.$v.$reset()
      this.slideTitle = ''
      this.description = ''
      this.dateMenu = false
      this.timeMenu = false
      this.date = null
      this.time = null
    },
    forceUpdateCarousel () {
      this.$nextTick(() => (this.carousel = (this.showPreview ? 0 : -1)))
    },
    uploadImage (files) {
      debugger
      const tmpArray = [...files].filter(file => file.type.indexOf('image/') !== -1)
      this.$store.dispatch('uploadImage', tmpArray[0]).then(function (value) {
        this.addImage(value._id)
      }.bind(this)).catch(function (err) {
        alert(err)
      })
    },
    deleteImage (index) {
      var image = this.slide.images
      this.$store.dispatch('deleteImage', this.slide.images[index]).then(function () {
        image.splice(index, 1)
      }).catch(function (err) {
        alert(err)
      })
    },
    addImage (imgObject) {
      this.slide.images.push(imgObject)
      this.forceUpdateCarousel()
    },
    getURL () {
      this.$store.dispatch('getImage', '5a98ada216608d51864ef43c').then(function(responce){
        document.getElementById('testImage').setAttribute('src',responce)
      }).catch(function(err){
        alert(err)
      })
    }
  }
}
</script>
