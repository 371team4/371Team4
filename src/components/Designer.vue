<template>
  <v-container
    fluid
    class="my-0"
    align-content-start>
    <v-layout column>
      <DefaultSlideTemplate
        :carousel="carousel"
        :slide="slide"
        v-show="showPreview" />
      <v-form
        v-model="valid"
        lazy-validation
        v-show="!showPreview"
        ref="form">
        <v-container fluid>
          <v-layout :class="`${this.$vuetify.breakpoint.smAndDown ? 'column' : ''}`">
            <v-flex>
              <v-layout column>
                <v-flex>
                  <v-card class="my-1">
                    <v-card-actions class="py-0">
                      <v-text-field
                        data-test-attr="title"
                        label="Title"
                        v-model="title"
                        :rules="titleRules"
                        :counter="30"
                        required/>
                      <v-btn
                        icon
                        @click.native="showTitleSettings = !showTitleSettings">
                        <v-icon>{{ showTitleSettings ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                      <v-container
                        grid-list-xl
                        v-show="showTitleSettings">
                        <v-layout
                          :class="`${$vuetify.breakpoint.mdAndUp ? 'row' : 'column'}`"
                          wrap>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Color"
                              :items="fontColors"
                              v-model="titleColor">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :color="data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Size"
                              :items="fontSizes"
                              v-model="titleSize">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  class="chip--select-multi"
                                  :style="'font-size: ' + data.item.toLowerCase()"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Weight"
                              :items="fontWeights"
                              v-model="titleWeight">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-weight: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Style"
                              :items="fontStyles"
                              v-model="titleStyle">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-style: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-slide-y-transition>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="my-1">
                    <v-card-actions class="py-0">
                      <v-flex>
                        <v-menu
                          lazy
                          :close-on-content-click="true"
                          v-model="dateMenu"
                          transition="slide-y-transition"
                          offset-y
                          full-width
                          :nudge-right="40"
                          min-width="290px">
                          <v-text-field
                            slot="activator"
                            label="Date of Event"
                            v-model="formattedDate"
                            prepend-icon="event"
                            readonly/>
                          <v-date-picker
                            v-model="date"
                            no-title/>
                        </v-menu>
                      </v-flex>
                      <v-btn
                        icon
                        @click.native="showDateSettings = !showDateSettings">
                        <v-icon>{{ showDateSettings ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                      <v-container
                        grid-list-xl
                        v-show="showDateSettings">
                        <v-layout
                          :class="`${$vuetify.breakpoint.mdAndUp ? 'row' : 'column'}`"
                          wrap>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Color"
                              :items="fontColors"
                              v-model="dateColor">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :color="data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Size"
                              :items="fontSizes"
                              v-model="dateSize">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  class="chip--select-multi"
                                  :style="'font-size: ' + data.item.toLowerCase()"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Weight"
                              :items="fontWeights"
                              v-model="dateWeight">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-weight: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Style"
                              :items="fontStyles"
                              v-model="dateStyle">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-style: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-slide-y-transition>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="my-1">
                    <v-card-actions class="py-0">
                      <v-flex>
                        <v-menu
                          full-width
                          ref="tMenu"
                          lazy
                          :close-on-content-click="false"
                          v-model="timeMenu"
                          transition="slide-y-transition"
                          offset-y
                          :nudge-right="40"
                          max-width="290px"
                          min-width="290px">
                          <v-text-field
                            slot="activator"
                            label="Time of Event"
                            v-model="formattedTime"
                            prepend-icon="access_time"
                            readonly/>
                          <v-time-picker
                            v-model="time"
                            :allowed-minutes="(minute) => (minute % 5) === 0" />
                        </v-menu>
                      </v-flex>
                      <v-btn
                        icon
                        @click.native="showTimeSettings = !showTimeSettings">
                        <v-icon>{{ showTimeSettings ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                      <v-container
                        grid-list-xl
                        v-show="showTimeSettings">
                        <v-layout
                          :class="`${$vuetify.breakpoint.mdAndUp ? 'row' : 'column'}`"
                          wrap>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Color"
                              :items="fontColors"
                              v-model="timeColor">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :color="data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Size"
                              :items="fontSizes"
                              v-model="timeSize">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  class="chip--select-multi"
                                  :style="'font-size: ' + data.item.toLowerCase()"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Weight"
                              :items="fontWeights"
                              v-model="timeWeight">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-weight: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Style"
                              :items="fontStyles"
                              v-model="timeStyle">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-style: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-slide-y-transition>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="my-1">
                    <v-card-actions class="py-0">
                      <v-text-field
                        textarea
                        label="Description"
                        v-model="desc"
                        :rules="descriptionRules"
                        :counter="140"
                        required/>
                      <v-btn
                        icon
                        @click.native="showDescSettings = !showDescSettings">
                        <v-icon>{{ showDescSettings ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                      <v-container
                        grid-list-xl
                        v-show="showDescSettings">
                        <v-layout
                          :class="`${$vuetify.breakpoint.mdAndUp ? 'row' : 'column'}`"
                          wrap>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Color"
                              :items="fontColors"
                              v-model="descColor">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :color="data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Size"
                              :items="fontSizes"
                              v-model="descSize">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  class="chip--select-multi"
                                  :style="'font-size: ' + data.item.toLowerCase()"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Weight"
                              :items="fontWeights"
                              v-model="descWeight">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-weight: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Font Style"
                              :items="fontStyles"
                              v-model="descStyle">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  :style="'font-style: ' + data.item.toLowerCase()"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-slide-y-transition>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="my-1">
                    <v-card-actions class="py-0">
                      <h3 class="headline grey--text">Slide Settings</h3>
                      <v-btn
                        icon
                        @click.native="showSlideSettings = !showSlideSettings">
                        <v-icon>{{ showSlideSettings ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                      <v-container
                        grid-list-xl
                        v-show="showSlideSettings">
                        <v-layout
                          :class="`${$vuetify.breakpoint.mdAndUp ? 'row' : 'column'}`"
                          wrap>
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Duration"
                              :items="durations"
                              v-model="timeout">
                              <template
                                slot="selection"
                                slot-scope="data">
                                <v-chip
                                  @input="data.parent.selectItem(data.item)"
                                  :selected="data.selected"
                                  class="chip--select-multi"
                                  :key="JSON.stringify(data.item)">
                                  {{ data.item.text }}
                                </v-chip>
                              </template>
                            </v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-slide-y-transition>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex
              xs4
              :class="`${$vuetify.breakpoint.smAndDown ? '' : 'ml-4'}`">
              <ImageCards
                :images="images"
                @imageSelected="uploadImage"
                @deleteImage="deleteImage" />
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
          @click="submit"
          :disabled="!valid">submit</v-btn>
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
  data: () => {
    return {
      showTitleSettings: false,
      showDateSettings: false,
      showTimeSettings: false,
      showDescSettings: false,
      showSlideSettings: false,
      valid: true,
      showPreview: false,
      carousel: -1,
      dateMenu: false,
      timeMenu: false,
      descriptionRules: [
        v => !!v || 'Description is required',
        v =>
          (v && v.length && v.length <= 140) ||
          'Description must be less than 140 characters'
      ],
      titleRules: [
        v => !!v || 'Title is required',
        v =>
          (v && v.length && v.length <= 30) ||
          'Title must be less than 30 characters'
      ],
      fontColors: [
        'Blue',
        'Red',
        'Green',
        'Yellow',
        'Purple',
        'Pink',
        'Teal',
        'Lime',
        'Orange',
        'Brown',
        'Grey'
      ],
      fontSizes: [
        'XX-Small',
        'X-Small',
        'Smaller',
        'Small',
        'Medium',
        'Large',
        'Larger',
        'X-Large',
        'XX-Large'
      ],
      fontStyles: [
        'Italic',
        'Normal',
        'Oblique'
      ],
      fontWeights: [
        'Lighter',
        'Normal',
        'Bold',
        'Bolder'
      ],
      durations: [
        { text: '10 seconds', value: 10 },
        { text: '20 seconds', value: 20 },
        { text: '30 seconds', value: 30 },
        { text: '40 seconds', value: 40 },
        { text: '50 seconds', value: 50 },
        { text: '60 seconds', value: 60 },
        { text: '70 seconds', value: 70 },
        { text: '80 seconds', value: 80 }]
    }
  },
  computed: {
    slide: {
      get () {
        return this.$store.getters.currentSlide
      }
    },
    title: {
      get () {
        return this.$store.getters.currentSlideTitleContent
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TITLE_CONTENT, value)
      }
    },
    titleColor: {
      get () {
        return this.$store.getters.currentSlideTitleColor
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TITLE_FONT_COLOR, value)
      }
    },
    titleStyle: {
      get () {
        return this.$store.getters.currentSlideTitleStyle
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TITLE_FONT_STYLE, value)
      }
    },
    titleSize: {
      get () {
        return this.$store.getters.currentSlideTitleSize
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TITLE_FONT_SIZE, value)
      }
    },
    titleWeight: {
      get () {
        return this.$store.getters.currentSlideTitleWeight
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TITLE_FONT_WEIGHT, value)
      }
    },
    desc: {
      get () {
        return this.$store.getters.currentSlideDescriptionContent
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DESCRIPTION_CONTENT, value)
      }
    },
    descColor: {
      get () {
        return this.$store.getters.currentSlideDescriptionColor
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DESCRIPTION_FONT_COLOR, value)
      }
    },
    descStyle: {
      get () {
        return this.$store.getters.currentSlideDescriptionStyle
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DESCRIPTION_FONT_STYLE, value)
      }
    },
    descSize: {
      get () {
        return this.$store.getters.currentSlideDescriptionSize
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DESCRIPTION_FONT_SIZE, value)
      }
    },
    descWeight: {
      get () {
        return this.$store.getters.currentSlideDescriptionWeight
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DESCRIPTION_FONT_WEIGHT, value)
      }
    },
    date: {
      get () {
        return this.$store.getters.currentSlideDateContent
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DATE_CONTENT, value)
      }
    },
    dateColor: {
      get () {
        return this.$store.getters.currentSlideDateColor
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DATE_FONT_COLOR, value)
      }
    },
    dateStyle: {
      get () {
        return this.$store.getters.currentSlideDateStyle
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DATE_FONT_STYLE, value)
      }
    },
    dateSize: {
      get () {
        return this.$store.getters.currentSlideDateSize
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DATE_FONT_SIZE, value)
      }
    },
    dateWeight: {
      get () {
        return this.$store.getters.currentSlideDateWeight
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_DATE_FONT_WEIGHT, value)
      }
    },
    time: {
      get () {
        return this.$store.getters.currentSlideTimeContent
      },
      set (value) {
        let timeFrags = value.split(':')
        let someDate = new Date(Date.now())
        someDate.setHours(timeFrags[0])
        someDate.setMinutes(timeFrags[1])
        this.$store.commit(CURRENT_SLIDE.SET_TIME_CONTENT, someDate)
      }
    },
    timeColor: {
      get () {
        return this.$store.getters.currentSlideTimeColor
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TIME_FONT_COLOR, value)
      }
    },
    timeStyle: {
      get () {
        return this.$store.getters.currentSlideTimeStyle
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TIME_FONT_STYLE, value)
      }
    },
    timeSize: {
      get () {
        return this.$store.getters.currentSlideTimeSize
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TIME_FONT_SIZE, value)
      }
    },
    timeWeight: {
      get () {
        return this.$store.getters.currentSlideTimeWeight
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TIME_FONT_WEIGHT, value)
      }
    },
    images: {
      get () {
        return this.$store.getters.currentSlideImages
      }
    },
    timeout: {
      get () {
        return this.$store.getters.currentSlideTimeout
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TIMEOUT, value)
      }
    },
    template: {
      get () {
        return this.$store.getters.currentSlideTemplate
      },
      set (value) {
        this.$store.commit(CURRENT_SLIDE.SET_TEMPLATE, value)
      }
    },
    formattedTime () {
      if (this.time) {
        return moment(this.time).format('hh:mm A')
      }
      return null
    },
    formattedDate () {
      if (this.date) {
        return moment(this.date).format('dddd, MMMM D')
      }
      return null
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.forceUpdateCarousel()
        this.$store.dispatch('saveSlide')
        this.changeViews()
      }
    },
    clear () {
      // reset all of the data fields
      this.images.map((image) => {
        this.$store.dispatch('deleteImage', image._id)
      })
      this.$store.commit(CURRENT_SLIDE.CLEAR)
      this.$refs.form.reset()
      this.forceUpdateCarousel()
    },
    forceUpdateCarousel () {
      this.$nextTick(() => (this.carousel = this.showPreview ? 0 : -1))
    },
    uploadImage (files) {
      const filteredFiles = [...files].filter(
        file => file.type.indexOf('image/') !== -1
      )
      filteredFiles.map(file =>
        this.$store.dispatch('uploadImage', file).then(
          function (data) {
            this.addImage(data)
          }.bind(this)
        )
      )
    },
    addImage (newImage) {
      this.$store.commit(CURRENT_SLIDE.ADD_IMAGE, newImage)
      this.forceUpdateCarousel()
    },
    deleteImage (image) {
      this.$store
        .dispatch('deleteImage', image._id)
        .then(() => this.$store.commit(CURRENT_SLIDE.DELETE_IMAGE, image))
    },
    changeViews () {
      this.showPreview = !this.showPreview
      this.forceUpdateCarousel()
    }
  }
}
</script>
