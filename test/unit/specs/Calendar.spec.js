import Vue from 'vue'
import Calendar from '@/components/Calendar'

describe.only('Calendar.vue', function () {
  const Constructor = Vue.extend(Calendar)
  const vm = new Constructor().$mount()

  // Following test is for method "addOneday".
  // There are three test cases in total: day change, month change and year change
  it('Test addOneday Method', (done) => {
    // Fake Slide
    const fakeSlide = {
      date: {
        content: '2018-01-01'
      }
    }
    // To check whether the one day is added correctly
    // Should be "2018-01-02"
    expect((vm.addOneDay(fakeSlide)).toDateString)
      .to.equal(('2018-01-02').toDateString)

    // Now testing whether the month can be changed correctly.
    // Change the date to '2018-01-31'
    fakeSlide.date.content = '2018-01-31'
    expect(fakeSlide.date).to.have.property('content', '2018-01-31')

    // the computed property will get triggered on the nex tick
    Vue.nextTick(() => {
      // Check the date again
      expect((vm.addOneDay(fakeSlide)).toDateString)
        .to.equal(('2018-02-01').toDateString)
    })

    // Now testing whether the month can be changed correctly.
    // Change the date to '2019-01-01'
    fakeSlide.date.content = '2018-12-31'
    expect(fakeSlide.date).to.have.property('content', '2018-12-31')

    // the computed property will get triggered on the nex tick
    Vue.nextTick(() => {
      // Check the date again
      expect((vm.addOneDay(fakeSlide)).toDateString)
        .to.equal(('2019-01-01').toDateString)
      // must call done() to tell mocha we are done testing this aysnc statement
      done()
    })
  })
})
