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
                        required
                        validate-on-blur/>
                      <v-btn
                        icon
                        @click.native="showTitleSettings = !showTitleSettings">
                        <v-icon>{{ showTitleSettings ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
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
                        <v-subheader>Date(s) of Event</v-subheader>
                        <v-date-picker
                          v-model="slideDate"
                          no-title
                          event-color="green lighten-1"
                          :min="minimumDate"
                          :events="date"/>
                          <!-- <v-menu
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
                            readonly
                            validate-on-blur/>
                          <v-date-picker
                            v-model="date"
                            no-title/>
                        </v-menu>-->
                      </v-flex>
                      <v-btn
                        icon
                        @click.native="showDateSettings = !showDateSettings">
                        <v-icon>{{ showDateSettings ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
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
                            readonly
                            validate-on-blur/>
                          <v-time-picker
                            v-model="time"
                            :allowed-minutes="(minute) => (minute % 5) === 0"
                            @change="$refs.tMenu.save(time)"/>
                        </v-menu>
                      </v-flex>
                      <v-btn
                        icon
                        @click.native="showTimeSettings = !showTimeSettings">
                        <v-icon>{{ showTimeSettings ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
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
                        required
                        validate-on-blur/>
                      <v-btn
                        icon
                        @click.native="showDescSettings = !showDescSettings">
                        <v-icon>{{ showDescSettings ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
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
                        <v-icon>{{ showSlideSettings ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
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
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <v-select
                              chips
                              label="Duration"
                              :items="templates"
                              v-model="template">
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
                          <v-flex
                            xs6
                            md6
                            lg6>
                            <!-- <v-list subheader>-->
                            <v-subheader>Days on Display</v-subheader>
                            <v-date-picker
                              v-model="dateOnDisplay"
                              no-title
                              event-color="green lighten-1"
                              :min="minimumDate"
                              :events="datesOnDisplay"/>
                              <!--<v-list-tile
                                v-for="(date, index) in datesOnDisplay"
                                :key="index"
                                @click="() => {}">
                                <v-list-tile-content>
                                  <v-list-tile-title> {{ formatDate(date) }}</v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-action @click="deleteDateOnDisplay(date)">
                                  <v-icon color="red">delete</v-icon>
                                </v-list-tile-action>
                              </v-list-tile>
                            </v-list>-->
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
              <v-card>
                <v-container
                  fluid
                  grid-list-md>
                  <v-layout
                    row
                    wrap>
                    <v-flex
                      md6
                      sm4
                      xs12
                      v-for="(image, index) in images"
                      :key="index">
                      <v-card
                        flat
                        tile>
                        <v-card-media
                          :src="'http://cmpt371g4.usask.ca:8081' + image.path"
                          height="150px"/>
                        <!-- shift the fab to the top left corner -->
                        <v-btn
                          class="px-0 py-0 mx-0 mt-4"
                          style="margin-right: -10px !important;"
                          fab
                          small
                          absolute
                          top
                          right
                          color="red lighten-1"
                          @click.stop="deleteImage(image)">
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-card>
                    </v-flex>
                    <v-flex
                      md6
                      sm4
                      xs12>
                      <!-- Add button for the images-->
                      <v-card
                        flat
                        tile
                        :class="`${$vuetify.breakpoint.xs ? 'ml-5' : ''}`">
                        <v-btn
                          fab
                          big
                          color="blue"
                          class="my-5 mx-5"
                          @click.stop="$refs.uploadButton.click()">
                          <!-- click the upload button below -->
                          <v-icon>add</v-icon>
                        </v-btn>
                        <input
                          ref="uploadButton"
                          accept="image/*"
                          type="file"
                          multiple
                          v-if="uploading"
                          v-show="false"
                          @change="uploadImage($event.target.files)">
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
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

import * as MUTATIONS from '@/store/mutation-types'

export default {
  components: { DefaultSlideTemplate },
  data: () => {
    return {
      showTitleSettings: false,
      showDateSettings: false,
      showTimeSettings: false,
      showDescSettings: false,
      showSlideSettings: false,
      uploading: true,
      valid: true,
      showPreview: false,
      carousel: -1,
      dateMenu: false,
      timeMenu: false,
      datesOnDisplayMenu: false,
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
        { text: '80 seconds', value: 80 }],
      templates: [
        { text: 'Default Template', value: 'DefaultSlideTemplate' }
      ]
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
        this.$store.commit(MUTATIONS.SET_TITLE_CONTENT, value)
      }
    },
    titleColor: {
      get () {
        return this.$store.getters.currentSlideTitleColor
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TITLE_FONT_COLOR, value)
      }
    },
    titleStyle: {
      get () {
        return this.$store.getters.currentSlideTitleStyle
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TITLE_FONT_STYLE, value)
      }
    },
    titleSize: {
      get () {
        return this.$store.getters.currentSlideTitleSize
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TITLE_FONT_SIZE, value)
      }
    },
    titleWeight: {
      get () {
        return this.$store.getters.currentSlideTitleWeight
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TITLE_FONT_WEIGHT, value)
      }
    },
    desc: {
      get () {
        return this.$store.getters.currentSlideDescriptionContent
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DESCRIPTION_CONTENT, value)
      }
    },
    descColor: {
      get () {
        return this.$store.getters.currentSlideDescriptionColor
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DESCRIPTION_FONT_COLOR, value)
      }
    },
    descStyle: {
      get () {
        return this.$store.getters.currentSlideDescriptionStyle
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DESCRIPTION_FONT_STYLE, value)
      }
    },
    descSize: {
      get () {
        return this.$store.getters.currentSlideDescriptionSize
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DESCRIPTION_FONT_SIZE, value)
      }
    },
    descWeight: {
      get () {
        return this.$store.getters.currentSlideDescriptionWeight
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DESCRIPTION_FONT_WEIGHT, value)
      }
    },
    date: {
      get () {
        return this.$store.getters.currentSlideDateContent
      }
    },
    slideDate: {
      get () {
        return null
      },
      set (val) {
        let index = this.date.indexOf(val)
        if (index === -1) {
          this.$store.commit(MUTATIONS.ADD_DATE, val)
        } else {
          this.$store.commit(MUTATIONS.DELETE_DATE, index)
        }
      }
    },
    dateColor: {
      get () {
        return this.$store.getters.currentSlideDateColor
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DATE_FONT_COLOR, value)
      }
    },
    dateStyle: {
      get () {
        return this.$store.getters.currentSlideDateStyle
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DATE_FONT_STYLE, value)
      }
    },
    dateSize: {
      get () {
        return this.$store.getters.currentSlideDateSize
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DATE_FONT_SIZE, value)
      }
    },
    dateWeight: {
      get () {
        return this.$store.getters.currentSlideDateWeight
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_DATE_FONT_WEIGHT, value)
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
        this.$store.commit(MUTATIONS.SET_TIME_CONTENT, someDate)
      }
    },
    timeColor: {
      get () {
        return this.$store.getters.currentSlideTimeColor
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TIME_FONT_COLOR, value)
      }
    },
    timeStyle: {
      get () {
        return this.$store.getters.currentSlideTimeStyle
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TIME_FONT_STYLE, value)
      }
    },
    timeSize: {
      get () {
        return this.$store.getters.currentSlideTimeSize
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TIME_FONT_SIZE, value)
      }
    },
    timeWeight: {
      get () {
        return this.$store.getters.currentSlideTimeWeight
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TIME_FONT_WEIGHT, value)
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
        this.$store.commit(MUTATIONS.SET_TIMEOUT, value)
      }
    },
    template: {
      get () {
        if (this.$store.getters.currentSlideTemplate) {
          return this.$store.getters.currentSlideTemplate
        } else {
          return this.templates[0]
        }
      },
      set (value) {
        this.$store.commit(MUTATIONS.SET_TEMPLATE, value)
      }
    },
    datesOnDisplay: {
      get () {
        return this.$store.getters.currentSlideDatesOnDisplay
      }
    },
    formattedTime: {
      get () {
        if (this.time) {
          return moment(this.time).format('hh:mm A')
        }
        return null
      },
      set (val) {
        /* nothing to do here */
      }
    },
    formattedDate: {
      get () {
        if (this.date) {
          return moment(this.date).format('dddd, MMMM D')
        }
        return null
      },
      set (val) {
        /* nothing to do here */
      }
    },
    dateOnDisplay: {
      get () {
        return null
      },
      set (val) {
        let index = this.datesOnDisplay.indexOf(val)
        if (index === -1) {
          this.$store.commit(MUTATIONS.ADD_DATE_ON_DISPLAY, val)
        } else {
          this.$store.commit(MUTATIONS.DELETE_DATE_ON_DISPLAY, index)
        }
      }
    },
    minimumDate () {
      return moment().format('YYYY-MM-DD')
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
      this.$store.commit(MUTATIONS.CLEAR_CURRENT_SLIDE)
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
      this.uploading = false
      this.$nextTick(() => { this.uploading = true })
    },
    addImage (newImage) {
      this.$store.commit(MUTATIONS.ADD_IMAGE, newImage)
      this.forceUpdateCarousel()
    },
    deleteImage (image) {
      this.$store
        .dispatch('deleteImage', image._id)
        .then(() => this.$store.commit(MUTATIONS.DELETE_IMAGE, image))
    },
    changeViews () {
      this.showPreview = !this.showPreview
      this.forceUpdateCarousel()
    },
    formatDate (dateStr) {
      return moment(dateStr).format('dddd, MMMM D')
    }
  }
}
</script>
