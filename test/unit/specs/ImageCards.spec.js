import Vue from 'vue'
import sinon from 'sinon'
import ImageCards from '@/components/ImageCards'
import Vuex from 'vuex'
import slides from '@/store/modules/slide/index'
// import { SET } from '@/store/modules/slide/mutation-types'

describe.only('ImageCards.vue', function () {
  let Constructor, vm //, mockCurrentSlide, testCard

  before(function () {
    Vue.use(Vuex)
    Constructor = Vue.extend(ImageCards)
    const store = new Vuex.Store(slides)
    // testCard = [{}, {}]
    vm = new Constructor({ store }).$mount()
    // mockCurrentSlide = {
    //   images: [
    //     {
    //       src: 'https://picsum.photos/200/300/?image=92'
    //     },
    //     {
    //       src: 'https://picsum.photos/200/300/?image=19'
    //     },
    //     {
    //       src: 'https://picsum.photos/200/300/?image=14'
    //     },
    //     {
    //       src: 'https://picsum.photos/200/300/?image=94'
    //     }
    //   ],
    //   title: {
    //     content: 'Slide1',
    //     fontColor: 'Red',
    //     fontSize: 'Large',
    //     fontStyle: 'Normal',
    //     fontWeight: 'Bold'
    //   },
    //   description: {
    //     content: 'This is the description for Slide1',
    //     fontColor: 'Red',
    //     fontSize: 'Large',
    //     fontStyle: 'Normal',
    //     fontWeight: 'Bold'
    //   },
    //   date: {
    //     content: '2018-02-15',
    //     fontColor: 'Red',
    //     fontSize: 'Large',
    //     fontStyle: 'Normal',
    //     fontWeight: 'Bold'
    //   },
    //   time: {
    //     content: '13:05',
    //     fontColor: 'Red',
    //     fontSize: 'Large',
    //     fontStyle: 'Normal',
    //     fontWeight: 'Bold'
    //   },
    //   meta: {
    //     template: 'DefaultSlideTemplate',
    //     timeout: '40',
    //     repeatable: false,
    //     startDate: '2018-02-16',
    //     endDate: '2018-03-01'
    //   }
    // }
  })

  it('can render default ImageCards.vue data contents', function () {
    // const Constructor = Vue.extend(ImageCards)
    // const vm = new Constructor().$mount()
    // vm.$store.commit(SET, mockCurrentSlide)
    console.log(vm.$store.state.currentSlide.images)
    console.log('HAHAHAHAAHAH')
    console.log(vm.cards)
    // vm.cards = testCard
    console.log(vm.cards)
    expect(vm.cards.length).to.equal(7)
  })

  it('correctly emits a delete image call', function () {
    const Constructor = Vue.extend(ImageCards)
    const vm = new Constructor().$mount()
    sinon.spy(vm, '$emit')
    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.$emit).to.have.been.calledWith('deleteImage')
    expect(vm.cards.length)
      .to.equal(7)
  })
})
