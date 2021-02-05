import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [menu, updateMenu] = useState(false)
  const {burger, updateBurger} = useState(false)

  return <div className="navbar" style={{ backgroundColor: '#595f6c', height: 70 }}>
    <div className="navbar-brand">
      <img style={{ height: 70, width: 70 }} src="https://i.imgur.com/BzrYmBZ.png" />
      <a onClick={() => updateMenu(!menu)} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    </div>
    <div id="mainNavbar" className={`navbar-menu ${menu ? "is-active" : ''} is-spaced px-3`}>
      <div className="navbar-start">
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/'}>Home</Link></div>
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/category/Business'}>Business</Link></div>
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/category/Entertainment'}>Entertainment</Link></div>
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/category/Health'}>Health</Link></div>
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/category/Science'}>Science</Link></div>
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/category/Sports'}>Sports</Link></div>
        <div style={{ fontSize: 22 }} className="navbar-item"><Link to={'/project-2/category/Technology'}>Technology</Link></div>
      </div>
      <div className="navbar-end"></div>
    </div>
  </div>
}