import Vue from 'vue'
import FontStyle from '@/components/FontStyle'

describe.only('FontStyle.vue', function () {
  let Constructor, vm

  before(function () {
    Constructor = Vue.extend(FontStyle)
    vm = new Constructor().$mount()
  })

  it('should have correct defaults', function () {
    expect(vm.$props.fontColor).to.equal('')
    expect(vm.$props.fontSize).to.equal('')
    expect(vm.$props.fontWeight).to.equal('')
    expect(vm.$props.fontStyle).to.equal('')
  })

  it('should have correct colors', function () {
    let expectedColors = ['Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Pink', 'Teal', 'Lime', 'Orange', 'Brown', 'Grey']

    expect(vm.$data.fontColors).to.eql(expectedColors)
  })

  it('should have correct sizes', function () {
    let expectedSizes = ['XX-Small', 'X-Small', 'Smaller', 'Small', 'Medium', 'Large', 'Larger', 'X-Large', 'XX-Large']

    expect(vm.$data.fontSizes).to.eql(expectedSizes)
  })

  it('should have correct styles', function () {
    let expectedStyles = ['Italic', 'Normal', 'Oblique']

    expect(vm.$data.fontStyles).to.eql(expectedStyles)
  })

  it('should have correct weights', function () {
    let expectedWeights = ['Lighter', 'Normal', 'Bold', 'Bolder']

    expect(vm.$data.fontWeights).to.eql(expectedWeights)
  })
})
