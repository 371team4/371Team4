import Vue from 'vue'
import DefaultSlideTemplate from '@/components/Templates/DefaultSlideTemplate'

describe('DefaultSlideTemplate.vue', () => {
  it('Title data contents should be correct', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.title)
      .to.equal('Sherbrooke Event Title')
  })

  it('Subtitle data contents should be correct', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.subtitle)
      .to.equal('Sherbrooke event slide subtitle')
  })

  it('Event body data contents should be correct', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.eventBody)
      .to.equal('Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum. ')
  })

  it('Slide mode is False by default', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideModeOn)
      .to.equal(false)
  })

  it('Valid image files should be inside the carousel', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.items[0].src)
      .to.contain('.jpg')
    expect(vm.items[1].src)
      .to.contain('.jpg')
  })

  it('Text on the template should contain specified words', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .to.contain('Sherbrooke')
  })
})
