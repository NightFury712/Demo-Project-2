import React from "react";
import HeaderProject from "../items/HeaderProject";
import "../css/ProjectSettings.css";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const ProjectSettings = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <React.Fragment>
      <div className="full-settings">
        <HeaderProject />

        <div className="content-wrapper">
            <article style={{ width: "20%" }}>
              <ul className="setting-nav">
                <li className="generals-menu">
                  <h2 className="settings-nav-title">
                    <i className="fas fa-cog"></i>
                    Project Settings
                  </h2>

                  <ul className="setting-nav-menu">
                    <li className="is_active">
                      <Link to="/project/projectSettings/general">General</Link>
                    </li>
                    <li className="is_active">
                      <Link to="/project/projectSettings/members">Members</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
          <aside style={{ width: "80%", height: "100%" }}>
            <Switch>
              <Route exact path={`${path}/general`}>
                <div className="content-main">
                  <fieldset>
                    <legend>
                      <h3 className="settings-title">General</h3>
                    </legend>

                    <div className="edit-project">
                      <div className="form-element-settings">
                        <div className="form-element-item">
                          <label className="form-element-label" for="projectName">
                            Project Name
                          </label>
                          <input type="text" name="project.name"  className="input-text" id="projectName" size="30" maxLength="25" required="required">
                          </input>
                        </div>

                        <div className="form-element-item">
                          <label className="form-element-label" for="projectKey">
                            Project Key
                          </label>
                          <input type="text" name="project.key"  className="input-text" id="projectKey" size="30" maxLength="25" aria-describedby="editProjectKey_describe" required="required">
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

                  <fieldset>
                    <legend>
                      <h3 className="settings-title">Attributes and functionality</h3>
                    </legend>
                    <div className="form-element-item">
                      <input type="checkbox" name="projectSetting.useDevAttributes" id="projectSetting-useDevAttributes" className="input-checkbox"></input>
                      <label for="projectSetting-useDevAttributes" className="checkboxLabel">
                        Enable priorities, versions and milestones
                      </label>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>
                      <h3 className="settings-title">Other</h3>
                    </legend>
                    <div className="form-element-item">
                      <label className="checkboxLabel">Formatting Rules</label>
                      <div className="wrap-filter1">
                        <select name="other-filter" className="filter1">
                          <option value="">Use Space setting (Markdown)</option>
                          <option value="backlog">Backlog</option>
                          <option value="markdown">Markdown</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-element-item">
                      <input type="checkbox" id="projectSetting.useOriginalImageSizeAtWiki" className="input-checkbox"></input>
                      <label for="projectSetting.useOriginalImageSizeAtWiki" className="checkboxLabel">
                      Enable Wiki tree view
                      </label>
                    </div>
                    <div class="form-element-item">
                      <input type="checkbox" id="projectSetting.useOriginalImageSizeAtWiki" className="input-checkbox"></input>
                      <label for="projectSetting.useOriginalImageSizeAtWiki" className="checkboxLabel">
                      Display images in Wikis in their original size
                      </label>
                    </div>
                    <div class="form-element-item">
                      <input type="checkbox" id="projectSetting.projectLeaderCanEditProjectLeader" className="input-checkbox"></input>
                      <label for="projectSetting.projectLeaderCanEditProjectLeader" className="checkboxLabel">
                      Allow project administrators to manage each other
                      </label>
                    </div>
                    <div class="form-element-item">
                      <input type="checkbox" id="project.archived" className="input-checkbox"></input>
                      <label for="project.archived" className="checkboxLabel">
                      Archive this project
                      </label>
                      <div class="form-element-description" id="projectaArchived_describe">
                        Note: If checked, this project will no longer appear on the Dashboard, but you will still see it in gray in the project list.
                      </div>
                    </div>
                  </fieldset>

                  <div className="_t-center">
                    <button type="submit" id="EditProjectComplete_null" class="button1">Submit</button>
                  </div>
                </div>
              </Route>

              <Route exact path={`${path}/members`}>
                <div className="content-main">
                  <h3 className="settings-title">Edit Members</h3>

                  <div className="card-default">
                    <div class="form-element-item">
                      <input type="text" autocomplete="nop" className="input-text1" placeholder="     Select user or team"></input>
                    </div>

                    <div class="form-element-item">
                      <label className="form-add-member-label">Add Member</label>
                      <div className="form-element-item">
                        <div display="flex" color="#979797" class="css-1leaf8q">
                          <div class="form-add-email">Email Address</div>
                          <div class="form-add-role">Role</div>
                        </div>

                        <div display="flex">
                          <input type="text" autocomplete="nop" className="input-text2" placeholder="     Type in email address..."></input>
                          <select className="filter2">
                           <option >Member</option>
                            <option >Administrator</option>
                            <option >Guest</option>
                          </select>
                        </div>
                        <div>
                          <div className="_t-center">
                            <input data-bind="click: addProjectUser, enable: !posting()" class="button2" type="button" value="Add selection to project"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 class="project-members">Project Members (1 members)</h3>

                  <div className="card-default search-controller">
                    <div className="form-element-item form-margin-top">
                      <label className="form-add-member-label">Filter user</label>
                      <div display="flex" className="form-element-item">
                        <input type="text" autocomplete="nop" className="input-text2" placeholder="     Search in UserID, Nickname or Email address"></input>
                        <select className="filter2">
                          <option> </option>
                          <option>All users</option>
                          <option >HUST All Members</option>
                        </select>
                      </div>
                    </div>                   
                  </div>

                  <table>
                    <tr>
                      <th>Nick name</th>
                      <th>Email Address</th>
                      <th>Role</th>
                      <th>Join on</th>
                      <th>Remove</th>
                    </tr>
                    <tr>
                      <td>Bùi Tiến Đạt</td>
                      <td>dat.bt183880@sis.hust.edu.vn</td>
                      <td>Administrator</td>
                      <td>May 18</td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </Route>
            </Switch>
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectSettings;
