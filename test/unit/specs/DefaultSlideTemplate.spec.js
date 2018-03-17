import Vue from 'vue'
import DefaultSlideTemplate from '@/components/Templates/DefaultSlideTemplate'

describe('DefaultSlideTemplate.vue', function () {
  let vm, Constructor // <- objects to be redefined

  before(function () {
    Constructor = Vue.extend(DefaultSlideTemplate)
  })

  describe('Test slide content', function () {
    let mockProps

    before(function () {
      /* definition of props to be passed down */
      mockProps = {
        carousel: 0,
        slide: {
          images: [
            { src: 'https://www.usask.ca/programs/images/college.jpg' },
            { src: 'http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg' }
          ],
          title: {
            content: 'Sherbrooke Event Title',
            fontColor: 'Blue',
            fontSize: 'Large',
            fontStyle: 'Normal',
            fontWeight: 'Oblique'
          },
          description: {
            content: 'Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.',
            fontColor: 'Red',
            fontSize: 'Small',
            fontStyle: 'Normal',
            fontWeight: 'Lighter'
          },
          date: {
            content: '2018-03-07',
            fontColor: 'Green',
            fontSize: 'Medium',
            fontStyle: 'Italic',
            fontWeight: 'Bolder'
          },
          time: {
            content: '11:05 AM',
            fontColor: 'Yellow',
            fontSize: 'Smaller',
            fontStyle: 'Normal',
            fontWeight: 'Bold'
          },
          meta: {
            template: 'DefaultSlideTemplate',
            timeout: '90',
            repeatable: true,
            startDate: '2018-07-25',
            endDate: '2018-09-01'
          }
        }
      }
    })

    // reset the test case
    beforeEach('Reset the contents to the preset style of props', function () {
      // pass data into propsData
      vm = new Constructor({ propsData: mockProps }).$mount()
    })

    it('Title contents should be rendered correctly', function () {
      /* test contents in the title */
      const title = vm.$el.querySelector('h2.display-3')
      expect(vm.$props.slide.title.content).to.equal('Sherbrooke Event Title')
      expect(title.textContent).to.equal(vm.$props.slide.title.content)
      // TO DO
      expect(vm.$props.slide.title.fontColor).to.equal('Blue')
      // TO DO
      expect(vm.$props.slide.title.fontSize).to.equal('Large')
      // TO DO
      expect(vm.$props.slide.title.fontStyle).to.equal('Normal')
      // TO DO
      expect(vm.$props.slide.title.fontWeight).to.equal('Oblique')
      // TO DO
    })

    it('Time content should be rendered corrctly', function () {
      /* Test the contents in the header */

      /* testing time */
      const header = vm.$el.querySelector('h2.display-2')
      expect(vm.$props.slide.time.content).to.equal('11:05 AM')
      expect(header.textContent).to.contain(vm.$props.slide.time.content)
      // TO DO
      expect(vm.$props.slide.time.fontColor).to.equal('Yellow')
      // TO DO
      expect(vm.$props.slide.time.fontSize).to.equal('Smaller')
      // TO DO
      expect(vm.$props.slide.time.fontStyle).to.equal('Normal')
      // TO DO
      expect(vm.$props.slide.time.fontWeight).to.equal('Bold')
      // TO DO
    })

    it('Date content should be rendered corrctly', function () {
      const header = vm.$el.querySelector('h2.display-2')
      /* testing date */
      expect(vm.$props.slide.date.content).to.equal('2018-03-07')
      expect(header.textContent).to.contain(vm.$props.slide.date.content)
      // TO DO
      expect(vm.$props.slide.date.fontColor).to.equal('Green')
      // TO DO
      expect(vm.$props.slide.date.fontSize).to.equal('Medium')
      // TO DO
      expect(vm.$props.slide.date.fontStyle).to.equal('Italic')
      // TO DO
      expect(vm.$props.slide.date.fontWeight).to.equal('Bolder')
      // TO DO
    })

    /* testing description data */
    it('Event description contents should be rendered correctly', function () {
      /* test contents in the title */
      const desc = vm.$el.querySelector('h3.headline')
      expect(vm.$props.slide.description.content).to.equal('Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.')
      expect(desc.textContent).to.contain(vm.$props.slide.description.content)
      // TO DO
      expect(vm.$props.slide.description.fontColor).to.equal('Red')
      // TO DO
      expect(vm.$props.slide.description.fontSize).to.equal('Small')
      // TO DO
      expect(vm.$props.slide.description.fontStyle).to.equal('Normal')
      // TO DO
      expect(vm.$props.slide.description.fontWeight).to.equal('Lighter')
    })

    /* testing meta data */
    it('meta data contents should be rendered correctly', function () {
      expect(vm.$props.slide.meta.template).to.equal('DefaultSlideTemplate')
      // TODO
      expect(vm.$props.slide.meta.timeout).to.equal('90')
      // TODO
      expect(vm.$props.slide.meta.repeatable).to.equal(true)
      // TODO
      expect(vm.$props.slide.meta.startDate).to.equal('2018-07-25')
      // TODO
      expect(vm.$props.slide.meta.endDate).to.equal('2018-09-01')
    })

    /* Vuetify components cannot be directly tested, so the carousel test is omitted. */
    it('Ensure carousel renders correctly', function () {
      expect(vm.$props.slide.images[0].src).to.equal('https://www.usask.ca/programs/images/college.jpg')
      expect(vm.$props.slide.images[1].src).to.equal('http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg')
    })
  })

  /* Unit tests expecting contents of the prop values of the DEFAULT content values */
  /* These tests remain to ensure 100% test coverage of the prop values. If not testing
    default values, the coverage is 50% */
  describe('Test default slide content', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('Title data contents should be correct', function () {
      expect(vm.$props.slide.title.content).to.equal('Sherbrooke Event Title')
      /* test additional title attributes */
      expect(vm.$props.slide.title.fontColor).to.equal(' ')
      expect(vm.$props.slide.title.fontSize).to.equal(' ')
      expect(vm.$props.slide.title.fontStyle).to.equal(' ')
      expect(vm.$props.slide.title.fontWeight).to.equal(' ')
    })

    it('Event body data contents should be correct', function () {
      expect(vm.$props.slide.description.content).to.equal('Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.')
      /* test additional event body attributes */
      expect(vm.$props.slide.description.fontColor).to.equal(' ')
      expect(vm.$props.slide.description.fontSize).to.equal(' ')
      expect(vm.$props.slide.description.fontStyle).to.equal(' ')
      expect(vm.$props.slide.description.fontWeight).to.equal(' ')
    })

    it('Valid image files should be inside the carousel', function () {
      expect(vm.$props.slide.images[0].src).to.contain('.jpg')
      expect(vm.$props.slide.images[1].src).to.contain('.jpg')
    })

    it('The correct date should be displayed on the slide', function () {
      expect(vm.$props.slide.date.content).to.equal('2018-05-25')
      /* test additional date attributes */
      expect(vm.$props.slide.date.fontColor).to.equal(' ')
      expect(vm.$props.slide.date.fontSize).to.equal(' ')
      expect(vm.$props.slide.date.fontStyle).to.equal(' ')
      expect(vm.$props.slide.date.fontWeight).to.equal(' ')
    })

    it('The correct time should be displayed on the slide', function () {
      expect(vm.$props.slide.time.content).to.equal('07:00 PM')
      /* test additional time attributes */
      expect(vm.$props.slide.time.fontColor).to.equal(' ')
      expect(vm.$props.slide.time.fontSize).to.equal(' ')
      expect(vm.$props.slide.time.fontStyle).to.equal(' ')
      expect(vm.$props.slide.time.fontWeight).to.equal(' ')
    })

    it('Ensure meta information is correct', function () {
      expect(vm.$props.slide.meta.template).to.equal('DefaultSlideTemplate')
      /* test additional time attributes */
      expect(vm.$props.slide.meta.timeout).to.equal('40')
      expect(vm.$props.slide.meta.repeatable).to.equal(false)
      expect(vm.$props.slide.meta.startDate).to.equal('2018-07-26')
      expect(vm.$props.slide.meta.endDate).to.equal('2018-08-01')
    })
  })

  describe.only('Tests carouselInterval()', function () {
    beforeEach(function () {
      vm = new Constructor().$mount()
      console.log(vm.$props.slide.meta)
    })

    it('should return undefined given no slide', function (done) {
      vm.$props.slide = undefined

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given no images', function (done) {
      vm.$props.slide.images = undefined

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given 0 images', function (done) {
      vm.$props.slide.images = []

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given no meta', function (done) {
      vm.$props.slide.meta = undefined

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given no timeout', function (done) {
      vm.$props.slide.meta.timeout = undefined

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given 0 timeout', function (done) {
      vm.$props.slide.meta.timeout = 0

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given 0 timeout', function (done) {
      vm.$props.slide.meta.timeout = 0

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should return undefined given negative timeout', function (done) {
      vm.$props.slide.meta.timeout = -10

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(undefined)
        done()
      })
    })

    it('should give correct interval with timeout as 1 and 1 image', function (done) {
      vm.$props.slide.meta.timeout = 1
      vm.$props.slide.images = [{ src: 'https://www.usask.ca/programs/images/college.jpg' }]

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(1000)
        done()
      })
    })

    it('should give correct interval with timeout as 1 and 2 images', function (done) {
      vm.$props.slide.meta.timeout = 1

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(500)
        done()
      })
    })

    it('should give correct interval with timeout as 10 and 1 image', function (done) {
      vm.$props.slide.meta.timeout = 10
      vm.$props.slide.images = [{ src: 'https://www.usask.ca/programs/images/college.jpg' }]

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(10000)
        done()
      })
    })

    it('should give correct interval with timeout as 10 and 2 images', function (done) {
      vm.$props.slide.meta.timeout = 10

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(5000)
        done()
      })
    })

    it('should give correct interval with decimals', function (done) {
      vm.$props.slide.meta.timeout = 55.7
      vm.$props.slide.images = [
        { src: 'https://www.usask.ca/programs/images/college.jpg' },
        { src: 'https://www.usask.ca/programs/images/college.jpg' },
        { src: 'https://www.usask.ca/programs/images/college.jpg' }
      ]

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(18566.666666666668)
        done()
      })
    })

    it('should give correct interval large number of images', function (done) {
      vm.$props.slide.meta.timeout = 0.5

      let mockImages = []
      for (let i = 0; i < 20; i++) {
        mockImages.push({ src: 'https://www.usask.ca/programs/images/college.jpg' })
      }
      vm.$props.slide.images = mockImages

      Vue.nextTick(() => {
        expect(vm.carouselInterval).to.equal(25)
        done()
      })
    })
  })
})
