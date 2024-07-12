import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default Navbar