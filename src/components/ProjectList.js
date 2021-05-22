import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import '../css/ProjectList.css'
import { AddContext } from '../provider/AddContext';

const ProjectList = ({ arrow, changeArrow }) => {
  const handler = useContext(AddContext);
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
            <div className="title-group__edit-actions">
              <div className="button__tooltip-top">
                <button className="edit-actions__button" onClick={handler.changeFormAddPrj}>+</button>
                <span className="edit-actions__tooltip-top">Add Project</span>
              </div>
            </div>
          </div>
          <div className={`see-all-wrapper ${arrow ? 'is_opened-project-list' : ''}`}>
            <ul className="project-list -list-view">
              {handler.listProject.map(item => {
                return (<li className="project-list__item" key={item.project_Key}>
                  <div className="project-list__wrapper">
                    <Link className="project-list__link-2" to="/project/home">
                      <span className="project-list__info">
                        <Link className="project-list__link" to="/project/home">
                          <span class="project-list__icon" aria-hidden="true">
                            <i className="far fa-building"></i>
                          </span>
                          <span className="project-list__name-group">
                            <span className="project-list__name">{item.project_Name}</span>
                            <span className="project-list__key">{item.project_Key}</span>
                          </span>
                        </Link>
                      </span>
                    </Link>
                  </div>
                </li>)
              })}


            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;