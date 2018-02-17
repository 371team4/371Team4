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

  it('Event body data contents should be correct', () => {
    const Constructor = Vue.extend(SlideTemplate1)
    const vm = new Constructor().$mount()
    expect(vm.eventBody)
      .to.equal('Sherbrooke event slide body. CMPT371 Team 4: Erik, Mahmoud, Jordan, Amy, Peggy, Ehtasham, Ben, Li, Ridwan, Duke, Mason, Nam')
  })

  it('Slide mode is False by default', () => {
    const Constructor = Vue.extend(SlideTemplate1)
    const vm = new Constructor().$mount()
    expect(vm.slideModeOn)
      .to.equal(false)
  })

  it('Valid image files should be inside the carousel', () => {
    const Constructor = Vue.extend(SlideTemplate1)
    const vm = new Constructor().$mount()
    expect(vm.items[0].src)
      .to.contain('.jpg')
    expect(vm.items[1].src)
      .to.contain('.jpg')
  })

  it('Text on the template should contain specified words', () => {
    const Constructor = Vue.extend(SlideTemplate1)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .to.contain('Sherbrooke')
  })
})
