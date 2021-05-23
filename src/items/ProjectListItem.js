import React, { useContext } from 'react'
import { AddContext } from '../provider/AddContext';

const ProjectListItem = ({subUrl}) => {
  const handler = useContext(AddContext);
  return (
    <React.Fragment>
      {handler.listProject.map(item => {
        return (<li className="data-list-item" key={item.project_Key}>
          <button className="data-list-link" onClick={() => { window.location.href = `/project/${item.project_Name}+${item.project_Key}/${subUrl}` }}>
            <span className="data-list-icon">
              <i className="far fa-building"></i>
            </span>
            <span className="data-list-summary">{item.project_Name}</span>
            <span className="data-list-key">({item.project_Key})</span>
          </button>
        </li>)
      })}

    </React.Fragment>
  );
}

export default ProjectListItem;