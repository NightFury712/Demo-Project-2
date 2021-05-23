import React from 'react'
import Form from "./Form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams
} from "react-router-dom";
import Issues from '../Views/Issues';
import { useState } from 'react'
import Board from './Board'
import ProjectSettings from './ProjectSettings'
import Home from '../Views/Home'
import UpdateIssue from '../Views/UpdateIssue'

const Navbar = () => {
  const [issue, setIssue] = useState([]);
  const {prjKey} = useParams();
  return (
    <Router>
      <div className="main-content">
        <nav className="nav">
          <div className="logo">
            <label>Bug tracking</label>
          </div>
          <span className="nav-link">
            <NavLink activeClassName="actived" className="link" to={`/project/${prjKey}/home`}>
              <span className="link-content">
              <i className="fas fa-home"></i>
                <span className="link-span"> Home</span>
              </span>
            </NavLink>
          </span>
          <span className="nav-link">
            <NavLink activeClassName="actived" className="link" to={`/project/${prjKey}/add-issue`}>
              <span className="link-content">
              <i className="fas fa-plus"></i>
                <span className="link-span"> Add Issues</span>
              </span>
            </NavLink>
          </span>
          <span className="nav-link">
            <NavLink activeClassName="actived" className="link" to={`/project/${prjKey}/issues`}>
              <span className="link-content">
              <i className="far fa-list-alt"></i>
                <span className="link-span"> Issues</span>
              </span>
            </NavLink>
          </span>
          <span className="nav-link">
            <NavLink activeClassName="actived" className="link" to={`/project/${prjKey}/board`}>
              <span className="link-content">
              <i className="fas fa-chart-bar"></i>
                <span className="link-span"> Board</span>
              </span>
            </NavLink>
          </span>
          <span className="nav-link">
            <NavLink activeClassName="actived" className="link" to={`/project/${prjKey}/projectSettings`}>
              <span className="link-content">
              <i class="fas fa-cog"></i>
                <span className="link-span"> Project Settings</span>
              </span>
            </NavLink>
          </span>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="nav-content">
          <Switch>
            <Route path="/project/:prjKey/add-issue">
              <Switch>
                <Form issue={issue} setIssue={setIssue} path="/"/>
                <UpdateIssue  path="/edit"/>
              </Switch>
            </Route>
            <Route path="/project/:prjKey/issues">
              <Issues issue={issue} />
            </Route>
            <Route path="/project/:prjKey/home">
              <Home />
            </Route>
            <Route path="/project/:prjKey/board">
              <Board />
            </Route>
            <Route path="/project/:prjKey/projectSettings">
              <ProjectSettings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;