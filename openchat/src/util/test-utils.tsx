import React from 'react'
import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '@/store/ducks/interest'

interface Props {
  initialState: any
  store?: Store
  children: JSX.Element
}
function Render({
  children,
  initialState,
  store = createStore(rootReducer, initialState)
}: Props): JSX.Element {
  return <Provider store={store}>{children}</Provider>
}

export default Render
