import React from 'react'
import { connect } from 'react-redux'

import AuthRoutes from '@/routes/AuthRoutes'
import AppRoutes from '@/routes/AppRoutes'

import Header from '@/components/shared/Header'

import '@/styles/global.scss'
import { ApplicationState } from './store'
import { UserState } from './store/ducks/user/types'

function App(props: UserState): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div className="base-layout">
        {props.user.name ? <AppRoutes /> : <AuthRoutes />}
      </div>
    </div>
  )
}
const mapStateToProps = (state: ApplicationState) => {
  return { ...state.userState }
}

export default connect(mapStateToProps)(App)
