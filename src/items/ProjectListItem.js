import React from 'react'

const ProjectListItem = () => {
  
  return (
    <React.Fragment>
      <li className="data-list-item">
        <button className="data-list-link" onClick={() => { window.location.href = "/project/home" }}>
          <span className="data-list-icon">
            <i className="far fa-building"></i>
          </span>
          <span className="data-list-summary">ProjectName</span>
          <span className="data-list-key">(123456)</span>
        </button>
      </li>
    </React.Fragment>
  );
}

export default ProjectListItem;