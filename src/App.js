import React from 'react'
import LandingPage from './Pages/LandingPage.js'
import ApiState from './Context/Datacontext.js'
function App() {
  return (
  <ApiState>
      <LandingPage />
  </ApiState>
  )
}

export default App