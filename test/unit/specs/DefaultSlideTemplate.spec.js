import Vue from 'vue'
import DefaultSlideTemplate from '@/components/Templates/DefaultSlideTemplate'

describe('DefaultSlideTemplate.vue', () => {
  it('Title data contents should be correct', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideView.title.content)
      .to.equal('Sherbrooke Event Title')
      /* test additional title attributes */
    expect(vm.slideView.title.fontColor)
      .to.equal(' ')
    expect(vm.slideView.title.fontSize)
      .to.equal(' ')
    expect(vm.slideView.title.fontStyle)
      .to.equal(' ')
    expect(vm.slideView.title.fontWeight)
      .to.equal(' ')
  })

  it('Event body data contents should be correct', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideView.eventBody.content)
      .to.equal('Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.')
      /* test additional event body attributes */
    expect(vm.slideView.eventBody.fontColor)
      .to.equal(' ')
    expect(vm.slideView.eventBody.fontSize)
      .to.equal(' ')
    expect(vm.slideView.eventBody.fontStyle)
      .to.equal(' ')
    expect(vm.slideView.eventBody.fontWeight)
      .to.equal(' ')
  })

  it('Valid image files should be inside the carousel', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideView.items[0].src)
      .to.contain('.jpg')
    expect(vm.slideView.items[1].src)
      .to.contain('.jpg')
  })

  it('The correct date should be displayed on the slide', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideView.date.content)
      .to.equal('2018-05-25')
      /* test additional date attributes */
    expect(vm.slideView.date.fontColor)
      .to.equal(' ')
    expect(vm.slideView.date.fontSize)
      .to.equal(' ')
    expect(vm.slideView.date.fontStyle)
      .to.equal(' ')
    expect(vm.slideView.date.fontWeight)
      .to.equal(' ')
  })

  it('The correct time should be displayed on the slide', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideView.time.content)
      .to.equal('07:00 PM')
      /* test additional time attributes */
    expect(vm.slideView.time.fontColor)
      .to.equal(' ')
    expect(vm.slideView.time.fontSize)
      .to.equal(' ')
    expect(vm.slideView.time.fontStyle)
      .to.equal(' ')
    expect(vm.slideView.time.fontWeight)
      .to.equal(' ')
  })

  it('Ensure meta information is correct', () => {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slideView.meta.template)
      .to.equal('DefaultSlideTemplate')
      /* test additional time attributes */
    expect(vm.slideView.meta.timeout)
      .to.equal('40')
    expect(vm.slideView.meta.repeatable)
      .to.equal(false)
    expect(vm.slideView.meta.startDate)
      .to.equal('2018-07-26')
    expect(vm.slideView.meta.endDate)
      .to.equal('2018-08-01')
  })
})
