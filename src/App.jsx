import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Benefit from './components/Benefit'
import Testimoni from './components/Testimoni'
import Daftar from './components/Daftar'

function App() {
  return(
    <>
    <Hero/>
    <About/>
    <Benefit/>
    <Testimoni/>
    <Daftar/>
    </>
  )
}

export default App
