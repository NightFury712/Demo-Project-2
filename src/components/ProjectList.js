import React from 'react'
import {Link} from 'react-router-dom'

import '../css/ProjectList.css'

const ProjectList = ({arrow, changeArrow}) => {
  return (
    <React.Fragment>
      <div className="dashboard-contents-left">
        <section id="project-list" className="project-list-section">
          <div className="title-group-dashboard">
            <h3 className="title-group__inline-title">
              <button type="button" className="_plain-button" onClick={changeArrow}>
                <span className="title-group__icon-collapsed">
                  <span className={`icon -medium js_folding-icon ${arrow ? 'icon--arrow-down' : 'icon--arrow-up'}`}></span>
                </span>
                <span className="_plain-button-content">
                  Projects
                </span>
              </button>
            </h3>
          </div>
          <div className={`see-all-wrapper ${arrow ? 'is_opened-project-list' : ''}`}>
            <ul className="project-list -list-view">
              <li className="project-list__item">
                <Link className="project-list__link-2" to="/project/home"></Link>
                <div className="project-list__wrapper">
                  <span className="project-list__info">
                    <Link className="project-list__link" to="/project/home">
                      <span class="project-list__icon" aria-hidden="true">
                        <i className="far fa-building"></i>
                      </span>
                      <span className="project-list__name-group">
                        <span className="project-list__name">Testing</span>
                        <span className="project-list__key">123456</span>
                      </span>
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;