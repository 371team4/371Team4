<template>
  <v-container fluid>
    <div>
      <v-dialog
        v-model="dialog"
        max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Password</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex
                  xs12
                  sm12
                  lg12
                  md12>
                  <v-text-field
                    label="Password"
                    :type="'password'"
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

          <td class="text-xs-left">
            <!-- {{ props.item.password }} -->
            <v-btn
              class="mx-0"
              @click="editItem(props.item)"
              color="blue-grey"
              small
              dark
            > Edit Password
              <v-icon
                right
                dark>edit
              </v-icon>
            </v-btn>
          </td>
          <td class="text-xs-left">

            <v-select
              auto
              hide-details
              v-model="props.item.role"
              :items="roleList"
              label="Select"
              single-line
              prepend-icon="people">
              {{ props.item.role }}
            </v-select>

          </td>
          <td class="justify-center layout px-0">
            <!-- <v-btn
              icon
              class="mx-0"
              @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn> -->
            <v-btn
              icon
              class="mx-0"
              @click="saveItem(props.item)">
              <v-icon color="blue">save</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-0"
              @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
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
    roleList: ['Admin', 'Staff'],
    dialog: false,
    headers: [
      {
        text: 'Username',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Password', value: 'password', sortable: false },
      { text: 'Role', value: 'role', sortable: false },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      password: '',
      role: ''
    },
    defaultItem: {
      name: '',
      password: '',
      role: ''
    },
    dale: 'password'
  }),

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
          name: ' Yma',
          password: 'hello',
          role: 'Staff'
        },
        {
          name: 'Doumham',
          password: 'kool',
          role: 'Admin'
        },
        {
          name: 'Yggep',
          password: 'olympus',
          role: 'Admin'
        },
        {
          name: 'Il',
          password: 'cmpt',
          role: 'Staff'
        },
        {
          name: 'Kire',
          password: 'physics',
          role: 'Admin'
        }
      ]
    },

    saveItem (item) {
      console.log('Button was pressed')
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
