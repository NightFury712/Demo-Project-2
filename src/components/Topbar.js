import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Topbar.css'

const Topbar = () => {
  return (
    <div className="header">
      <div className="header-left">
        <nav className="top-nav">
          <div className="logo">
            <i className="fas fa-city"></i>
          </div>
          <ul className="top-nav-menu">
            <li className="top-nav-item">
              {/* <Link> */}
              <Link href="#">Dashboard</Link>
              {/* </Link> */}
            </li>
            <li className="top-nav-item">
              <Link href="#">Projects</Link>
              <div className="dropdown-box project">

              </div>
            </li>
            <li className="top-nav-item">
              <Link href="#">Recently Viewed</Link>
              <div className="dropdown-box recent"></div>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>

          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Topbar;