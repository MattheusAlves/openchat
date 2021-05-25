import { InterestActions, InterestData } from './types'

interface ActionReturnType<T, D = null> {
  type: T
  payload?: D
}
export const addInterest = (
  data: InterestData
): ActionReturnType<InterestActions.ADD_INTEREST, InterestData> => {
  return {
    type: InterestActions.ADD_INTEREST,
    payload: data
  }
}

export const removeInterest = (
  data: InterestData
): ActionReturnType<InterestActions.REMOVE_INTEREST, InterestData> => ({
  type: InterestActions.REMOVE_INTEREST,
  payload: data
})
