import Vue from 'vue'
import ImageCards from '@/components/ImageCards'

describe('ImageCards.vue', () => {
  it('can render correct contents', () => {
    const Constructor = Vue.extend(ImageCards)
    const vm = new Constructor().$mount()
    expect(vm.cards.length)
      .to.equal(7)
  })

  it('is able to delete an image', () => {
    const Constructor = Vue.extend(ImageCards)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.data.cards.size)
      .to.equal(6)
  })
})
