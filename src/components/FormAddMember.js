import React from 'react'

const FormAddMember = () => {
  return (
    <div className="add-user-content-wrapper">
      <div className="add-user-content-title">
        <span className="add-user-content-title__span">
          Invite New Users
        </span>
      </div>
      <div className="add-user-content-main">
        <div className="add-user-content-main__info">
          <div className="add-user-content-main__email">
            Email Address
          </div>
          <div className="add-user-content-main__role">
            Role
          </div>
        </div>
        <div className="add-user-content-main__input">
          <div className="add-user-content-main__input-1">
            <input type="text" placeholder="Type in email address..." className="input__field-email"></input>
          </div>
          <div className="add-user-content-main__input-2">
            <select className="select__field-role">
              <option value="Member">Member</option>
              <option value="Administrator">Administrator</option>
              <option value="Guest">Guest</option>
            </select>
          </div>
          <div className="add-user-content-main__to-project">
            <div className="to-project-title">To Project</div>
            <div className="add-user-content-main__chose-project">
              <select className="select__field-chose-project">
                <option value="123456">ProjectName(123456)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAddMember;