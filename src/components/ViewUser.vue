<template>
  <v-container>
    <div>
      <v-dialog
        v-model="dialog"
        max-width="500px">
        <v-btn
          color="primary"
          dark
          slot="activator"
          class="mb-2">New Item</v-btn>
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
                    label="Dessert name"
                    v-model="editedItem.name"/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Calories"
                    v-model="editedItem.calories"/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Fat (g)"
                    v-model="editedItem.fat"/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Carbs (g)"
                    v-model="editedItem.carbs"/>
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4>
                  <v-text-field
                    label="Protein (g)"
                    v-model="editedItem.protein"/>
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
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="justify-center layout px-0">
            <v-btn
              icon
              class="mx-0"
              @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
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

</script>
