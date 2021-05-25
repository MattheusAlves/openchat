import { combineReducers } from 'redux'
import interestsReducer from './interest'
import userReducer from './user'

const rootReducer = combineReducers({
  interestState: interestsReducer,
  userState: userReducer
})

export default rootReducer
