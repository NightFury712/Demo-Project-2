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
          <ul className="top-nav-content">
            <li className="top-nav-item">
              {/* <Link> */}
              <span>Dashboard</span>
              {/* </Link> */}
            </li>
            <li className="top-nav-item">
              <Link to="/project/home">
                <span>Project</span>
              </Link>
            </li>
            <li className="top-nav-item">Recently Viewed</li>
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