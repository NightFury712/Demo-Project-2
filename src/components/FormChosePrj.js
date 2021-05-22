import React, {useContext} from 'react'
import '../css/FormChosePrj.css'
import ProjectListItem from '../items/ProjectListItem'
import { AddContext } from '../provider/AddContext'

const FormChosePrj = () => {
  const handler = useContext(AddContext);
  return (
    <div className={`chose-project-content-wrapper ${handler.formAddIssue ? '' : 'add-project-form-display'}`}>
      <div className="chose-project-content-main">
        <h3 className="chose-project-title">
          <span>Chose Project: </span>
        </h3>
      </div>
      <div className="chose-project-content-primary">
        <ul className="data-list">
          <ProjectListItem />
        </ul>
      </div>
    </div>
  );
}

export default FormChosePrj;
