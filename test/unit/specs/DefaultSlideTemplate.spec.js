import Vue from 'vue'
import DefaultSlideTemplate from '@/components/Templates/DefaultSlideTemplate'

describe('DefaultSlideTemplate.vue', function () {
  let vm // <- component object to be redefined
  const Constructor = Vue.extend(DefaultSlideTemplate)
  /* definition of props to be passed down */
  const props = {
    carousel: 0,
    slide: {
      images: [
        { src: 'https://www.usask.ca/programs/images/college.jpg' },
        { src: 'http://csee2015.usask.ca/images/3611278449_e68f87520b_b.jpg' }
      ],
      title: {
        content: 'Sherbrooke Event Title',
        fontColor: 'Blue',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Oblique'
      },
      description: {
        content: 'Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.',
        fontColor: 'Red',
        fontSize: 'Small',
        fontStyle: 'Normal',
        fontWeight: 'Lighter'
      },
      date: {
        content: '2018-03-07',
        fontColor: 'Green',
        fontSize: 'Medium',
        fontStyle: 'Italic',
        fontWeight: 'Bolder'
      },
      time: {
        content: '11:05 AM',
        fontColor: 'Yellow',
        fontSize: 'Smaller',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      meta: {
        template: 'DefaultSlideTemplate',
        timeout: '90',
        repeatable: true,
        startDate: '2018-07-25',
        endDate: '2018-09-01'
      }
    }
  }

  // reset the test case
  beforeEach('Reset the contents to the preset style of props', function () {
    // pass data into propsData
    vm = new Constructor({ propsData: props })
  })

  it('Title contents should be rendered correctly', function () {
    vm.$mount()
    /* test contents in the title */
    const title = vm.$el.querySelector('h2.display-3')
    expect(vm.$props.slide.title.content).to.equal('Sherbrooke Event Title')
    expect(title.textContent).to.equal(vm.$props.slide.title.content)

    expect(vm.$props.slide.title.fontColor).to.equal('Blue')

    expect(vm.$props.slide.title.fontSize).to.equal('Large')
    // expect(title.textContent).to.equal(vm.$props.slide.title.fontSize)

    expect(vm.$props.slide.title.fontStyle).to.equal('Normal')
    // expect(title.textContent).to.equal(vm.$props.slide.title.fontStyle)

    expect(vm.$props.slide.title.fontWeight).to.equal('Oblique')
    // expect(title.textContent).to.equal(vm.$props.slide.title.fontWeight)
  })

  it('Time and date content should be rendered corrctly', function () {
    vm.$mount()
    /* Test the contents in the header */

    /* testing time */
    const header = vm.$el.querySelector('h2.display-2')
    expect(vm.$props.slide.time.content).to.equal('11:05 AM')
    expect(header.textContent).to.contain(vm.$props.slide.time.content)

    expect(vm.$props.slide.time.fontColor).to.equal('Yellow')

    expect(vm.$props.slide.time.fontSize).to.equal('Smaller')

    expect(vm.$props.slide.time.fontStyle).to.equal('Normal')

    expect(vm.$props.slide.time.fontWeight).to.equal('Bold')

    /* testing date */
    expect(vm.$props.slide.date.content).to.equal('2018-03-07')
    expect(header.textContent).to.contain(vm.$props.slide.date.content)

    expect(vm.$props.slide.date.fontColor).to.equal('Green')

    expect(vm.$props.slide.date.fontSize).to.equal('Medium')

    expect(vm.$props.slide.date.fontStyle).to.equal('Italic')

    expect(vm.$props.slide.date.fontWeight).to.equal('Bolder')
  })

  /* testing description data */
  it('Event description contents should be rendered correctly', function () {
    vm.$mount()
    /* test contents in the title */
    const desc = vm.$el.querySelector('h3.headline')
    expect(vm.$props.slide.description.content).to.equal('Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.')
    expect(desc.textContent).to.contain(vm.$props.slide.description.content)

    expect(vm.$props.slide.description.fontColor).to.equal('Red')

    expect(vm.$props.slide.description.fontSize).to.equal('Small')

    expect(vm.$props.slide.description.fontStyle).to.equal('Normal')

    expect(vm.$props.slide.description.fontWeight).to.equal('Lighter')
  })

  /* testing meta data */
  it('meta data contents should be rendered correctly', function () {
    vm.$mount()

    expect(vm.$props.slide.meta.template).to.equal('DefaultSlideTemplate')

    expect(vm.$props.slide.meta.timeout).to.equal('90')

    expect(vm.$props.slide.meta.repeatable).to.equal(true)

    expect(vm.$props.slide.meta.startDate).to.equal('2018-07-25')

    expect(vm.$props.slide.meta.endDate).to.equal('2018-09-01')
  })

  /* test carousel components */
  // it('Carousel components should be rendered correctly', function () {
  //   vm.$mount()
  //   /* test contents in the title */
  //   const img = vm.$el.querySelector('carouselElements')
  //   expect(vm.$props.slide.images.src[0]).to.equal('https://www.usask.ca/programs/images/college.jpg')
  //   expect(img.textContent).to.contain(vm.$props.slide.images.src[0])
  // })
})

/* Unit tests expecting contents of the prop values of the DEFAULT content values */
describe('DefaultSlideTemplate.vue', function () {
  it('Title data contents should be correct', function () {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slide.title.content)
      .to.equal('Sherbrooke Event Title')
      /* test additional title attributes */
    expect(vm.slide.title.fontColor)
      .to.equal(' ')
    expect(vm.slide.title.fontSize)
      .to.equal(' ')
    expect(vm.slide.title.fontStyle)
      .to.equal(' ')
    expect(vm.slide.title.fontWeight)
      .to.equal(' ')
  })

  it('Event body data contents should be correct', function () {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slide.description.content)
      .to.equal('Sherbrooke event slide body. Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.')
      /* test additional event body attributes */
    expect(vm.slide.description.fontColor)
      .to.equal(' ')
    expect(vm.slide.description.fontSize)
      .to.equal(' ')
    expect(vm.slide.description.fontStyle)
      .to.equal(' ')
    expect(vm.slide.description.fontWeight)
      .to.equal(' ')
  })

  it('Valid image files should be inside the carousel', function () {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slide.images[0].src)
      .to.contain('.jpg')
    expect(vm.slide.images[1].src)
      .to.contain('.jpg')
  })

  it('The correct date should be displayed on the slide', function () {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slide.date.content)
      .to.equal('2018-05-25')
      /* test additional date attributes */
    expect(vm.slide.date.fontColor)
      .to.equal(' ')
    expect(vm.slide.date.fontSize)
      .to.equal(' ')
    expect(vm.slide.date.fontStyle)
      .to.equal(' ')
    expect(vm.slide.date.fontWeight)
      .to.equal(' ')
  })

  it('The correct time should be displayed on the slide', function () {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slide.time.content)
      .to.equal('07:00 PM')
      /* test additional time attributes */
    expect(vm.slide.time.fontColor)
      .to.equal(' ')
    expect(vm.slide.time.fontSize)
      .to.equal(' ')
    expect(vm.slide.time.fontStyle)
      .to.equal(' ')
    expect(vm.slide.time.fontWeight)
      .to.equal(' ')
  })

  it('Ensure meta information is correct', function () {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.slide.meta.template)
      .to.equal('DefaultSlideTemplate')
      /* test additional time attributes */
    expect(vm.slide.meta.timeout)
      .to.equal('40')
    expect(vm.slide.meta.repeatable)
      .to.equal(false)
    expect(vm.slide.meta.startDate)
      .to.equal('2018-07-26')
    expect(vm.slide.meta.endDate)
      .to.equal('2018-08-01')
  })

  it('Ensure computation function is correct to compute slide', function (done) {
    const Constructor = Vue.extend(DefaultSlideTemplate)
    const vm = new Constructor().$mount()
    expect(vm.carouselInterval)
      .to.equal(20000)

      // Account for computed property
    Vue.nextTick(() => {
      expect(vm.carouselInterval)
        .to.equal(20000)
      done()
    })
  })
})
