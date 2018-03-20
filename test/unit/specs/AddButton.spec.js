import Vue from 'vue'
import sinon from 'sinon'
import AddButton from '@/components/shared/AddButton.vue'

describe('AddButton.vue', function () {
  let Constructor, vm

  before(function () {
    Constructor = Vue.extend(AddButton)
    vm = new Constructor().$mount()
  })

  it('should have correct defaults', function () {
    expect(vm.$props).to.have.property('isVisible', true)
    expect(vm.$props).to.have.property('isDisabled', false)
  })

  it('should fire a cButtonClick event', function () {
    const button = vm.$el.querySelector('button')
    sinon.spy(vm, '$emit')
    button.click()
    expect(vm.$emit).to.have.been.calledWith('cButtonClick')
  })
})
