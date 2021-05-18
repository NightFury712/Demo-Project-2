import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Topbar.css'

const Topbar = () => {
  const [statePrj, setStatPrj] = useState(true);
  const [stateRecent, setStateRecent] = useState(true);
  const clickChange = (e) => {
    if(e.target.className === "top-nav-project") {
      setStatPrj(!statePrj);
      setStateRecent(true);
    } else {
      setStateRecent(!stateRecent);
      setStatPrj(true);
    }
      
      
  }

  return (
    <div className="header">
      <div className="header-left">
        <nav className="top-nav">
          <div className="logo">
            <i className="fas fa-city"></i>
          </div>
          <ul className="top-nav-menu">
            <li className="top-nav-item">
              <Link className="dashboard-link" to="/dashboard">
              <span className="dashboard-link-content">Dashboard</span>
              </Link>
            </li>
            <li className="top-nav-item">
              <button className="top-nav-project" onClick={clickChange}>Projects</button>
              <div className={`dropdown-box project ${statePrj ? 'is_opened' : ''}`}>
                <div className="dropdown-box-header">
                  <div className="dropdown-box-title">Projects</div>
                </div>
                <div className="search-box dropdown-box-search">
                  <i className="fas fa-search"></i>
                  <input type="search" className="search-box-input" placeholder="Search projects"></input>
                  <span className="dropdown-box-search-input-focusline"></span>
                </div>
                <div className="dropdown-box-content">
                  <ul className="data-list">
                    <li className="data-list-item">
                      <Link className="data-list-link" to="#">
                        <span className="data-list-icon">
                          <i className="far fa-building"></i>
                        </span>
                        <span className="data-list-summary">ProjectName</span>
                        <span className="data-list-key">(123456)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="top-nav-item">
              <button id="addItemLink" onClick={clickChange}>
                <i className="fas fa-plus-circle"></i>
              </button>
              <ul className={`dropdown-menu ${stateRecent ? 'is_opened' : ''}`}>
                <li className="dropdown-menu-item addIssue">
                  <button className="dropdown-menu-link">Add Issue</button>
                </li>
                <li className="dropdown-menu-item addProject">
                  <button className="dropdown-menu-link">Add Project</button>
                </li>
                <li className="dropdown-menu-item addUser">
                  <button className="dropdown-menu-link">Add User</button>
                </li>
              </ul>
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