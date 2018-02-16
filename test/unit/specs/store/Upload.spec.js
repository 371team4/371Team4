import index from '../../../../src/store/modules/upload/index'

const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // 模拟提交
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)
      if (payload) {
        expect(mutation.payload).to.deep.equal(payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // 用模拟的 store 和参数调用 action
  action({ commit, state }, ...args)

  // 检查是否没有 mutation 被 dispatch
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

var f = new Blob()
f.name = 'img1.jpg'
f.size = 100
f.lastModifiedDate = new Date()

describe('index', () => {
  it('uploadSingleFile', done => {
    testAction(index.actions.uploadSingleFile, [f], {}, [
      { type: 'SET_IS_UPLOADING', payload: true },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: 100 },
      { type: 'SET_BYTES_UPLOADED', payload: 100 },
      { type: 'SET_BYTES_REMAINING', payload: 0 },
      { type: 'SET_IS_UPLOADING', payload: false },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: 0 },
      { type: 'SET_CANCEL_UPLOAD', payload: false }
    ], done)
  })
})
