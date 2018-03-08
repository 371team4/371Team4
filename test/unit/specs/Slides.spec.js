import Vue from 'vue'
import Slides from '@/components/Slides'

describe('Slides.vue', () => {
  let Constructor, vm, mockSlides

  before(() => {
    Constructor = Vue.extend(Slides)
    vm = new Constructor().$mount()

    mockSlides = [
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

    vm.slides = mockSlides
  })

  describe('Saved Slides', () => {
    it('can render correct contents', () => {
      expect(vm.slides).to.equal(mockSlides)
    })
  })

  describe('Search Bar', () => {
    it('should return a no results found slide given "hello"', () => {
      vm.searchString = 'hello'
      let searchResult = vm.filteredSlides

      expect(searchResult.length).to.equal(1)

      expect(searchResult[0].title.content).to.equal('None Found')
      expect(searchResult[0].images[0].src).to.equal('https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png')
    })

    it('should return all saved slides', () => {
      vm.searchString = ''
      let searchResults = vm.filteredSlides

      expect(searchResults).to.equal(vm.slides)
    })

    it('should return slides containing "Slide"', () => {
      vm.searchString = 'Slide'
      let searchResults = vm.filteredSlides

      expect(searchResults.length).to.equal(2)

      expect(searchResults[0]).to.equal(vm.slides[0])
      expect(searchResults[1]).to.equal(vm.slides[1])
    })

    it('should return slides containing "sliDe"', () => {
      vm.searchString = 'sliDe'
      let searchResults = vm.filteredSlides

      expect(searchResults.length).to.equal(2)

      expect(searchResults[0]).to.equal(vm.slides[0])
      expect(searchResults[1]).to.equal(vm.slides[1])
    })

    it('should return a no results found slide given "description"', () => {
      vm.searchString = 'description'
      let searchResult = vm.filteredSlides

      expect(searchResult.length).to.equal(1)

      expect(searchResult[0].title.content).to.equal('None Found')
      expect(searchResult[0].images[0].src).to.equal('https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png')
    })
  })
})
