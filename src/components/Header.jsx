import React from 'react'
import {  Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <div>
        <h1>my Header</h1>
      <NavLink to='/' className={({isActive})=>isActive ? 'nav-link-active': ''}>Home</NavLink>
      <br></br>
      <Link to='/users'>Users</Link>
    </div>
  )
}
