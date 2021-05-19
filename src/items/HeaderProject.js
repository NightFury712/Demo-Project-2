import React from 'react'

const HeaderProject = () => {
  return (
      <div className="wrap-header">
        <div className="header-board">
          <div className="board-set-icon">
            <a href="/project/home">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <div className="board-set-content">
            <h1 className="board-set-text">Project Name</h1>
            <span className="board-project-key">(123456)</span>
          </div>
        </div>
      </div>
  );
}

export default HeaderProject;