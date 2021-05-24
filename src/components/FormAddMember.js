import React, { useContext } from 'react'
import { AddContext } from '../provider/AddContext';
import '../css/FormAddMember.css'

const FormAddMember = () => {
  const handler = useContext(AddContext);
  const postUser = async (emailInvite, prjKey) => {
    const name = handler.listUser.find(item => item.email === emailInvite).name;
    const role = document.querySelector('.select__field-role').value;
    await fetch("http://localhost:5000/member/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInvite,
        role: role,
        name: name,
        prjKey: prjKey
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  const handlerInvite = () => {
    const emailInvite = document.querySelector('.input__field-email').value
    const prjKey = document.querySelector('.select__field-chose-project').value;
    if (handler.listUser.find(item => item.email === emailInvite) === undefined) {
      alert("User is not exist");
    } else {
      const getMember = async () => {
        await fetch(`http://localhost:5000/member/getAll/${prjKey}`)
          .then(res => res.json())
          .then(data => {
            if (data.find(item => item.email === emailInvite) !== undefined) {
              alert('User is existed in this project')
            } else {
              postUser(emailInvite, prjKey);
              alert("Add User success");
              window.location.reload();
            }
          })
          .catch(err => console.log(err))
      }
      getMember();

      // window.location.reload();

    }
  }
  return (
    <div className={`add-user-content-wrapper ${handler.formAddMember ? '' : 'add-user-content-dislpay'}`}>
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
                {handler.listProject.map(item => {
                  return <option value={item.project_Key} key={item.project_Key}>{item.project_Name} ({item.project_Key})</option>
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="add-user-content-submit">
          <button type="button" className="add-user-content-invite" onClick={handlerInvite}>Invite</button>
        </div>
      </div>
    </div>
  );
}

export default FormAddMember;