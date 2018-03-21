import Vue from 'vue'
import sinon from 'sinon'
import Slides from '@/components/Slides'
import { store } from '@/store'
import router from '@/router'
import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

const mockSlides = [
  {
    images: [
      {
        src: 'https://picsum.photos/200/300/?image=92'
      },
      {
        src: 'https://picsum.photos/200/300/?image=19'
      },
      {
        src: 'https://picsum.photos/200/300/?image=14'
      },
      {
        src: 'https://picsum.photos/200/300/?image=94'
      }
    ],
    title: {
      content: 'Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    description: {
      content: 'This is the description for Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    date: {
      content: '2018-02-15',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    time: {
      content: '13:05',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    meta: {
      template: 'DefaultSlideTemplate',
      timeout: '40',
      repeatable: false,
      startDate: '2018-02-16',
      endDate: '2018-03-01'
    }
  },
  {
    images: [
      {
        src: 'https://picsum.photos/200/300/?image=92'
      },
      {
        src: 'https://picsum.photos/200/300/?image=19'
      },
      {
        src: 'https://picsum.photos/200/300/?image=14'
      },
      {
        src: 'https://picsum.photos/200/300/?image=94'
      }
    ],
    title: {
      content: 'Slide2 with a longer title',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    description: {
      content: 'This is the description for Slide2, with some additional text at the end',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    date: {
      content: '2018-02-15',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    time: {
      content: '13:05',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    meta: {
      template: 'DefaultSlideTemplate',
      timeout: '40',
      repeatable: false,
      startDate: '2018-02-16',
      endDate: '2018-03-01'
    }
  },
  {
    images: [
      {
        src: 'https://picsum.photos/200/300/?image=92'
      },
      {
        src: 'https://picsum.photos/200/300/?image=19'
      },
      {
        src: 'https://picsum.photos/200/300/?image=14'
      },
      {
        src: 'https://picsum.photos/200/300/?image=94'
      }
    ],
    title: {
      content: 'The Last One',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    description: {
      content: 'This is the description for Slide3',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    date: {
      content: '2018-02-15',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    time: {
      content: '13:05',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    meta: {
      template: 'DefaultSlideTemplate',
      timeout: '40',
      repeatable: false,
      startDate: '2018-02-16',
      endDate: '2018-03-01'
    }
  }
]

describe('Slides.vue', function () {
  let vm

  before(function (done) {
    const Constructor = Vue.extend(Slides)
    vm = new Constructor({ store, router }).$mount()
    vm.slides = mockSlides
    // need to wait for next tick so slides can be created
    Vue.nextTick(() => {
      done()
    })
  })

  describe('Test saved slides', function () {
    it('should render correct contents', function () {
      expect(vm.slides).to.equal(mockSlides)
    })
  })

  describe('Test search bar', function () {
    const notFound = {
      title: { content: 'None Found' },
      description: { content: 'No matching slides were found' },
      images: [{ src: 'https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png' }]
    }

    it('should return a no results found slide given "hello"', function () {
      vm.searchString = 'hello'
      let searchResult = vm.filteredSlides

      expect(searchResult.length).to.equal(1)

      expect(searchResult[0]).to.eql(notFound)
    })

    it('should return all saved slides', function () {
      vm.searchString = ''
      let searchResults = vm.filteredSlides

      expect(searchResults).to.equal(vm.slides)
    })

    it('should return slides containing "Slide"', function () {
      vm.searchString = 'Slide'
      let searchResults = vm.filteredSlides

      expect(searchResults.length).to.equal(2)

      expect(searchResults[0]).to.equal(vm.slides[0])
      expect(searchResults[1]).to.equal(vm.slides[1])
    })

    it('should return slides containing "sliDe"', function () {
      vm.searchString = 'sliDe'
      let searchResults = vm.filteredSlides

      expect(searchResults.length).to.equal(2)

      expect(searchResults[0]).to.equal(vm.slides[0])
      expect(searchResults[1]).to.equal(vm.slides[1])
    })

    it('should return a no results found slide given "description"', function () {
      vm.searchString = 'description'
      let searchResult = vm.filteredSlides

      expect(searchResult.length).to.equal(1)

      expect(searchResult[0]).to.eql(notFound)
    })
  })

  describe('Test goToSlide() method', function () {
    it('should commit current when a slide is clicked', function () {
      sinon.spy(vm.$store, 'commit')
      const cardHeader = vm.$el.querySelector('[data-test-attr=\'slideCard_1\'] .headline')
      cardHeader.click()

      expect(vm.$store.commit.firstCall.args).to.deep.equal([CURRENT_SLIDE.SET, mockSlides[1]])
    })

    it('should navigate to the desginer view', function () {
      sinon.spy(vm.$router, 'push')
      const cardHeader = vm.$el.querySelector('[data-test-attr=\'slideCard_1\'] .headline')
      cardHeader.click()

      expect(vm.$router.push.firstCall.args).to.deep.equal([{
        path: '/designer', // the router injects this into the param
        name: 'Designer',
        params: {
          slide: mockSlides[1]
        }
      }])
    })
  })
})
