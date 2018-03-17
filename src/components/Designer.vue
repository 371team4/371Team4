
<template>
  <v-container
    fluid
    class="my-0"
    align-content-start>
    <v-layout column>
      <DefaultSlideTemplate
        :carousel="carousel"
        :slide="slide"
        v-show="showPreview"/>
      <AuthorSlide
        v-show="!showPreview"
        ref="form"
        :slide="slide"
        @titleBlur="$v.slide.title.content.$touch()"
        @descBlur="$v.slide.description.content.$touch()"
        @imageSelected="uploadImage"
        @deleteImage="deleteImage"
        @clear="clear"
        @submit="submit"/>
    </v-layout>
    <v-layout horizontal>
      <v-btn
        color="error"
        @click="clear">clear</v-btn>
      <v-spacer/>
      <v-btn @click.stop="changeViews">
        {{ showPreview ? 'Edit' : 'Preview' }}
      </v-btn>
      <v-btn
        color="success"
        @click="submit">submit</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import ImageCards from '@/components/ImageCards'
import AuthorSlide from '@/components/AuthorSlide'
import DefaultSlideTemplate from '@/components/Templates/DefaultSlideTemplate'

import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

export default {
  components: { ImageCards, AuthorSlide, DefaultSlideTemplate },
  mixins: [validationMixin],
  props: {
    slide: {
      type: Object,
      default: () => ({
        images: [],
        title: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        description: {
          content: '',
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        date: {
          content: null,
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        time: {
          content: null,
          fontColor: '',
          fontSize: '',
          fontStyle: '',
          fontWeight: ''
        },
        meta: {
          template: '',
          timeout: '',
          repeatable: false,
          startDate: null,
          endDate: null
        }
      })
    }
  },
  data: () => {
    return {
      showPreview: false,
      carousel: -1
    }
  },
  validations: {
    slide: {
      title: {
        content: {
          required,
          maxLength: maxLength(30)
        }
      },
      description: {
        content: {
          required,
          maxLength: maxLength(140)
        }
      }
    }
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
    submit () {
      // submit the action packaging all of the fields
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.forceUpdateCarousel()
        this.$store.commit(CURRENT_SLIDE.SET, this.slide)
        this.$store.dispatch('saveSlide')
        this.changeViews()
      }
    },
    clear () {
      // reset all of the data fields
      this.$v.$reset()
      this.$refs.form.clear()
      this.forceUpdateCarousel()
      this.$store.commit(CURRENT_SLIDE.SET, this.slide)
    },
    forceUpdateCarousel () {
      this.$nextTick(() => (this.carousel = (this.showPreview ? 0 : -1)))
    },
    uploadImage (files) {
      debugger
      const tmpArray = [...files].filter(file => file.type.indexOf('image/') !== -1)
      this.$store.dispatch('uploadSingleFile', tmpArray[0]).then(function () {
        this.addImage({ src: this.$store.getters.getUploadTask })
      }.bind(this))
    },
    deleteImage (index) {
      this.slide.images.splice(index, 1)
    },
    addImage (imgObject) {
      this.slide.images.push(imgObject)
      this.forceUpdateCarousel()
    },
    changeViews () {
      this.showPreview = !this.showPreview
      this.forceUpdateCarousel()
    }
  }
}
</script>
