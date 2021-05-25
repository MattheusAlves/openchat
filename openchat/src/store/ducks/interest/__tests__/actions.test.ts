import { addInterest } from '@/store/ducks/interest/actions'
import { InterestActions } from '@/store/ducks/interest/types'

describe('Add interest', () => {
  const fakeInterest = { id: 1, title: 'fake-interest' }
  const action = addInterest(fakeInterest)
  it('should ensure the correct type', () => {
    expect(action.type).toEqual(InterestActions.ADD_INTEREST)
  })
  it('should ensure the correct payload', () => {
    expect(action.payload).toEqual(fakeInterest)
  })
})
