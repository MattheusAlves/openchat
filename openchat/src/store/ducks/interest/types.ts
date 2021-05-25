export enum InterestActions {
  ADD_INTEREST = '@interest/ADD_INTEREST',
  REMOVE_INTEREST = '@interest/REMOVE_INTEREST'
}

export interface InterestData {
  title: string
  id: number
}

export interface InterestState {
  readonly interests: InterestData[]
  readonly error: boolean
  readonly loading: boolean
}
