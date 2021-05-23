import React from 'react'
import { useParams } from 'react-router';
// import { AddContext } from '../provider/AddContext';

const HeaderProject = () => {
  const { prjKey } = useParams();

  return (
    <div className="wrap-header">
      <div className="header-board">
        <div className="board-set-icon">
          <a href="/project/home">
            <i className="fas fa-home"></i>
          </a>
        </div>
        <div className="board-set-content">
          <h1 className="board-set-text">{prjKey.split('+')[0]}</h1>
          <span className="board-project-key">({prjKey.split('+')[1]})</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderProject;