
import './css/App.css'
import './css/Navbar.css'
import Dashboard from './Views/Dashboard'
import Project from './Views/Project'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {useState} from 'react'
import React from "react";
import FormAddProject from './components/FormAddProject'


export default function App() {
  const [formAdd, setFormAdd] = useState(false);
  const [stateRecent, setStateRecent] = useState(true);
  const [statePrj, setStatePrj] = useState(true);
  
  const openHomePage = () => {
    window.location.href='/project/home'
  }
  const changeFormAddIssue = () => {
    window.location.href='/project/add-issue'
  }
  const changestatePrj = () => {
    setStatePrj(!statePrj);
    setStateRecent(true);
  }
  const changeStateRecent = () => {
    setStateRecent(!stateRecent);
    setStatePrj(true);
  }
  const changeFormAddPrj = () => {
    setFormAdd(!formAdd);
    setStateRecent(true);
  }
  return (
    <React.Fragment>
      <FormAddProject 
        formAdd={formAdd} 
        changeFormAddPrj={changeFormAddPrj}
      />
      <Router>
        <Route path="/dashboard">
          <Dashboard 
            changeFormAddPrj={changeFormAddPrj} 
            stateRecent={stateRecent} 
            statePrj={statePrj} 
            changestatePrj={changestatePrj} 
            changeStateRecent={changeStateRecent}
            changeFormAddIssue={changeFormAddIssue}
            openHomePage={openHomePage}
          />
        </Route>
        <Route path="/project" >
          <Project 
            changeFormAddPrj={changeFormAddPrj} 
            stateRecent={stateRecent} 
            statePrj={statePrj} 
            changestatePrj={changestatePrj} 
            changeStateRecent={changeStateRecent}
            changeFormAddIssue={changeFormAddIssue}
            openHomePage={openHomePage}
          />
        </Route>
      </Router>
    </React.Fragment>
  );
}

