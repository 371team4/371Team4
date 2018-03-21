import Vue from 'vue'
import AuthorSlide from '@/components/AuthorSlide'

describe('CreateSlide.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AuthorSlide)
    const vm = new Constructor().$mount()
    expect(vm.slide.title.content).to.equal('')
    expect(vm.slide.description.content).to.equal('')
    expect(vm.slide.date.content).to.equal(null)
    expect(vm.slide.time.content).to.equal(null)
    expect(vm.$data.dateMenu).to.equal(false)
    expect(vm.$data.timeMenu).to.equal(false)
    expect(vm.allowedMinutes(5)).to.equal(true)
    expect(vm.allowedMinutes(4)).to.equal(false)
  })
})
