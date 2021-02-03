import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/category/business'}>Business</Link>
      </li>
      <li>
        <Link to={'/category/Entertainment'}>Entertainment</Link>
      </li>
      <li>
        <Link to={'/category/General'}>General</Link>
      </li>
      <li>
        <Link to={'/category/Health'}>Health</Link>
      </li>
      <li>
        <Link to={'/category/Science'}>Science</Link>
      </li>
      <li>
        <Link to={'/category/Sports'}>Sports</Link>
      </li>
      <li>
        <Link to={'/category/Technology'}>Technology</Link>
      </li>
    </ul>
  </div>
}