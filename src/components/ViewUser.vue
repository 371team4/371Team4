<template>
  <v-container>
    <div>
      <!-- Add a new user -->
      <v-dialog
        v-model="dialog"
        max-width="500px">
        <v-btn
          color="primary"
          dark
          slot="activator"
          class="mb-2">New User</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Username"
                    v-model="editedItem.username"/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Password"
                    v-model="editedItem.password"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="blue darken-1"
              flat
              @click.native="close">Cancel</v-btn>
            <v-btn
              color="blue darken-1"
              flat
              @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Done add a new user -->

      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >
        <template
          slot="items"
          slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.calories }}</td>
          <td class="text-xs-left">{{ props.item.fat }}</td>
          <td class="text-xs-left">{{ props.item.carbs }}</td>
          <td class="text-xs-left">{{ props.item.protein }}</td>
          <td class="justify-left layout px-0">
            <v-btn
              icon
              class="mx-0"
              @click="editItem(props.item)">
              <v-icon color="blue lighten-2">edit</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-0"
              @click="saveItem(props.item)">
              <v-icon color="green lighten-1">save</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-0"
              @click="deleteItem(props.item)">
              <v-icon color="red lighten-2">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn
            color="primary"
            @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Username',
        align: 'left',
        sortable: false,
        value: 'username'
      },
      { text: 'Password', value: 'password' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.items = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
