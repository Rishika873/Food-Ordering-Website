import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Home'
import LoginPage from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SignupPage from './components/Signup';
import FoodDetailsPage from './components/FoodDetails';
import CartPage from './components/CartPage';
import { ToastContainer } from 'react-toastify';
import CheckoutPage from './components/Checkout';

function App() {
  return (
    <>
      {/* <Navbar/> */}
       <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
       <Route path="/food/:name" element={<FoodDetailsPage />} />
    

      </Routes>
             <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
    </>
  )
}
export default App
