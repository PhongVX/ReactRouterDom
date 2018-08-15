import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink exact  to='/' activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/todo' activeClassName="active">Todo</NavLink></li>
        <li><NavLink to='/roster' activeClassName="active">Roster</NavLink></li>
        <li><NavLink to='/schedule' activeClassName="active">Schedule</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
