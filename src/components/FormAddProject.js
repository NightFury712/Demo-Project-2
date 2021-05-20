import React from 'react'
import '../css/FormAddProject.css'

const FormAddProject = ({formAdd, changeFormAddPrj}) => {
  return (
    <div className={`add-project-form ${formAdd ? '' : 'add-project-form-display'}`}>
      <div className="close-form-add-project">
        <button className="button-close-form-add-project" onClick={changeFormAddPrj}>x</button>
      </div>
      <div className="add-project-content-wrapper">
        <div className="add-project-content-main">
          <h3 className="add-project-settings-title">
            <span>Add Project</span>
            <i className="fas fa-folder-plus"></i>
          </h3>
        </div>
        <form className="form-element-settings">
          <div className="form-element__item">
            <div className="form-element__label -required">Project Name</div>
            <input type="text" className="add-project-input-text -w-large" name="project.name" size="30" maxLength="25" id="AddProjectComplete_project.name" required></input>
          </div>
          <div className="form-element__item">
            <div className="form-element__label -required">Project Key</div>
            <input type="text" className="add-project-input-text -w-large" name="project.key" size="30" maxLength="25" id="AddProjectComplete_project.key" required></input>
            <p className="form-element__description" id="projectKey_described">The project key is a unique identifier for a project. A short, concise key is recommended.<br></br> (e.g. Project name has project key BLG_2) Uppercase letters (A-Z), numbers (0-9) and underscore (_) can be used.</p>
          </div>
          <div className="_t-center">
            <button type="submit" className="add-project-button-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAddProject;