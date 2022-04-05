import React from 'react'

import { Link } from 'react-router-dom'


//BULMA
import 'bulma/css/bulma.min.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar is-fixed-bottom navbar-start">
      <p class="control">
            <a class="button is-dark" target="_blank" href="https://github.com/kevinjcasey">
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