import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Special from './pages/Special'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/devsec-special' element={<Special/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
