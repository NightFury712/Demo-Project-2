import React, { useContext } from "react";
import HeaderProject from "../items/HeaderProject";
import "../css/ProjectSettings.css";
import { Route, Switch, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ProjectContext } from "../provider/ProjectContext";
import Member from "./Member";
import { AddContext } from "../provider/AddContext";

const ProjectSettings = () => {
  const handler = useContext(AddContext);
  const { prjKey } = useParams();
  const data = useContext(ProjectContext);
  const addMember = async (emailInvite) => {
    const name = handler.listUser.find(item => item.email === emailInvite).name;
    const role = document.querySelector('.form-element-item-filter2').value;
    await fetch("http://localhost:5000/member/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInvite,
        role: role,
        name: name,
        prjKey: prjKey.split('+')[1]
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  const addMemHandler = () => {
    const emailInvite = document.querySelector('.form-element-item-input-text2').value
    console.log(emailInvite);
    if (handler.listUser.find(item => item.email === emailInvite) === undefined) {
      alert("User is not existed!");
    } else if (data.listMembers.find(item => item.email === emailInvite) !== undefined) {
      alert('User is existed in this project!');
    } else {
      addMember(emailInvite);
      alert("Add User success");
      window.location.reload();
    }
  }
  return (
    <React.Fragment>
      <div className="full-settings">
        <HeaderProject />

        <div className="project-settings-content-wrapper">
          <article style={{ width: "300px", borderRight: "1px solid #BBB" }}>
            <ul className="setting-nav">
              <li className="generals-menu">
                <h2 className="settings-nav-title">
                  <i className="fas fa-cog"></i>
                    Project Settings
                  </h2>

                <ul className="setting-nav-menu">
                  <li className="is_active">
                    <Link className="setting-nav-link" to={`/project/${prjKey}/projectSettings/`}>General</Link>
                  </li>
                  <li className="is_active">
                    <Link className="setting-nav-link" to={`/project/${prjKey}/projectSettings/members`}>Members</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <aside style={{ width: "80%", height: "100%" }}>
            <Switch>
              <Route exact path="/project/:prjKey/projectSettings/members">
                <div className="project-settings-content-main-background">
                  <div className="project-settings-content-main">
                    <h3 className="project-settings-settings-title">Edit Members</h3>

                    <div className="card-default">
                      <div class="form-element-item">
                        <label className="form-add-member-label">Add Member</label>
                        <div className="form-element-item-email">
                          <div display="flex" color="#979797" class="css-1leaf8q">
                            <div class="form-add-email">Email Address</div>
                            <div class="form-add-role">Role</div>
                          </div>

                          <div display="flex">
                            <input type="text" autocomplete="nop" className="form-element-item-input-text2" placeholder="Type in email address..."></input>
                            <select className="form-element-item-filter2">
                              <option >Member</option>
                              <option >Administrator</option>
                              <option >Guest</option>
                            </select>
                          </div>
                          <div>
                            <div className="_t-center">
                              <button type="button" className="_t-center-add-mem" onClick={addMemHandler}>Add member</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 class="project-members">Project Members (1 members)</h3>

                    <table className="project-settings-table">
                      <thead className="project-settings-table-head">
                        <tr>
                          <th className="project-settings-th">Nick name</th>
                          <th className="project-settings-th">Email Address</th>
                          <th className="project-settings-th">Role</th>
                          <th className="project-settings-th">Join on</th>
                          <th className="project-settings-th">Remove</th>
                        </tr>
                      </thead>
                      <tbody className="project-settings-table-body">
                        {data.listMembers.map(item => {
                          return (
                            <Member item={item} />
                          );
                        })}
                      </tbody>

                    </table>
                  </div>
                  <footer id="footer" class="project-setting-content-footer" role="contentinfo"></footer>
                </div>
              </Route>
              <Route exact path="/project/:prjKey/projectSettings">
                <div className="project-settings-content-main-background">
                  <div className="project-settings-content-main">
                    <fieldset>
                      <legend>
                        <h3 className="project-settings-settings-title">General</h3>
                      </legend>

                      <div className="project-settings-edit-project">
                        <div className="form-element-settings">
                          <div className="form-element-item">
                            <label className="form-element-label" for="projectName">
                              Project Name
                            </label>
                            <input type="text" name="project.name" className="project-settings-input-text" id="projectName" size="30" maxLength="100" placeholder={prjKey.split('+')[0]} >
                            </input>
                          </div>

                          <div className="form-element-item">
                            <label className="form-element-label" for="projectKey">
                              Project Key
                            </label>
                            <input type="text" name="project.key" className="project-settings-input-text" id="projectKey" size="30" maxLength="25" value={prjKey.split('+')[1]} disabled>
                            </input>
                            <p className="form-element-description">
                              "The project key is a unique identifier for a project. A short, concise key is recommended."
                            </p>
                            <p className="form-element-description">
                              (e.g. Project name Backlog has project key BLG_2) Uppercase letters (A-Z), numbers (0-9) and underscore (_) can be used.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="_t-center">
                      <button type="button" id="EditProjectComplete_null" className="project-settings-button1 _t-center-updateprj">Submit</button>
                    </div>
                  </div>
                </div>
                <footer id="footer" class="project-setting-content-footer" role="contentinfo"></footer>
              </Route>


            </Switch>
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectSettings;
