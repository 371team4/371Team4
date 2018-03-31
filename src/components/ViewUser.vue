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
          <td>{{ props.item.username }}</td>
          <td class="text-xs-left">{{ props.item.password }}</td>
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
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      username: '',
      password: ''
    },
    defaultItem: {
      username: '',
      password: ''
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
          username: 'Yggep',
          password: 'olympus'
        },
        {
          username: 'Duomham',
          password: 'kool'
        },
        {
          username: 'Kire',
          password: 'physics'
        },
        {
          username: 'Yma',
          password: 'helloworld'
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

    saveItem (item) {
      console.log('Button was clicked!')
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
