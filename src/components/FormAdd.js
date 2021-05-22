import React, { useContext } from 'react'
import '../css/FormAddProject.css'
import FormAddProject from './FormAddProject'
import FormChosePrj from './FormChosePrj'
import { AddContext } from '../provider/AddContext'
import FormAddMember from '../components/FormAddMember'

const FormAdd = () => {
  const handler = useContext(AddContext);
  return (
    <div className={`add-project-form ${ handler.formAdd  ? '' : 'add-project-form-display'}`}>
      <div className="close-form-add-project">
        <button className="button-close-form-add-project" onClick={handler.changeFormAdd}>x</button>
      </div>
      <FormAddProject />
      <FormChosePrj />
      <FormAddMember />
    </div>
  );
}

export default FormAdd;