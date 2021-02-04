import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div className="navbar is-dark" style={{ height:80 }}>
    <div className="navbar-brand">
      <img style={{ height: 80, width: 80 }} src="https://i.imgur.com/BzrYmBZ.png" />
    </div>
    <div id="mainNavbar" className="navbar-menu is-spaced px-3">
      <div className="navbar-start">
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/'}>Home</Link></div>
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/category/Business'}>Business</Link></div>
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/category/Entertainment'}>Entertainment</Link></div>
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/category/Health'}>Health</Link></div>
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/category/Science'}>Science</Link></div>
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/category/Sports'}>Sports</Link></div>
        <div style={{ fontSize: 25 }} className="navbar-item"><Link to={'/category/Technology'}>Technology</Link></div>
      </div>
      <div className="navbar-end"></div>
    </div>
  </div>
}