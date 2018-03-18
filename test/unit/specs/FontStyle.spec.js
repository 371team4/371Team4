import Vue from 'vue'
import FontStyle from '@/components/FontStyle'

describe('FontStyle.vue', function () {
  let vm, expectedColors, expectedSizes, expectedStyles, expectedWeights

  before(function () {
    const Constructor = Vue.extend(FontStyle)
    vm = new Constructor().$mount()

    expectedColors = ['Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Pink', 'Teal', 'Lime', 'Orange', 'Brown', 'Grey']
    expectedSizes = ['XX-Small', 'X-Small', 'Smaller', 'Small', 'Medium', 'Large', 'Larger', 'X-Large', 'XX-Large']
    expectedStyles = ['Italic', 'Normal', 'Oblique']
    expectedWeights = ['Lighter', 'Normal', 'Bold', 'Bolder']
  })

  it('should have correct defaults', function () {
    expect(vm.$props.fontColor).to.equal('')
    expect(vm.$props.fontSize).to.equal('')
    expect(vm.$props.fontWeight).to.equal('')
    expect(vm.$props.fontStyle).to.equal('')
  })

  it('should have correct colors', function () {
    expect(vm.$data.fontColors).to.eql(expectedColors)
  })

  it('should have correct sizes', function () {
    expect(vm.$data.fontSizes).to.eql(expectedSizes)
  })

  it('should have correct styles', function () {
    expect(vm.$data.fontStyles).to.eql(expectedStyles)
  })

  it('should have correct weights', function () {
    expect(vm.$data.fontWeights).to.eql(expectedWeights)
  })
})
