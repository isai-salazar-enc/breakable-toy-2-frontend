// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* ToDo: Add necessary pages */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
