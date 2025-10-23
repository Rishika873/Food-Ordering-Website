import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Home'
import LoginPage from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SignupPage from './components/Signup';
function App() {
  return (
    <>
      {/* <Navbar/> */}
       <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
    </>
  )
}
export default App
