<template>
  <v-container>
    <div>

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
          <td class="text-xs-left">
            {{ props.item.role }}
          </td>
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
  data () {
    return {
      e1: null,
      roleList: ['Admin', 'Staff'],
      dialog: false,
      headers: [
        {
          text: 'Username',
          align: 'left',
          sortable: false,
          value: 'username'
        },
        { text: 'Password', value: 'password' },
        { text: 'Role', value: 'role' },
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
    }
  },

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
