<template>
  <form>
    <h3>Add New Page</h3>
    <div>
      <label>Name</label>
      <div>
        <input
          type="text"
          v-model="newEvent.name" >
      </div>
    </div>

    <div>
      <label for="">Description</label>
      <div>
        <textarea
        v-model="newEvent.description"/>
      </div>
    </div>

    <div>
      <label>Image 1 Link</label>
      <div>
        <input
          type="text"
          v-model="newEvent.image1" >
      </div>
    </div>

    <div>
      <label>Image 2 Link</label>
      <div>
        <input
          type="text"
          v-model="newEvent.image2" >
      </div>
    </div>

    <div>
      <label for="">Image 3 Link</label>
      <div >
        <input
          type="text"
          v-model="newEvent.image3" >
      </div>
    </div>

    <div>
      <button
      @click.prevent="addMenuItem">Add</button>
    </div>
  </form>
</template>

<script>
import { eventsDB } from '../services/firebase.conf'
export default {
  data () {
    return {
      newEvent: {
        name: 'Eg. Happy New Year',
        description: 'Eg. Happy New year for 2019',
        image1: '../assets/2019_1.jpg',
        image2: '../assets/2019_2.jpg',
        image3: '../assets/2019_3.jpg'
      }
    }
  },
  methods: {
    addMenuItem: function () {
      eventsDB.push(this.newEvent)
    }
  }
}
</script>
