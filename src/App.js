import React from 'react'
import LandingPage from './Pages/LandingPage.js'
import ApiState from './Context/Datacontext.js'
function App() {
  return (
  <ApiState>
    {/* this is landing page */}
      <LandingPage />
      {/* landing page */}
  </ApiState>
  )
}

export default App