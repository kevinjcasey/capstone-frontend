import React from 'react'

import { Link } from 'react-router-dom'

//BULMA
import 'bulma/css/bulma.min.css';

const Header = () => {
  return (
    <div className="has-navbar-fixed-top is-dark">
      <nav className="navbar-end">
        <Link className="navbar=item" to="/">Home</Link>
        <Link to="/add">Contribute</Link>
      </nav>
    </div>
  )
}

export default Header