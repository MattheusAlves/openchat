import { InterestState, InterestActions, InterestData } from './types'
import { Reducer } from 'redux'
import { produce } from 'immer'

const INITIAL_STATE: InterestState = {
  interests: [],
  loading: false,
  error: false
}
const reducer: Reducer<InterestState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InterestActions.ADD_INTEREST: {
      const newInterests = handleAddInterest(state.interests, action)
      return {
        ...state,
        loading: false,
        error: false,
        interests: [...newInterests]
      }
    }
    case InterestActions.REMOVE_INTEREST: {
      const newInterests = handleRemoveInterest(state.interests, action)
      return {
        ...state,
        loading: false,
        error: false,
        interests: [...newInterests]
      }
    }
    default:
      return state
  }
}

const handleAddInterest = (interests: InterestData[], action) => {
  const alreadyIncluded = !interests.every(
    interest => interest.id !== action.payload.id
  )
  return produce(interests, draft => {
    if (interests.length < 3 && !alreadyIncluded) {
      draft.push(action.payload)
    }
  })
}

const handleRemoveInterest = (interests: InterestData[], action) => {
  return produce(interests, draft => {
    return draft.filter(interest => interest.id !== action.payload.id)
  })
}
export default reducer
