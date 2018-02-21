import Vue from 'vue'
import Designer from '@/components/Designer'

describe('Designer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Designer)
    const vm = new Constructor().$mount()
    expect(vm.slideTitle)
      .to.equal('')
    expect(vm.description)
      .to.equal('')
    expect(vm.date)
      .to.equal(null)
    expect(vm.dateMenu)
      .to.equal(false)
    expect(vm.time)
      .to.equal(null)
    expect(vm.timeMenu)
      .to.equal(false)
    expect(vm.allowedMinutes(5))
      .to.equal(true)
    expect(vm.allowedMinutes(4))
      .to.equal(false)
  })
})
