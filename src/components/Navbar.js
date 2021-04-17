import React from 'react'
import Form from "./Form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Narbar = () => {
  return (
    <Router>
      <div className="main-content">
        <nav className="nav">
          <div className="logo">
            <label>Bug tracking</label>
          </div>
          <span className="top nav-link">
            <Link className="link" to="/">
              <span className="link-content">
                <i className="fas fa-home"></i>
                <span className="link-span"> Home</span>
              </span>
            </Link>
          </span>
          <span className="nav-link">
            <Link className="link" to="/Add-issue">
              <span className="link-content">
                <i className="fas fa-plus"></i>
                <span className="link-span">  Add Issues</span>
              </span>
            </Link>
          </span>
          <span className="nav-link">
            <Link className="link" to="/users">
              <span className="link-content">
                <i className="far fa-list-alt"></i>
                <span className="link-span">  Issues</span>
              </span>
            </Link>
          </span>
          <span className="nav-link">
            <Link className="link" to="/users">
              <span className="link-content">
                <span>  Board</span>
              </span>
            </Link>
          </span>
          <span className="nav-link">
            <Link className="link" to="/users">
              <span className="link-content">
                <i className="fas fa-chart-bar"></i>
                <span>  Gantt Chart</span>
              </span>
            </Link>
          </span>
          <span className="nav-link">
            <Link className="link" to="/users">
              <span className="link-content">
                <span>  Wiki</span>
              </span>
            </Link>
          </span>
          <span className="nav-link">
            <Link className="link" to="/users">
              <span className="link-content">
                <span> Project Settings</span>
              </span>
            </Link>
          </span>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="nav-content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/Add-issue">
              <Form />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

function Home() {
  return <h2>Hello</h2>
}

// function About() {
//   return <h2>HIIII</h2>
// }

function Users() {
  return <h2>Users</h2>;
}


export default Narbar;