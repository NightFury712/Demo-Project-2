// import { useState,useEffect } from 'react'
import './css/App.css'
import './css/Navbar.css'
// import Navbar from './components/Navbar'
// import Topbar from './components/Topbar'
import Dashboard from './Views/Dashboard'
import Project from './Views/Project'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import React from "react";


export default function App() {
  return (
    <Router>
      {/* <React.Fragment>
        <Topbar />
        <Navbar />
      </React.Fragment> */}

      <Route path="/" exact component={Dashboard}/>
      <Route path="/project" component={Project}/>
    </Router>


  );
}

