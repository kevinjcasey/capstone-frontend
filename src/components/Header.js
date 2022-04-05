import React from 'react'

import { Link } from 'react-router-dom'

//BULMA
import 'bulma/css/bulma.min.css';

const Header = () => {
  return (
    <div className="has-navbar-fixed-top is-dark">
      <nav className="navbar-end">
      <p class="control">
            <a class="button is-link" target="_blank" href="https://github.com/kevinjcasey">
              {/* <span class="icon">
                <i class="fa-brands fa-github"></i>
              </span> */}
              <span>
                GitHub
              </span>
            </a>
          </p>
      </nav>
    </div>
  )
}

export default Header