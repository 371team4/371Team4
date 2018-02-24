import Vue from 'vue'
import Slides from '@/components/Slides'

describe('Slides.vue', () => {
  let Constructor, vm

  before(() => {
    Constructor = Vue.extend(Slides)
    vm = new Constructor().$mount()
  })

  describe('Saved Slides', () => {
    it('can render correct contents', () => {
      expect(vm.slides.length).to.equal(6)
    })
  })

  describe('Search Bar', () => {
    it('should return a no results found slide given "hello"', () => {
      vm.searchString = 'hello'
      let searchResult = vm.filteredSlides

      expect(searchResult.length).to.equal(1)

      expect(searchResult[0].name).to.equal('None Found')
      expect(searchResult[0].thumbnail).to.equal('https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png')
    })

    it('should return all saved slides', () => {
      vm.searchString = ''
      let searchResults = vm.filteredSlides

      expect(searchResults).to.equal(vm.slides)
    })

    it('should return slides containing "lab"', () => {
      vm.searchString = 'lab'
      let searchResults = vm.filteredSlides

      expect(searchResults.length).to.equal(2)

      expect(searchResults[0]).to.equal(vm.slides[3])
      expect(searchResults[1]).to.equal(vm.slides[5])
    })

    it('should return a no results found slide given "sub heading"', () => {
      vm.searchString = 'sub heading'
      let searchResult = vm.filteredSlides

      expect(searchResult.length).to.equal(1)

      expect(searchResult[0].name).to.equal('None Found')
      expect(searchResult[0].thumbnail).to.equal('https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png')
    })
  })
})
