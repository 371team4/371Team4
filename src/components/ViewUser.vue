<template>
  <v-container>
    <div>

      <!-- Edit Password -->
      <v-dialog
        v-model="dialog"
        max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Password</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="New Password"
            />
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

      <v-card>
        <v-card-title>
          <h2 class="headline">All Users</h2>
        </v-card-title>
      </v-card>

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

          <td class="text-xs-left">
            <v-btn
              small
              @click.native="editItem(props.item)"
              color="blue-grey"
              class="white--text"
            >
              Update Password
              <v-icon
                right
                dark>edit
              </v-icon>
            </v-btn>
            <!-- {{ props.item.password }} -->
          </td>
          <td class="text-xs-left">

            <v-flex
              xs6
              sm6
              md6
              lg6>
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
            </v-flex>

          </td>
          <td class="justify-left layout px-0">
            <v-btn
              icon
              class="mx-0"
              @click="saveItem(props.item)">
              <v-icon color="blue lighten-1">save</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mx-0"
              @click="deleteItem(props.item)">
              <v-icon color="red lighten-2">delete</v-icon>
            </v-btn>
          </td>
          <!-- Done Edit Password -->
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      roleList: ['Admin', 'Staff'],
      dialog: false,
      headers: [
        {
          text: 'Username',
          align: 'left',
          sortable: false,
          value: 'username'
        },
        { text: 'Password', value: 'password', sortable: false },
        { text: 'Role', value: 'role', sortable: false },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      items: [
        {
          username: 'Yggep',
          password: 'olympus',
          role: 'Admin'
        },
        {
          username: 'Duomham',
          password: 'kool',
          role: 'Admin'
        },
        {
          username: 'Kire',
          password: 'physics',
          role: 'Admin'
        },
        {
          username: 'Yma',
          password: 'helloworld',
          role: 'Staff'
        }
      ],
      editedIndex: -1,
      editedItem: {
        username: '',
        password: ''
      },
      defaultItem: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      console.log(this.editedIndex, this.editedItem)
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    },

    saveItem (item) {
      console.log(item)
      console.log('Button was clicked!')
    },

    /* methods for the alert dialog of changing the password */
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
