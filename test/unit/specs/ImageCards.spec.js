import Vue from 'vue'
import sinon from 'sinon'
import ImageCards from '@/components/ImageCards'
import Vuex from 'vuex'
import slide from '@/store/modules/slide/index'
import { SET } from '@/store/modules/slide/mutation-types'
// import { SET } from '@/store/modules/slide/mutation-types'

describe.only('ImageCards.vue', function () {
  let Constructor, vm, mockCurrentSlide

  before(function () {
    Vue.use(Vuex)
    Constructor = Vue.extend(ImageCards)
    const store = new Vuex.Store(slide)
    vm = new Constructor({ store }).$mount()
    sinon.spy(vm, '$emit')
    mockCurrentSlide = {
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
  })

  it('can render default ImageCards.vue data contents', function () {
    expect(vm.cards.length).to.equal(7)
  })

  it('correctly emits a delete image call with defualt values', function () {
    // const Constructor = Vue.extend(ImageCards)
    // const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.$emit).to.have.been.calledWith('deleteImage')
    expect(vm.cards.length).to.equal(7)
  })

  it('correctly reders cards with non-default values', function () {
    vm.$store.commit(SET, mockCurrentSlide)
    vm.cards = vm.$store.state.currentSlide.images
    expect(vm.cards.length).to.equal(mockCurrentSlide.images.length)
    expect(vm.cards.length).to.equal(vm.$store.state.currentSlide.images.length)
    expect(vm.cards).to.equal(mockCurrentSlide.images)
    expect(vm.cards).to.equal(vm.$store.state.currentSlide.images)
  })

  it('correctly emits a delete image call with non-default values', function () {
    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.$emit).to.have.been.calledWith('deleteImage')
    expect(vm.cards.length).to.equal(mockCurrentSlide.images.length)
  })
})
