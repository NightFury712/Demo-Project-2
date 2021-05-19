
import Topbar from '../components/Topbar'
import {useState} from 'react'
import '../css/Dashboard.css'
import React from "react";
import ProjectList from '../components/ProjectList'
import TimeLineList from '../components/TimeLineList'


const Dashboard = () => {
  const [arrow, setArrow] = useState(false);
  const changeArrow = () => {
    setArrow(!arrow);
  }
  const [arrowTL, setArrowTL] = useState(false);
  const changeArrowTL = () => {
    setArrowTL(!arrowTL);
  }
  return (
    <React.Fragment>
      <Topbar />
      <div id="container" role="main" className="core-wrapper-dashboard">
        <header id="header" className="content-header">
          <div className="header-icon-set__icon">
            <i className="far fa-building"></i>
          </div>
          <div className="title-group">
            <span className="header-icon-set__name title-group__title-text -with-button">
              Project Management
              </span>
          </div>
        </header>
        <div id="binding-main-dashboard">
          <div className="dashboard-contents">
            <ProjectList arrow={arrow} changeArrow={changeArrow}/>
            <TimeLineList arrowTL={arrowTL} changeArrowTL={changeArrowTL}/>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Dashboard;

