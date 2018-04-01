import Vue from 'vue'
import { store } from '@/store'
import * as MUTATIONS from '@/store/mutation-types'

let newSlide = {
  images: [],
  title: {
    content: 'SlideAPIUnitTestforDeleteSlide',
    fontColor: 'Blue',
    fontSize: 'Large',
    fontStyle: 'Normal',
    fontWeight: 'Bold'
  },
  description: {
    content: 'This is just for Slide API deleteSlide unit test, it should be deleted',
    fontColor: 'Blue',
    fontSize: 'Large',
    fontStyle: 'Normal',
    fontWeight: 'Bold'
  },
  date: {
    content: '2018-03-23',
    fontColor: 'Red',
    fontSize: 'Large',
    fontStyle: 'Normal',
    fontWeight: 'Bold'
  },
  time: {
    content: '12:40',
    fontColor: 'Red',
    fontSize: 'Large',
    fontStyle: 'Normal',
    fontWeight: 'Bold'
  },
  meta: {
    template: 'DefaultSlideTemplate',
    timeout: '40',
    repeatable: false,
    startDate: '2018-03-21',
    endDate: '2018-03-30'
  }
}

const Constructor = Vue.extend()
const vm = new Constructor({ store }).$mount()

function waitFor (func, timeout) {
  setTimeout(() => func(), timeout)
}

describe('index', function () {
  this.timeout(15000)
  before('Setup before slide tests', function (done) {
    vm.$store.dispatch('signIn', { username: 'test', password: 'admin001' })
    vm.$store.dispatch('retrieveAllSlides')
    waitFor(done, 1000)
  })

  it('should getAllSLides', done => {
    vm.$store.dispatch('retrieveAllSlides')
    waitFor(() => {
      expect(vm.$store.getters.getAllSlides).to.not.deep.equal([])
      done()
    }, 1000)
  })

  it('should saveSlide when it is new', done => {
    const ogSlide = vm.$store.getters.getAllSlides[0]
    newSlide.images = [ogSlide.images[0]._id]
    vm.$store.commit(MUTATIONS.SET, newSlide)
    vm.$store.dispatch('saveSlide')
    waitFor(() => {
      newSlide._id = ''
      newSlide.createdAt = ''
      newSlide.__v = ''
      expect(vm.$store.getters.getCurrentSlide).to.have.all.keys(...Object.keys(newSlide))
      done()
    }, 1000)
  })

  it('should saveSlide when it is not new', done => {
    const ogSlide = vm.$store.getters.getAllSlides[0]
    vm.$store.dispatch('getSlide', ogSlide._id)
    waitFor(() => {
      vm.$store.commit(MUTATIONS.SET_TITLE_CONTENT, 'updatedSlide')
      vm.$store.commit(MUTATIONS.SET_IMAGE, [])
      vm.$store.dispatch('saveSlide')
      waitFor(() => {
        ogSlide.title.content = 'updatedSlide'
        ogSlide.images = []
        expect(vm.$store.getters.getCurrentSlide.title.content).to.deep.equal(ogSlide.title.content)
        expect(vm.$store.getters.getCurrentSlide.images).to.deep.equal(ogSlide.images)
        done()
      }, 1000)
    }, 1000)
  })

  it('should getSlide', done => {
    const slide = vm.$store.getters.getAllSlides[0]
    vm.$store.dispatch('getSlide', slide._id)
    waitFor(() => {
      expect(vm.$store.getters.getCurrentSlide).to.deep.equal(slide)
      done()
    }, 1000)
  })

  it('should deleteSlide', done => {
    const slide = vm.$store.getters.getAllSlides[0]
    vm.$store.dispatch('deleteSlide', slide._id)
    waitFor(() => {
      expect(vm.$store.getters.getCurrentSlide).to.not.deep.equal(slide)
      done()
    }, 1000)
  })
})
