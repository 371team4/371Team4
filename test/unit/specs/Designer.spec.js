import Vue from 'vue'
import Designer from '@/components/Designer'

describe('Designer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Designer)
    const vm = new Constructor().$mount()
    expect(vm.slide.title.content).to.equal('')
    expect(vm.slide.description.content).to.equal('')
    expect(vm.slide.date.content).to.equal(null)
    expect(vm.slide.time.content).to.equal(null)
  })
})
