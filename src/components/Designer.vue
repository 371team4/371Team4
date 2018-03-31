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
      <v-form
        v-model="valid"
        lazy-validation
        v-show="!showPreview"
        ref="form">
        <v-container fluid>
          <v-layout v-bind="binding">
            <v-flex>
              <v-layout column>
                <v-flex>
                  <v-text-field
                    data-test-attr="title"
                    label="Title"
                    v-model="slide.title.content"
                    :rules="titleRules"
                    :counter="30"
                    required/>
                <!--<v-expansion-panel>
                <v-expansion-panel-content expand-icon="settings">
                  <div slot="header">Item</div>
                  <font-style
                    :font-style="slide.title.fontSytle"
                    :font-size="slide.title.fontSize"
                    :font-weight="slide.title.fontWeight"
                    :font-color="slide.title.fontColor"/>
                </v-expansion-panel-content>
              </v-expansion-panel>-->
                </v-flex>
                <v-flex>
                  <v-layout v-bind="binding">
                    <v-flex>
                      <v-menu
                        lazy
                        :close-on-content-click="true"
                        v-model="dateMenu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        min-width="290px">
                        <v-text-field
                          slot="activator"
                          label="Date of Event"
                          v-text="formattedDate"
                          prepend-icon="event"
                          readonly/>
                        <v-date-picker
                          v-model="slide.date.content"
                          no-title/>
                      </v-menu>
                      <!--<v-expansion-panel>
                    <v-expansion-panel-content expand-icon="settings">
                      <div slot="header">Item</div>
                      <font-style
                        :font-style="slide.date.fontSytle"
                        :font-size="slide.date.fontSize"
                        :font-weight="slide.date.fontWeight"
                        :font-color="slide.date.fontColor"/>
                    </v-expansion-panel-content>
                  </v-expansion-panel>-->
                    </v-flex>
                    <v-flex>
                      <v-menu
                        ref="tMenu"
                        lazy
                        :close-on-content-click="false"
                        v-model="timeMenu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        max-width="290px"
                        min-width="290px">
                        <v-text-field
                          slot="activator"
                          label="Time of Event"
                          v-text="formattedTime"
                          prepend-icon="access_time"
                          readonly/>
                        <v-time-picker
                          v-model="slide.time.content"
                          :allowed-minutes="allowedMinutes"/>
                      </v-menu>
                      <!--<v-expansion-panel>
                    <v-expansion-panel-content expand-icon="settings">
                      <div slot="header">Item</div>
                      <font-style
                        :font-style="slide.time.fontSytle"
                        :font-size="slide.time.fontSize"
                        :font-weight="slide.time.fontWeight"
                        :font-color="slide.time.fontColor"/>
                    </v-expansion-panel-content>
                  </v-expansion-panel>-->
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <v-text-field
                    textarea
                    label="Description"
                    v-model="slide.description.content"
                    :rules="descriptionRules"
                    :counter="140"
                    required/>
                <!--<v-expansion-panel>
                <v-expansion-panel-content expand-icon="settings">
                  <div slot="header">Item</div>
                  <font-style
                    :font-style="slide.description.fontSytle"
                    :font-size="slide.description.fontSize"
                    :font-weight="slide.description.fontWeight"
                    :font-color="slide.description.fontColor"/>
                </v-expansion-panel-content>
              </v-expansion-panel>-->
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex
              xs4
              :class="`${$vuetify.breakpoint.smAndDown ? '' : 'ml-4'}`">
              <ImageCards
                :images="slide.images"
                @imageSelected="uploadImage"
                @deleteImage="deleteImage"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-flex>
        <v-btn
          data-test-attr="clearButton"
          color="error"
          @click="clear">clear</v-btn>
        <v-btn
          @click="changeViews"
          data-test-attr="previewButton">
          {{ showPreview ? 'Edit' : 'Preview' }}
        </v-btn>
        <v-btn
          data-test-attr="submitButton"
          color="success"
          @click="submit">submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'

import DefaultSlideTemplate from '@/components/templates/DefaultSlideTemplate'
import ImageCards from '@/components/slide/ImageCards'

import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

export default {
  components: { ImageCards, DefaultSlideTemplate },
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
      valid: true,
      showPreview: false,
      carousel: -1,
      dateMenu: false,
      timeMenu: false,
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length && v.length <= 140) || 'Description must be less than 140 characters'
      ],
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length && v.length <= 30) || 'Title must be less than 30 characters'
      ]
    }
  },
  computed: {
    binding () {
      // shift images under the form on small screens
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) {
        binding.column = true
      }
      return binding
    },
    formattedTime () {
      if (this.slide && this.slide.time && this.slide.time.content !== null) {
        let someDateObj = new Date()
        let timeFrags = this.slide.time.content.split(':')
        someDateObj.setHours(timeFrags[0])
        someDateObj.setMinutes(timeFrags[1])
        return moment(someDateObj).format('hh:mm A')
      }
      return null
    },
    formattedDate () {
      if (this.slide && this.slide.date && this.slide.date.content !== null) {
        return moment(this.slide.date.content).format('dddd, MMMM D')
      }
      return null
    }
  },
  methods: {
    allowedMinutes (minute) {
      return (minute % 5) === 0
    },
    submit () {
      if (this.$refs.form.validate()) {
        this.forceUpdateCarousel()
        this.$store.commit(CURRENT_SLIDE.SET, this.slide)
        this.$store.dispatch('saveSlide')
        this.changeViews()
      }
    },
    clear () {
      // reset all of the data fields
      this.slide.title.content = ''
      this.slide.description.content = ''
      this.slide.date.content = null
      this.slide.time.content = null
      this.date = null
      this.time = null
      this.forceUpdateCarousel()
      this.$store.commit(CURRENT_SLIDE.SET, this.slide)
      if (this.showPreview) {
        this.changeViews()
      }
    },
    forceUpdateCarousel () {
      this.$nextTick(() => (this.carousel = (this.showPreview ? 0 : -1)))
    },
    uploadImage (files) {
      const tmpArray = [...files].filter(file => file.type.indexOf('image/') !== -1)
      this.$store.dispatch('uploadImage', tmpArray[0]).then(function () {
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
