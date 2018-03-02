import Vue from 'vue'
import sinon from 'sinon'
import ImageCards from '@/components/ImageCards'

describe('ImageCards.vue', () => {
  it('can render correct contents', () => {
    const Constructor = Vue.extend(ImageCards)
    const vm = new Constructor().$mount()
    expect(vm.cards.length)
      .to.equal(7)
  })

  it('correctly emits a delete image call', () => {
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
