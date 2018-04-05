import Vue from 'vue'
import Designer from '@/components/Designer'
import sinon from 'sinon'
import { store } from '@/store'
import * as MUTATIONS from '@/store/mutation-types'

const fontColors = [
  'Blue',
  'Red',
  'Green',
  'Yellow',
  'Purple',
  'Pink',
  'Teal',
  'Lime',
  'Orange',
  'Brown',
  'Grey',
  'Black'
]
const fontSizes = ['XX-Small', 'X-Small', 'Smaller', 'Small', 'Medium', 'Large', 'Larger', 'X-Large', 'XX-Large']
const fontStyles = ['Italic', 'Normal', 'Oblique']
const fontWeights = ['Lighter', 'Normal', 'Bold', 'Bolder']
const durations = [
  { text: '10 seconds', value: 10 },
  { text: '20 seconds', value: 20 },
  { text: '30 seconds', value: 30 },
  { text: '40 seconds', value: 40 },
  { text: '50 seconds', value: 50 },
  { text: '60 seconds', value: 60 },
  { text: '70 seconds', value: 70 },
  { text: '80 seconds', value: 80 }
]

const templates = [{ text: 'Default Template', value: 'DefaultSlideTemplate' }]

describe.only('Designer.vue', function () {
  let vm
  const Constructor = Vue.extend(Designer)

  describe('Test default values', function () {
    before(function () {
      vm = new Constructor({ store }).$mount()
    })
    it('should have correct images', function () {
      expect(vm.images).to.have.lengthOf(0)
    })

    it('should have correct title', function () {
      expect(vm.title).to.equal('')
      expect(vm.titleColor).to.equal('Black')
      expect(vm.titleSize).to.equal('Medium')
      expect(vm.titleStyle).to.equal('Normal')
      expect(vm.titleWeight).to.equal('Normal')
    })

    it('should have correct description', function () {
      expect(vm.desc).to.equal('')
      expect(vm.descColor).to.equal('Black')
      expect(vm.descSize).to.equal('Medium')
      expect(vm.descStyle).to.equal('Normal')
      expect(vm.descWeight).to.equal('Normal')
    })

    it('should have correct date', function () {
      expect(vm.date).to.have.lengthOf(0)
      expect(vm.dateColor).to.equal('Black')
      expect(vm.dateSize).to.equal('Medium')
      expect(vm.dateStyle).to.equal('Normal')
      expect(vm.dateWeight).to.equal('Normal')
    })

    it('should have correct time', function () {
      expect(vm.time).to.be.an.instanceOf(Date)
      expect(vm.timeColor).to.equal('Black')
      expect(vm.timeSize).to.equal('Medium')
      expect(vm.timeStyle).to.equal('Normal')
      expect(vm.timeWeight).to.equal('Normal')
    })

    it('should have correct meta', function () {
      expect(vm.template).to.equal('DefaultSlideTemplate')
      expect(vm.timeout).to.equal(20)
      expect(vm.datesOnDisplay).to.have.lengthOf(0)
    })

    it('should have correct data', function () {
      expect(vm.$data.showTitleSettings).to.equal(false)
      expect(vm.$data.showDateSettings).to.equal(false)
      expect(vm.$data.showTimeSettings).to.equal(false)
      expect(vm.$data.showDescSettings).to.equal(false)
      expect(vm.$data.showSlideSettings).to.equal(false)
      expect(vm.$data.uploading).to.equal(true)
      expect(vm.$data.valid).to.equal(true)
      expect(vm.$data.showPreview).to.equal(false)
      expect(vm.$data.carousel).to.equal(-1)
      expect(vm.$data.dateMenu).to.equal(false)
      expect(vm.$data.timeMenu).to.equal(false)
      expect(vm.$data.datesOnDisplayMenu).to.equal(false)
      expect(vm.$data.fontColors).to.deep.equal(fontColors)
      expect(vm.$data.fontSizes).to.deep.equal(fontSizes)
      expect(vm.$data.fontStyles).to.deep.equal(fontStyles)
      expect(vm.$data.fontWeights).to.deep.equal(fontWeights)
      expect(vm.$data.durations).to.deep.equal(durations)
      expect(vm.$data.templates).to.deep.equal(templates)
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

  describe('Test deleteImage', function () {
    before(function () {
      vm = new Constructor().$mount()
      vm.$props.slide.images = [
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
      ]
    })

    it('should delete third image', function () {
      vm.deleteImage(2)

      expect(vm.$props.slide.images.length).to.equal(3)
      expect(vm.$props.slide.images[0].src).to.equal('https://picsum.photos/200/300/?image=92')
      expect(vm.$props.slide.images[1].src).to.equal('https://picsum.photos/200/300/?image=19')
      expect(vm.$props.slide.images[2].src).to.equal('https://picsum.photos/200/300/?image=94')
    })

    it('should delete second image', function () {
      vm.deleteImage(1)

      expect(vm.$props.slide.images.length).to.equal(2)
      expect(vm.$props.slide.images[0].src).to.equal('https://picsum.photos/200/300/?image=92')
      expect(vm.$props.slide.images[1].src).to.equal('https://picsum.photos/200/300/?image=94')
    })

    it('should delete all images', function () {
      vm.deleteImage(0)
      vm.deleteImage(0)

      expect(vm.$props.slide.images.length).to.equal(0)
    })

    it('should change nothing', function () {
      vm.deleteImage(2)

      expect(vm.$props.slide.images.length).to.equal(0)
    })
  })

  describe('Test clear', function () {
    before(function () {
      vm = new Constructor({ store }).$mount()
    })

    it('should clear data fields', function () {
      vm.$props.slide.title.content = 'some title'
      vm.$props.slide.description.content = 'some description'
      vm.$props.slide.date.content = '2018-02-15'
      vm.$props.slide.time.content = '13:01'

      vm.clear()

      expect(vm.$props.slide.title.content).to.equal('')
      expect(vm.$props.slide.description.content).to.equal('')
      expect(vm.$props.slide.date.content).to.equal(null)
      expect(vm.$props.slide.time.content).to.equal(null)
    })

    it('should commit current slide', function () {
      let spy = sinon.spy(vm.$store, 'commit')

      vm.clear()

      expect(spy.calledOnce).to.equal(true)
      expect(spy).to.have.been.calledWith(MUTATIONS.SET_CURRENT_SLIDE, vm.$props.slide)
      spy.restore()
    })

    it('should commit current slide', function () {
      let spy = sinon.spy(vm, 'forceUpdateCarousel')

      vm.clear()

      expect(spy.calledOnce).to.equal(true)
      spy.restore()
    })
  })

  describe('Test submit', function () {
    let spy

    before(function () {
      const props = {
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

      vm = new Constructor({ propsData: props, store }).$mount()
    })

    afterEach(function () {
      spy.restore()
    })

    it('should update carousel', function () {
      spy = sinon.spy(vm, 'forceUpdateCarousel')

      vm.submit()

      expect(spy.called).to.equal(true)
    })

    it.skip('should commit current slide', function () {
      spy = sinon.spy(vm.$store, 'commit')

      vm.submit()

      expect(spy.calledOnce).to.equal(true)
      expect(spy).to.have.been.calledWith(MUTATIONS.SET_CURRENT_SLIDE, vm.slide)
    })

    it('should save current slide', function () {
      spy = sinon.spy(vm.$store, 'dispatch')

      vm.submit()

      expect(spy.calledOnce).to.equal(true)
      expect(spy).to.have.been.calledWith('saveSlide')
    })

    it('should change views', function () {
      spy = sinon.spy(vm, 'changeViews')

      vm.submit()

      expect(spy.calledOnce).to.equal(true)
    })

    it('should do nothing', function (done) {
      vm.$data.showPreview = false
      vm.$data.carousel = -1

      const slide = { title: { content: 'hello' }, description: { content: 'world' } }
      vm.$store.state.currentSlide = slide
      vm.slide = { title: { content: '' }, description: { content: '' } }

      Vue.nextTick(() => {
        vm.submit()

        expect(vm.$data.carousel).to.equal(-1)
        expect(vm.$store.state.currentSlide).to.deep.equal(slide)
        expect(vm.$data.showPreview).to.equal(true)
        done()
      })
    })
  })

  describe('Test remaining methods', function () {
    let spy

    beforeEach(function () {
      vm = new Constructor({ store }).$mount()
    })

    it('should update carousel', function (done) {
      vm.$data.showPreview = true

      vm.forceUpdateCarousel()
      Vue.nextTick(() => {
        expect(vm.$data.carousel).to.equal(0)
      })
      vm.forceUpdateCarousel()
      Vue.nextTick(() => {
        expect(vm.$data.carousel).to.equal(-1)
      })

      done()
    })

    it('should toggle view and update carousel', function () {
      spy = sinon.spy(vm, 'forceUpdateCarousel')
      vm.$data.showPreview = false

      vm.changeViews()

      expect(vm.$data.showPreview).to.equal(true)

      vm.changeViews()

      expect(vm.$data.showPreview).to.equal(false)
      expect(spy.calledTwice).to.equal(true)
      spy.restore()
    })

    it('should add an image', function () {
      spy = sinon.spy(vm.images, 'push')
      sinon.spy(vm, 'forceUpdateCarousel')

      const mockImg = { src: 'https://picsum.photos/200/300/?image=94' }
      vm.addImage(mockImg)

      expect(spy.calledOnce).to.equal(true)
      expect(spy).to.have.been.calledWith(mockImg)
      expect(vm.forceUpdateCarousel.calledOnce).to.equal(true)
      spy.restore()
    })
  })

  describe.skip('Test title errors', function () {
    before(function () {
      vm = new Constructor({ store }).$mount()
    })

    beforeEach(function () {
      vm.slide.title.content = ''
      vm.$refs.form.reset()
    })

    it.skip('should have no errors', function () {
      expect(vm.$refs.form.getInputs()[0].errorBucket).to.eql([])
    })

    it('should still have no errors', function (done) {
      vm.slide.title.content = '123456789012345678901234567890'
      vm.$refs.form.validate()
      Vue.nextTick(() => {
        expect(vm.$refs.form.getInputs()[0].errorBucket).to.eql([])
        done()
      })
    })

    it('should have a "title required" error', function (done) {
      vm.$refs.form.validate()
      Vue.nextTick(() => {
        expect(vm.$refs.form.getInputs()[0].errorBucket[0]).to.eql('Title is required')
        done()
      })
    })

    it('should have "title too long" error', function (done) {
      vm.slide.title.content = 'This title is more than thirty characters long'
      vm.$refs.form.validate()
      Vue.nextTick(() => {
        expect(vm.$refs.form.getInputs()[0].errorBucket).to.eql(['Title must be less than 30 characters'])
        done()
      })
    })
  })

  describe.skip('Test description errors', function () {
    this.timeout(15000)
    before(function () {
      vm = new Constructor({ store }).$mount()
    })

    beforeEach(function (done) {
      vm.desc = ''
      vm.$refs.form.reset()
      vm.$nextTick(() => done())
    })

    afterEach(function (done) {
      vm.$refs.form.reset()
      vm.$nextTick(() => done())
    })

    it.skip('should have no errors', function () {
      vm.$refs.form.reset()
      expect(vm.$refs.form.getInputs()[3].errorBucket).to.eql([])
    })

    it.skip('should still have no errors', function (done) {
      vm.desc = '123456789012345678901234567890'
      vm.$refs.form.validate()
      setTimeout(() => {
        Vue.nextTick(() => {
          expect(vm.$refs.form.getInputs()[3].errorBucket).to.eql([])
          done()
        })
      }, 1000)
    })

    it('should have "description required" error', function (done) {
      const descField = vm.$refs.form.getInputs().filter(val => val.$attrs['data-test-attr'] === 'description')[0]
      expect(descField.$el.outerHTML).to.not.include('Description is required')
      vm.$refs.form.validate()
      setTimeout(() => {
        Vue.nextTick(() => {
          expect(descField.$el.outerHTML).to.include('Description is required')
          done()
        })
      }, 1000)
    })

    it('should have "description too long" error', function (done) {
      vm.desc =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, dui luctus finibus consequat, lacus nisl lobortis urna, posuere ultricies ipsum sapien'
      const descField = vm.$refs.form.getInputs().filter(val => val.$attrs['data-test-attr'] === 'description')[0]
      expect(descField.$el.outerHTML).to.not.include('Description is required')
      vm.$refs.form.validate()
      setTimeout(() => {
        Vue.nextTick(() => {
          expect(descField.$el.outerHTML).to.include(['Description must be less than 140 characters'])
          done()
        })
      }, 1000)
    })
  })

  describe('Test uploadImage', function () {
    let spy

    before(function () {
      vm = new Constructor({ store }).$mount()
    })

    afterEach(function () {
      spy.restore()
    })

    it('should do nothing', function () {
      const file = new File([''], 'filename', { type: 'text/plain' })
      spy = sinon.spy(vm.$store, 'dispatch')

      vm.uploadImage([file])

      expect(vm.$store.dispatch).to.have.callCount(0)
      expect(vm.images).to.have.lengthOf(0)
    })
  })
})
