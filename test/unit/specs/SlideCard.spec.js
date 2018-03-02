import Vue from 'vue'
import SlideCard from '@/components/SlideCard'

describe('SlideCard.vue', () => {
  let Constructor, vm

  before(() => {
    Constructor = Vue.extend(SlideCard)
    vm = new Constructor().$mount()
  })

  it('has correct images', () => {
    expect(vm.slide.images.length).to.equal(4)
    expect(vm.slide.images[0].src).to.equal('https://picsum.photos/200/300/?image=92')
    expect(vm.slide.images[1].src).to.equal('https://picsum.photos/200/300/?image=19')
    expect(vm.slide.images[2].src).to.equal('https://picsum.photos/200/300/?image=14')
    expect(vm.slide.images[3].src).to.equal('https://picsum.photos/200/300/?image=94')
  })

  it('has correct title', () => {
    expect(vm.slide.title.content).to.equal('Slide1')
    expect(vm.slide.title.fontColor).to.equal('Red')
    expect(vm.slide.title.fontSize).to.equal('Large')
    expect(vm.slide.title.fontStyle).to.equal('Normal')
    expect(vm.slide.title.fontWeight).to.equal('Bold')
  })

  it('has correct description', () => {
    expect(vm.slide.description.content).to.equal('This is the description for Slide1')
    expect(vm.slide.description.fontColor).to.equal('Red')
    expect(vm.slide.description.fontSize).to.equal('Large')
    expect(vm.slide.description.fontStyle).to.equal('Normal')
    expect(vm.slide.description.fontWeight).to.equal('Bold')
  })

  it('has correct date', () => {
    expect(vm.slide.date.content).to.equal('2018-02-15')
    expect(vm.slide.date.fontColor).to.equal('Red')
    expect(vm.slide.date.fontSize).to.equal('Large')
    expect(vm.slide.date.fontStyle).to.equal('Normal')
    expect(vm.slide.date.fontWeight).to.equal('Bold')
  })

  it('has correct time', () => {
    expect(vm.slide.time.content).to.equal('13:05')
    expect(vm.slide.time.fontColor).to.equal('Red')
    expect(vm.slide.time.fontSize).to.equal('Large')
    expect(vm.slide.time.fontStyle).to.equal('Normal')
    expect(vm.slide.time.fontWeight).to.equal('Bold')
  })

  it('has correct meta', () => {
    expect(vm.slide.meta.template).to.equal('DefaultSlideTemplate')
    expect(vm.slide.meta.timeout).to.equal('40')
    expect(vm.slide.meta.repeatable).to.equal(false)
    expect(vm.slide.meta.startDate).to.equal('2018-02-16')
    expect(vm.slide.meta.endDate).to.equal('2018-03-01')
  })
})
