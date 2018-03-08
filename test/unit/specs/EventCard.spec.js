import Vue from 'vue'
import EventCard from '@/components/EventCard'

describe('EventCard.vue', () => {
  it('can has correct properties', () => {
    const Constructor = Vue.extend(EventCard)
    const vm = new Constructor().$mount()

    expect(vm.event.name).to.equal('Lorem et proident')
    expect(vm.event._id).to.equal('5a700ee29c61ea4f72cd23e2')
    expect(vm.event.thumbnail).to.equal('http://placehold.it/32x32')
    expect(vm.event.tags.length).to.equal(5)
  })
})
