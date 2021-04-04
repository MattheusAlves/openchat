import React from 'react'
import Routes from '@/routes/AuthRoutes'
import Header from '@/components/shared/Header'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  )
}

export default App
