import Vue from 'vue'
import SlideCard from '@/components/SlideCard'

describe.only('SlideCard.vue', function () {
  let Constructor, vm

  before(function () {
    Constructor = Vue.extend(SlideCard)
  })

  describe('Test default values', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('should have correct images', function () {
      expect(vm.$props.slide.images.length).to.equal(0)
    })

    it('should have correct title', function () {
      expect(vm.$props.slide.title.content).to.equal('')
      expect(vm.$props.slide.title.fontColor).to.equal('')
      expect(vm.$props.slide.title.fontSize).to.equal('')
      expect(vm.$props.slide.title.fontStyle).to.equal('')
      expect(vm.$props.slide.title.fontWeight).to.equal('')
    })

    it('should have correct description', function () {
      expect(vm.$props.slide.description.content).to.equal('')
      expect(vm.$props.slide.description.fontColor).to.equal('')
      expect(vm.$props.slide.description.fontSize).to.equal('')
      expect(vm.$props.slide.description.fontStyle).to.equal('')
      expect(vm.$props.slide.description.fontWeight).to.equal('')
    })

    it('should have correct date', function () {
      expect(vm.$props.slide.date.content).to.equal('')
      expect(vm.$props.slide.date.fontColor).to.equal('')
      expect(vm.$props.slide.date.fontSize).to.equal('')
      expect(vm.$props.slide.date.fontStyle).to.equal('')
      expect(vm.$props.slide.date.fontWeight).to.equal('')
    })

    it('should have correct time', function () {
      expect(vm.$props.slide.time.content).to.equal('')
      expect(vm.$props.slide.time.fontColor).to.equal('')
      expect(vm.$props.slide.time.fontSize).to.equal('')
      expect(vm.$props.slide.time.fontStyle).to.equal('')
      expect(vm.$props.slide.time.fontWeight).to.equal('')
    })

    it('should have correct meta', function () {
      expect(vm.$props.slide.meta.template).to.equal('')
      expect(vm.$props.slide.meta.timeout).to.equal('')
      expect(vm.$props.slide.meta.repeatable).to.equal(false)
      expect(vm.$props.slide.meta.startDate).to.equal('')
      expect(vm.$props.slide.meta.endDate).to.equal('')
    })
  })

  describe('Test SlideCard props', function () {
    before(function () {
      vm = new Constructor().$mount()

      const mockSlide = {
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
      }

      vm.$props.slide = mockSlide
    })

    it('should have correct images', function () {
      expect(vm.$props.slide.images.length).to.equal(4)
      expect(vm.$props.slide.images[0].src).to.equal('https://picsum.photos/200/300/?image=92')
      expect(vm.$props.slide.images[1].src).to.equal('https://picsum.photos/200/300/?image=19')
      expect(vm.$props.slide.images[2].src).to.equal('https://picsum.photos/200/300/?image=14')
      expect(vm.$props.slide.images[3].src).to.equal('https://picsum.photos/200/300/?image=94')
    })

    it('should have correct title', function () {
      expect(vm.$props.slide.title.content).to.equal('Slide1')
      expect(vm.$props.slide.title.fontColor).to.equal('Red')
      expect(vm.$props.slide.title.fontSize).to.equal('Large')
      expect(vm.$props.slide.title.fontStyle).to.equal('Normal')
      expect(vm.$props.slide.title.fontWeight).to.equal('Bold')
    })

    it('should have correct description', function () {
      expect(vm.$props.slide.description.content).to.equal('This is the description for Slide1')
      expect(vm.$props.slide.description.fontColor).to.equal('Red')
      expect(vm.$props.slide.description.fontSize).to.equal('Large')
      expect(vm.$props.slide.description.fontStyle).to.equal('Normal')
      expect(vm.$props.slide.description.fontWeight).to.equal('Bold')
    })

    it('should have correct date', function () {
      expect(vm.$props.slide.date.content).to.equal('2018-02-15')
      expect(vm.$props.slide.date.fontColor).to.equal('Red')
      expect(vm.$props.slide.date.fontSize).to.equal('Large')
      expect(vm.$props.slide.date.fontStyle).to.equal('Normal')
      expect(vm.$props.slide.date.fontWeight).to.equal('Bold')
    })

    it('should have correct time', function () {
      expect(vm.$props.slide.time.content).to.equal('13:05')
      expect(vm.$props.slide.time.fontColor).to.equal('Red')
      expect(vm.$props.slide.time.fontSize).to.equal('Large')
      expect(vm.$props.slide.time.fontStyle).to.equal('Normal')
      expect(vm.$props.slide.time.fontWeight).to.equal('Bold')
    })

    it('should have correct meta', function () {
      expect(vm.$props.slide.meta.template).to.equal('DefaultSlideTemplate')
      expect(vm.$props.slide.meta.timeout).to.equal('40')
      expect(vm.$props.slide.meta.repeatable).to.equal(false)
      expect(vm.$props.slide.meta.startDate).to.equal('2018-02-16')
      expect(vm.$props.slide.meta.endDate).to.equal('2018-03-01')
    })
  })
})
