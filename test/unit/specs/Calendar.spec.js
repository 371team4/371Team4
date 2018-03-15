import Vue from 'vue'
import Calendar from '@/components/Calendar'
import Vuex from 'vuex'
import slides from '@/store/modules/slide/index'

describe.only('Calendar.vue', function () {
  let Constructor, vm

  before(function () {
    Vue.use(Vuex)
    Constructor = Vue.extend(Calendar)
  })

  describe('Test Events property', function () {
    let mockSlides
    before(function () {
      const store = new Vuex.Store(slides)
      vm = new Constructor({ store }).$mount()

      mockSlides = [
        {
          images: [
            {
              src: 'https://picsum.photos/200/300/?image=92'
            },
            {
              src: 'https://picsum.photos/200/300/?image=19'
            },
            {
              src: 'https://picsum.photos/200/300/?image=14'
            },
            {
              src: 'https://picsum.photos/200/300/?image=94'
            }
          ],
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
            content: '13:05',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          meta: {
            template: 'DefaultSlideTemplate',
            timeout: '40',
            repeatable: false,
            startDate: '2018-02-16',
            endDate: '2018-03-01'
          }
        },
        {
          images: [
            {
              src: 'https://picsum.photos/200/300/?image=92'
            },
            {
              src: 'https://picsum.photos/200/300/?image=19'
            },
            {
              src: 'https://picsum.photos/200/300/?image=14'
            },
            {
              src: 'https://picsum.photos/200/300/?image=94'
            }
          ],
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
            content: '2018-02-15',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          time: {
            content: '13:05',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          meta: {
            template: 'DefaultSlideTemplate',
            timeout: '40',
            repeatable: false,
            startDate: '2018-02-16',
            endDate: '2018-03-01'
          }
        },
        {
          images: [
            {
              src: 'https://picsum.photos/200/300/?image=92'
            },
            {
              src: 'https://picsum.photos/200/300/?image=19'
            },
            {
              src: 'https://picsum.photos/200/300/?image=14'
            },
            {
              src: 'https://picsum.photos/200/300/?image=94'
            }
          ],
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
            content: '2018-02-15',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          time: {
            content: '13:05',
            fontColor: 'Red',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          meta: {
            template: 'DefaultSlideTemplate',
            timeout: '40',
            repeatable: false,
            startDate: '2018-02-16',
            endDate: '2018-03-01'
          }
        }
      ]
    })

    it('should have no slides', function (done) {
      Vue.nextTick(() => {
        expect(vm.Events.length).to.equal(0)
        done()
      })
    })

    it('should have 1 slide', function (done) {
      vm.$store.state.allSlides = mockSlides
      Vue.nextTick(() => {
        console.log(vm.$store.state.getAllSlides)
        expect(vm.Events.length).to.equal(1)
        done()
      })
    })
  })

  describe('Test addOnDay method', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    // Following test is for method "addOneday".
    // There are three test cases in total: day change, month change and year change
    it('Test addOneday Method', (done) => {
      // Fake Slide
      var fakeSlide = '2018-01-01'
      // To check whether the one day is added correctly
      // Should be "2018-01-02"
      expect((vm.addOneDay(fakeSlide)).toDateString)
        .to.equal(('2018-01-02').toDateString)

      // Now testing whether the month can be changed correctly.
      // Change the date to '2018-01-31'
      fakeSlide = '2018-01-31'

      // the computed property will get triggered on the nex tick
      Vue.nextTick(() => {
        // Check the date again
        expect((vm.addOneDay(fakeSlide)).toDateString)
          .to.equal(('2018-02-01').toDateString)
      })

      // Now testing whether the month can be changed correctly.
      // Change the date to '2019-01-01'
      fakeSlide = '2018-12-31'

      // the computed property will get triggered on the nex tick
      Vue.nextTick(() => {
        // Check the date again
        expect((vm.addOneDay(fakeSlide)).toDateString)
          .to.equal(('2019-01-01').toDateString)
        // must call done() to tell mocha we are done testing this aysnc statement
        done()
      })
    })
  })
})
