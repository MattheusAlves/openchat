import interestReducer from '@/store/ducks/interest'
import { InterestActions } from '@/store/ducks/interest/types'
import store from '@/store'

describe('Interest Reducer', () => {
  const fakeInterest = { id: 1, title: 'fake-interest' }
  const fakeState = {
    loading: false,
    error: false,
    interests: [{ id: 1, title: 'fake-interest' }]
  }
  beforeEach(() => {
    fakeState.interests = [{ id: 1, title: 'fake-interest' }]
  })
  it('ensure action of type ADD_INTEREST return state with correct values', () => {
    const action = {
      type: InterestActions.ADD_INTEREST,
      payload: fakeInterest
    }
    const newState = interestReducer(undefined, action)
    expect(newState).toEqual(fakeState)
  })
  it('ensure action of type REMOVE_INTEREST remove the correct values', () => {
    const action = {
      type: InterestActions.REMOVE_INTEREST,
      payload: fakeInterest
    }
    const newState = interestReducer(fakeState, action)
    expect(newState.interests).toEqual([])
  })
  it('ensure action with unknow type will not throw an error', () => {
    const action = {
      type: 'fake-type'
    }
    const newState = interestReducer(undefined, action)
    expect(function () {
      interestReducer(undefined, action)
    }).not.toThrow()
    expect(newState).toEqual(store.getState().interestState)
  })
  it('ensures that the state can have a maximum of 3 interests', () => {
    fakeState.interests = [
      { id: 1, title: 'fake-interest' },
      { id: 2, title: 'fake-interest2' },
      { id: 3, title: 'fake-interest3' }
    ]
    const action = {
      type: InterestActions.ADD_INTEREST,
      payload: { id: 1, title: 'fake-interest1' }
    }
    const newState = interestReducer(fakeState, action)

    expect(newState.interests.length).toBe(3)
    expect(newState).toEqual(fakeState)
  })
  it('ensure the state cannot have duplicated interests', () => {
    const action = {
      type: InterestActions.ADD_INTEREST,
      payload: { id: 1, title: 'fake-interest1' }
    }
    const newState = interestReducer(fakeState, action)

    expect(newState).toEqual(fakeState)
  })
})
