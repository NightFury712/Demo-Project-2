import React, {useContext} from 'react'


const FormEditUser = () => {
  
  return (
    <div className="edit-user-wrapper">    
      <div className="edit-user-main">
        <h3 className="edit-user-title">
          <span>User Information</span>
        </h3>
      </div>
      <div className="form-element-edit-user__item">
          <div className="form-element-edit-user__label -disable">Email</div>
          <input type="text" className="add-editUser-input-text -w-large" size="30" maxLength="25" disabled></input>
        </div>
      <form className="form-element-edit-user-settings">
        <div className="form-element-edit-user__item">
          <div className="form-element-edit-user__label -required">Username</div>
          <input type="text" className="add-editUser-input-text -w-large" size="30" maxLength="25" required></input>
        </div>
        <div className="form-element-edit-user__item">
          <div className="form-element-edit-user__label -required">Password</div>
          <input type="password" className="add-editUser-input-text -w-large" size="30" maxLength="25" required></input>
        </div>
        <div className="form-element-edit-user__item">
          <div className="form-element-edit-user__label -required">New Password</div>
          <input type="password" className="add-editUser-input-text -w-large" size="30" maxLength="25" required></input>
        </div>
        <div className="_t-center-edit-user">
          <button type="submit" className="add-edit-user-button-submit" onClick={}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormEditUser;