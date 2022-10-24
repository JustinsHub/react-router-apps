import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar:React.FC = () => {
  return (
    <section className="Navbar__container">
      <div className="Navbar__links">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="Navbar__links">
        <NavLink to="/stock-market">Stock Market</NavLink>
      </div>
    </section>
  )
}

export default Navbar