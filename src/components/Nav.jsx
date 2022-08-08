import React from 'react'
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
      <nav>
            <ul className="nav nav-tabs" style={{ backgroundColor : "#ED1D24" }}>
                  <li className='nav-item'><Link className="nav-link" style={{ color : "white" }} to="/">Home</Link></li>
                  <li className='nav-item'><Link className="nav-link" style={{ color : "white" }} to="/about">About</Link></li>
            </ul>
      </nav>
  )
}

Nav.propTypes = {}

export default Nav