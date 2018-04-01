import Vue from 'vue'
import Calendar from '@/components/Calendar'
import Vuex from 'vuex'
import slides from '@/store/modules/slide'

describe('Calendar.vue', function () {
  let Constructor, vm

  before(function () {
    Vue.use(Vuex)
    Constructor = Vue.extend(Calendar)
  })

  describe('Test data', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('should have correct data', function () {
      const config = vm.$data.config
      expect(config.editable).to.equal(false)
      expect(config.selectable).to.equal(false)
      expect(config.defaultView).to.equal('month')
      expect(config.height).to.equal('auto')
      expect(config.contentHeight).to.equal('auto')
    })

    it('should have correct header', function () {
      const config = vm.$data.config
      expect(config.header.left).to.equal('prev,next')
      expect(config.header.center).to.equal('title')
      expect(config.header.right).to.equal('')
    })
  })

  describe('Test events property', function () {
    let mockSlides
    before(function () {
      const store = new Vuex.Store(slides)
      vm = new Constructor({ store }).$mount()

      mockSlides = [
        {
          title: {
            content: 'Slide1',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          description: {
            content: 'This is the description for Slide1',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          date: {
            content: '2018-02-15',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          time: {
            content: '03:45',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          }
        },
        {
          title: {
            content: 'Slide2 with a longer title',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          description: {
            content: 'This is the description for Slide2, with some additional text at the end',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          date: {
            content: '2018-02-01',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          time: {
            content: '09:55',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          }
        },
        {
          title: {
            content: 'The Last One',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          description: {
            content: 'This is the description for Slide3',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          date: {
            content: '2018-08-05',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          time: {
            content: '10:05',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          }
        }
      ]
    })

    afterEach(function () {
      vm.$store.allSlides = []
    })

    it('should have no slides', function (done) {
      Vue.nextTick(() => {
        expect(vm.events.length).to.equal(0)
        done()
      })
    })

    it('should have correct titles', function (done) {
      vm.$store.state.allSlides = mockSlides

      Vue.nextTick(() => {
        vm.events.forEach((event, i) => {
          expect(event.title).to.equal(mockSlides[i].title.content)
        })
        done()
      })
    })

    it('should have correct start date & time', function (done) {
      vm.$store.state.allSlides = mockSlides

      Vue.nextTick(() => {
        expect(vm.events.length).to.equal(3)
        expect(vm.events[0].start.toString()).to.equal('Thu Feb 15 2018 03:45:00 GMT-0600')
        expect(vm.events[1].start.toString()).to.equal('Thu Feb 01 2018 09:55:00 GMT-0600')
        expect(vm.events[2].start.toString()).to.equal('Sun Aug 05 2018 10:05:00 GMT-0600')
        done()
      })
    })

    it('should have correct descriptions', function (done) {
      vm.$store.state.allSlides = mockSlides

      Vue.nextTick(() => {
        vm.events.forEach((event, i) => {
          expect(event.description).to.equal(mockSlides[i].description.content)
        })
        done()
      })
    })

    it('should have no description given no description', function (done) {
      vm.$store.state.allSlides = [{
        title: {
          content: 'The Last One'
        },
        date: {
          content: '2018-02-15'
        }
      }]

      Vue.nextTick(() => {
        expect(vm.events.length).to.equal(1)
        expect(vm.events[0].description).to.equal(undefined)
        done()
      })
    })

    it('should have no description given no description content', function (done) {
      vm.$store.state.allSlides = [{
        title: {
          content: 'The Last One'
        },
        date: {
          content: '2018-02-15'
        },
        description: {
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        }
      }]

      Vue.nextTick(() => {
        expect(vm.events.length).to.equal(1)
        expect(vm.events[0].description).to.equal(undefined)
        done()
      })
    })

    it('should have correct start given no time', function (done) {
      let mockSlide = {
        title: {
          content: 'The Last One'
        },
        date: {
          content: '2018-02-15'
        }
      }

      vm.$store.state.allSlides = [mockSlide]

      Vue.nextTick(() => {
        expect(vm.events.length).to.equal(1)
        expect(vm.events[0].start).to.equal(mockSlide.date.content)
        done()
      })
    })

    it('should have correct start given no time content', function (done) {
      let mockSlide = {
        title: {
          content: 'The Last One'
        },
        date: {
          content: '2018-02-15'
        },
        time: {
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        }
      }

      vm.$store.state.allSlides = [mockSlide]

      Vue.nextTick(() => {
        expect(vm.events.length).to.equal(1)
        expect(vm.events[0].start).to.equal(mockSlide.date.content)
        done()
      })
    })

    it('should be empty given empty slide', function (done) {
      vm.$store.state.allSlides = [{}]

      Vue.nextTick(() => {
        expect(vm.events).to.eql([{}])
        done()
      })
    })

    it('should be empty given empty title', function (done) {
      vm.$store.state.allSlides = [{
        title: {},
        date: {
          content: '2018-02-15'
        }
      }]

      Vue.nextTick(() => {
        expect(vm.events).to.eql([{}])
        done()
      })
    })

    it('should be empty given no title content property', function (done) {
      vm.$store.state.allSlides = [{
        title: {
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        },
        date: {
          content: '2018-02-15'
        }
      }]

      Vue.nextTick(() => {
        expect(vm.events).to.eql([{}])
        done()
      })
    })

    it('should be empty given empty date', function (done) {
      vm.$store.state.allSlides = [{
        title: {
          content: 'The Last One'
        },
        date: {}
      }]

      Vue.nextTick(() => {
        expect(vm.events).to.eql([{}])
        done()
      })
    })

    it('should be empty given no date content property', function (done) {
      vm.$store.state.allSlides = [{
        title: {
          content: 'The Last One'
        },
        date: {
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        }
      }]

      Vue.nextTick(() => {
        expect(vm.events).to.eql([{}])
        done()
      })
    })
  })
})
