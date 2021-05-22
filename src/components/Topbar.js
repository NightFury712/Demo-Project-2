import React, {useContext} from 'react'
import '../css/Topbar.css'
import ProjectListItem from '../items/ProjectListItem'
import { AddContext } from '../provider/AddContext'

const Topbar = () => {
  const handler = useContext(AddContext);

  // const changeFormAddIssue = () => {
  //   window.location.href = '/project/add-issue'
  // }
  const openDashboard = () => {
    window.location.href = '/dashboard'
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
              <button className="dashboard-link" onClick={openDashboard}>
                <span className="dashboard-link-content">Dashboard</span>
              </button>
            </li>
            <li className="top-nav-item">
              <button className="top-nav-project" onClick={handler.changestatePrj}>Projects</button>
              <div className={`dropdown-box project ${handler.statePrj ? 'is_opened' : ''}`}>
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
                    <ProjectListItem />
                  </ul>
                </div>
              </div>
            </li>
            <li className="top-nav-item">
              <button id="addItemLink" onClick={handler.changeStateRecent}>
                <i className="fas fa-plus-circle"></i>
              </button>
              <ul className={`dropdown-menu ${handler.stateRecent ? 'is_opened' : ''}`}>
                <li className="dropdown-menu-item addIssue">
                  <button className="dropdown-menu-link" onClick={handler.changeFormAddIssue}>Add Issue</button>
                </li>
                <li className="dropdown-menu-item addProject">
                  <button className="dropdown-menu-link" onClick={handler.changeFormAddPrj}>Add Project</button>
                </li>
                <li className="dropdown-menu-item addUser">
                  <button className="dropdown-menu-link" onClick={handler.changeFormAddMember}>Add User</button>
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