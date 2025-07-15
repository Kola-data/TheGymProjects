import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Plans from './Components/Plans'
import Locations from './Components/Locations'
import Testimonials from './Components/Testimonials'


function App() {
  
  return (
    <>
      <Header />
      <Home />
      <Plans />
      <Locations />
      <Testimonials />
    </>
  )
}

export default App
