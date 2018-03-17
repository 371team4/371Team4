import Vue from 'vue'
import MenuDayCard from '@/components/MenuDayCard'

describe('MenuDayCard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MenuDayCard)
    const vm = new Constructor().$mount()
    expect(vm.$props.day.meal1.item1)
      .to.equal(' ')
    expect(vm.$props.day.meal1.item2)
      .to.equal(' ')
    expect(vm.$props.day.meal1.item3)
      .to.equal(' ')
    expect(vm.$props.day.meal1.item4)
      .to.equal(' ')
    expect(vm.$props.day.meal1.item5)
      .to.equal(' ')
    expect(vm.$props.day.meal2.item1)
      .to.equal(' ')
    expect(vm.$props.day.meal2.item2)
      .to.equal(' ')
    expect(vm.$props.day.meal2.item3)
      .to.equal(' ')
    expect(vm.$props.day.meal2.item4)
      .to.equal(' ')
    expect(vm.$props.day.meal2.item5)
      .to.equal(' ')
  })
})
