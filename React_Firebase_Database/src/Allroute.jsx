import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import PrivateRoutes from "./components/Privateroutes"





const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoutes>
          <Dashboard />
          </PrivateRoutes>
          } />
        {/* <Route path="/" element={<Navbar />} /> */}
        </Routes>
    </div>
  )
}

export default Allroute