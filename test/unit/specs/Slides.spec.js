import Vue from 'vue'
import Slides from '@/components/Slides'

describe('Slides.vue', () => {
  it('can render correct contents', () => {
    const Constructor = Vue.extend(Slides)
    const vm = new Constructor().$mount()
    expect(vm.events.length)
      .to.equal(6)
  })
})
