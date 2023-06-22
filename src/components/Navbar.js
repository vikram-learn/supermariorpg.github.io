import React from 'react'
import logo from '../img/logo black (1).png'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="School Logo"/>
        </div>
        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/">Blogs</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </div>
        <div className="nav-addmission">
          <button className="btn btn-primary">Explore</button>
        </div>
      </nav>
    </header>
  )
}
