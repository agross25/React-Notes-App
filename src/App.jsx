import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Wrapper from './pages/Wrapper'

function App() {
  useEffect(() => {
    document.title = "Notes App"
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* login */}
        <Route path="/login" element={<Login />} />
        
        {/* signup */}
        <Route path="/signup" element={<Signup />} />     

        {/* dashboard */}
        <Route path="/dashboard" element={
          // protects Dashboard from displaying if not logged in
          <Wrapper>
            <Dashboard />
          </Wrapper>} 
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
