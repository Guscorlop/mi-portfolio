import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
function App() {

  return (
    <div> 
      <Home /> 
      <About />
      <Projects />
    </div>
  )
}

export default App
