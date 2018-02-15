import Vue from 'vue'
import ShowView from '@/components/ShowView'

describe('ShowView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ShowView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Show View')
  })
})
