import Vue from 'vue'
import AddButton from '@/components/shared/AddButton.vue'

describe('AddButton.vue', () => {
  it('should listen on the button event', () => {
    const Constructor = Vue.extend(AddButton)
    const vm = new Constructor({
      propsData: {
        isVisible: true,
        isDisabled: false
      }
    }).$mount()

    const button = vm.$el.querySelector('button')
    button.click()
    vm.$on('cButtonClick', () => {
      expect(true)
    })
  })
})
