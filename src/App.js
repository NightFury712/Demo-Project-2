
import './css/App.css'
import './css/Navbar.css'
import Dashboard from './Views/Dashboard'
import Project from './Views/Project'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useState } from 'react'
import React from "react";
import FormAdd from './components/FormAdd'
import {AddContext} from './provider/AddContext'


export default function App() {
  const [formAdd, setFormAdd] = useState(false);
  const [formAddIssue, setFormAddIssue] = useState(false);
  const [formAddPrj, setFormAddPrj] = useState(false);
  const [formAddMember, setFormAddMember] = useState(false);
  const [stateRecent, setStateRecent] = useState(true);
  const [statePrj, setStatePrj] = useState(true);

  const changestatePrj = () => {
    setStatePrj(!statePrj);
    setStateRecent(true);
  }
  const changeStateRecent = () => {
    setStateRecent(!stateRecent);
    setStatePrj(true);
  }
  const changeFormAdd = () => {
    setFormAdd(!formAdd);
    setFormAddIssue(false)
    setFormAddMember(false)
    setFormAddPrj(false)
    setStateRecent(true);
  }
  const changeFormAddPrj = () => {
    setFormAdd(!formAdd)
    setFormAddPrj(!formAddPrj)
    setFormAddIssue(false)
    setFormAddMember(false)
    setStateRecent(true);
  }
  const changeFormAddIssue = () => {
    setFormAdd(!formAdd)
    setFormAddPrj(false)
    setFormAddIssue(!formAddIssue)
    setFormAddMember(false)
    setStateRecent(true);
  }
  const changeFormAddMember = () => {
    setFormAdd(!formAdd)
    setFormAddPrj(false)
    setFormAddIssue(false)
    setStateRecent(true);
    setFormAddMember(!formAddMember)
  }

  return (
    <AddContext.Provider value={
      {
      statePrj,
      stateRecent,
      formAdd, 
      formAddIssue, 
      formAddMember, 
      formAddPrj,
      changeFormAdd,
      changeFormAddIssue, 
      changeFormAddMember, 
      changeFormAddPrj,
      changestatePrj,
      changeStateRecent
      }}>
      
    <React.Fragment>
      <FormAdd />
      <Router>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
      </Router>
    </React.Fragment>
    </AddContext.Provider>
  );
}

