import React from 'react'
import Form from "./Form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Issues from '../Views/Issues';
import leftNavLink from '../items/LeftNavLink'
import { useState } from 'react'
import Board from './Board'
import ProjectSettings from './ProjectSettings'
import Home from '../Views/Home'

const Navbar = () => {
  const [issue, setIssue] = useState([]);

  return (
    <Router>
      <div className="main-content">
        <nav className="nav">
          <div className="logo">
            <label>Bug tracking</label>
          </div>
          {leftNavLink.map((item) => {
            return (
              <span className="nav-link" key={item.href}>
                <NavLink activeClassName="actived" className="link" to={item.href}>
                  <span className="link-content">
                    {item.icon}
                    <span className="link-span"> {item.content}</span>
                  </span>
                </NavLink>
              </span>
            )
          })}
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="nav-content">
          <Switch>
            <Route path="/add-issue">
              <Form issue={issue} setIssue={setIssue} />
            </Route>
            <Route path="/issues">
              <Issues issue={issue} />
            </Route>
            <Route path="/project/home">
              <Home />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
            <Route path="/projectSettings">
              <ProjectSettings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;