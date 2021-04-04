import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom'
import Auth from '@/pages'

export default function AuthRoutes(): JSX.Element & RouteProps {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
