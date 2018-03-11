import Vue from 'vue'
import FontStyle from '@/components/FontStyle'

// Test number of font colors showing
describe('FontStyle.vue', () => {
  it('Font Colors should be 11', () => {
    const Constructor = Vue.extend(FontStyle)
    const vm = new Constructor().$mount()
    expect(vm.$data.fontColors.length).to.equal(11)
  })
})

// Test number of font sizes showing
describe('FontStyle.vue', () => {
  it('Font Sizes should be 9', () => {
    const Constructor = Vue.extend(FontStyle)
    const vm = new Constructor().$mount()
    expect(vm.$data.fontSizes.length).to.equal(9)
  })
})

// Test number of font styles showing
describe('FontStyle.vue', () => {
  it('Font Styles should be 3', () => {
    const Constructor = Vue.extend(FontStyle)
    const vm = new Constructor().$mount()
    expect(vm.$data.fontStyles.length).to.equal(3)
  })
})

// Test number of font weights showing
describe('FontStyle.vue', () => {
  it('Font Weights should be 4', () => {
    const Constructor = Vue.extend(FontStyle)
    const vm = new Constructor().$mount()
    expect(vm.$data.fontWeights.length).to.equal(4)
  })
})
