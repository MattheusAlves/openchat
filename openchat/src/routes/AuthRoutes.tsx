import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from 'react-router-dom'
import Auth from '@/pages'
import React from 'react'

export default function AuthRoutes(): JSX.Element & RouteProps {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
