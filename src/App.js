
import './css/App.css'
import './css/Navbar.css'
import Dashboard from './Views/Dashboard'
import Project from './Views/Project'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import React from "react";


export default function App() {
  return (
    <Router>
      {/* <React.Fragment>
        <Topbar />
        <Navbar />
      </React.Fragment> */}

      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/project/home" component={Project}/>
    </Router>

  );
}

