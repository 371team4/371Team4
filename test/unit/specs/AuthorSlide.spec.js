import Vue from 'vue'
import AuthorSlide from '@/components/AuthorSlide'
import sinon from 'sinon'

describe('AuthorSlide.vue', function () {
  let vm
  const Constructor = Vue.extend(AuthorSlide)

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
      expect(vm.$props.slide.date.content).to.equal(null)
      expect(vm.$props.slide.date.fontColor).to.equal('')
      expect(vm.$props.slide.date.fontSize).to.equal('')
      expect(vm.$props.slide.date.fontStyle).to.equal('')
      expect(vm.$props.slide.date.fontWeight).to.equal('')
    })

    it('should have correct time', function () {
      expect(vm.$props.slide.time.content).to.equal(null)
      expect(vm.$props.slide.time.fontColor).to.equal('')
      expect(vm.$props.slide.time.fontSize).to.equal('')
      expect(vm.$props.slide.time.fontStyle).to.equal('')
      expect(vm.$props.slide.time.fontWeight).to.equal('')
    })

    it('should have correct meta', function () {
      expect(vm.$props.slide.meta.template).to.equal('')
      expect(vm.$props.slide.meta.timeout).to.equal('')
      expect(vm.$props.slide.meta.repeatable).to.equal(false)
      expect(vm.$props.slide.meta.startDate).to.equal(null)
      expect(vm.$props.slide.meta.endDate).to.equal(null)
    })

    it('should have correct titleErrors', function () {
      expect(vm.$props.titleErrors).to.equal(null)
    })

    it('should have correct descriptionErrors', function () {
      expect(vm.$props.descriptionErrors).to.equal(null)
    })

    it('should have correct data', function () {
      expect(vm.$data.dateMenu).to.equal(false)
      expect(vm.$data.timeMenu).to.equal(false)
    })
  })

  describe('Test props', function () {
    before(function () {
      const mockProps = {
        slide: {
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
      }

      vm = new Constructor({ propsData: mockProps }).$mount()
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

  describe('Test allowedMinutes method', function () {
    before(function () {
      vm = new Constructor().$mount()
    })

    it('should return true given 0', function () {
      expect(vm.allowedMinutes(0)).to.equal(true)
    })

    it('should return true given 5', function () {
      expect(vm.allowedMinutes(5)).to.equal(true)
    })

    it('should return true given 10', function () {
      expect(vm.allowedMinutes(10)).to.equal(true)
    })

    it('should return true given -20', function () {
      expect(vm.allowedMinutes(-20)).to.equal(true)
    })

    it('should return false given -21', function () {
      expect(vm.allowedMinutes(-21)).to.equal(false)
    })

    it('should return false given 2.1', function () {
      expect(vm.allowedMinutes(2.1)).to.equal(false)
    })

    it('should return false given 2', function () {
      expect(vm.allowedMinutes(2)).to.equal(false)
    })
  })

  describe('Test event methods', function () {
    before(function () {
      vm = new Constructor().$mount()
      sinon.spy(vm, '$emit')
    })

    it('should fire submit event', function () {
      vm.submit()
      expect(vm.$emit).to.have.been.calledWith('submit')
    })

    it('should fire clear event', function () {
      vm.clear()
      expect(vm.$emit).to.have.been.calledWith('clear')
      expect(vm.$data.dateMenu).to.equal(false)
      expect(vm.$data.timeMenu).to.equal(false)
    })

    it('should fire imageSelected event', function () {
      vm.imageSelected()
      expect(vm.$emit).to.have.been.calledWith('imageSelected')
    })

    it('should fire deleteImage event', function () {
      vm.deleteImage()
      expect(vm.$emit).to.have.been.calledWith('deleteImage')
    })
  })

  describe('Test formattedTime', function () {
    beforeEach(function () {
      vm = new Constructor().$mount()
    })

    it('should return null given no slide', function () {
      vm.$props.slide = undefined
      expect(vm.formattedTime).to.equal(null)
    })

    it('should return null given no time', function () {
      vm.$props.slide.time = null

      expect(vm.formattedTime).to.equal(null)
    })

    it('should return null given no time content', function () {
      vm.$props.slide.time.content = null

      expect(vm.formattedTime).to.equal(null)
    })

    it('should return correct time given 6:30', function () {
      vm.$props.slide.time.content = '6:30'

      expect(vm.formattedTime).to.equal('6:30 AM')
    })

    it('should return correct time given 0:00', function () {
      vm.$props.slide.time.content = '0:00'

      expect(vm.formattedTime).to.equal('0:00 AM')
    })

    it('should return correct time given 0:01', function () {
      vm.$props.slide.time.content = '0:01'

      expect(vm.formattedTime).to.equal('0:01 AM')
    })

    it('should return correct time given 12:00', function () {
      vm.$props.slide.time.content = '12:00'

      expect(vm.formattedTime).to.equal('12:00 PM')
    })

    it('should return correct time given 4:37', function () {
      vm.$props.slide.time.content = '4:37'

      expect(vm.formattedTime).to.equal('4:37 AM')
    })

    it('should return correct time given 13:01', function () {
      vm.$props.slide.time.content = '13:01'

      expect(vm.formattedTime).to.equal('1:01 PM')
    })

    it('should return correct time given 23:59', function () {
      vm.$props.slide.time.content = '23:59'

      expect(vm.formattedTime).to.equal('11:59 PM')
    })
  })
})
