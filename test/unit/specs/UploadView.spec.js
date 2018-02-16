import Vue from 'vue'
import Upload from '@/components/UpLoadView'

describe('UploadView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Upload)
    const vm = new Constructor().$mount()
    const input = vm.$el.getElementsByTagName('input')[0]
    expect(input.type)
      .to.equal('file')
    expect(input.accept)
      .to.equal('image/*')
  })
})
