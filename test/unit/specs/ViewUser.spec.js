import Vue from 'vue'
import ViewUser from '@/components/ViewUser'

describe('ViewUser.vue', function () {
  let vm, Constructor

  before(function () {
    Constructor = Vue.extend(ViewUser)
  })

  describe('Contents of the View User front end should be set correctly', function () {
    before(function () {
      vm = new Constructor().$mount()
    })
  })
  console.log(vm)
})
