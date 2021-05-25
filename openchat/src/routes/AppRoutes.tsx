import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from 'react-router-dom'
import Chat from '@/pages/chat'

export default function AuthRoutes(): JSX.Element & RouteProps {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Redirect from="/" to="/chat" />
      </Switch>
    </BrowserRouter>
  )
}
