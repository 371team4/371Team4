import Vue from 'vue'
import SlideTemplate1 from '@/components/Templates/SlideTemplate1'

describe('SlideTemplate1.vue', () => {
  it('Title data contents should be correct', () => {
    const Constructor = Vue.extend(SlideTemplate1)
    const vm = new Constructor().$mount()
    expect(vm.title)
      .to.equal('Sherbrooke Event Title')
  })

  it('Subtitle data contents should be correct', () => {
    const Constructor = Vue.extend(SlideTemplate1)
    const vm = new Constructor().$mount()
    expect(vm.subtitle)
      .to.equal('Sherbrooke event slide subtitle')
  })
})
