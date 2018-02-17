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
    expect(vm.menu)
      .to.equal(false)
    expect(vm.modal)
      .to.equal(false)
    expect(vm.time)
      .to.equal(null)
    expect(vm.menu2)
      .to.equal(false)
    expect(vm.modal2)
      .to.equal(false)
    expect(vm.allowedMinutes.toString())
      .to.equal([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].toString())
  })
})
