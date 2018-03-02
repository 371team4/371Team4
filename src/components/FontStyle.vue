<template>
  <v-container grid-list-xl>
    <v-layout
      v-bind="binding"
      wrap>
      <v-flex
        xs12
        md6
        lg3>
        <v-select
          chips
          label="Color"
          :items="fontColors"
          v-model="fontColor">
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
        xs12
        md6
        lg3>
        <v-select
          chips
          label="Font Size"
          :items="fontSizes"
          v-model="fontSize">
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
        xs12
        md6
        lg3>
        <v-select
          chips
          label="Font Weight"
          :items="fontWeights"
          v-model="fontWeight">
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
        xs12
        md6
        lg3>
        <v-select
          chips
          label="Font Style"
          :items="fontStyles"
          v-model="fontStyle">
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
</template>

<script>
export default {
  props: {
    fontColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    },
    fontWeight: {
      type: String,
      default: ''
    },
    fontStyle: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
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
        'Grey',
        'Black'
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
      ]
    }
  },
  computed: {
    binding () {
      // shift images under the form on small screens
      const binding = {}
      if (!this.$vuetify.breakpoint.mdAndUp) {
        binding.column = true
      } else {
        binding.row = true
      }
      return binding
    }
  }
}
</script>
