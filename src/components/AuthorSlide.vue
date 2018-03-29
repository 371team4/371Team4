<template>
  <form>
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
                      v-model.lazy="slide.date.content"
                      prepend-icon="event"
                      readonly/>
                    <v-date-picker
                      v-model="slide.date.content"
                      no-title
                      scrollable/>
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
                      v-model="formattedTime"
                      prepend-icon="access_time"
                      readonly/>
                    <v-time-picker
                      v-model="slide.time.content"
                      :allowed-minutes="allowedMinutes"
                      @change="$refs.tMenu.save(slide.time.content)"/>
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
          class="ml-4">
          <ImageCards
            :cards="slide.images"
            @imageSelected="imageSelected"
            @deleteImage="deleteImage"/>
        </v-flex>
      </v-layout>
    </v-container>
  </form>
</template>

<script>
import FontStyle from '@/components/FontStyle'
import ImageCards from '@/components/ImageCards'

export default {
  components: { ImageCards, FontStyle },
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
      dateMenu: false,
      timeMenu: false,
      descriptionRules: [
        v => !!v || 'Description is required',
        v => v.length <= 140 || 'Description must be less than 140 characters'
      ],
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 30 || 'Title must be less than 30 characters'
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
        const timeFrags = this.slide.time.content.split(':')
        const timeFormatted = (timeFrags[0] > 12 ? timeFrags[0] - 12 : timeFrags[0]) + ':' + timeFrags[1] + (timeFrags[0] >= 12 ? ' PM' : ' AM')
        return timeFormatted
      }
      return null
    }
  },
  methods: {
    allowedMinutes (minute) {
      return (minute % 5) === 0
    },
    imageSelected (e) {
      this.$emit('imageSelected', e)
    },
    deleteImage (e) {
      this.$emit('deleteImage', e)
    },
    propValue (e, eventName, parentObj) {
      debugger
      this.slide[parentObj]['content'] = e.value
      this.$emit(eventName)
    }
  }
}
</script>
