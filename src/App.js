
import './css/App.css'
import './css/Navbar.css'
import Dashboard from './Views/Dashboard'
import Project from './Views/Project'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react'
import React from "react";
import FormAdd from './components/FormAdd'
import { AddContext } from './provider/AddContext'
// import axios from 'axios'


export default function App() {
  const [formAdd, setFormAdd] = useState(false);
  const [formAddIssue, setFormAddIssue] = useState(false);
  const [formAddPrj, setFormAddPrj] = useState(false);
  const [formAddMember, setFormAddMember] = useState(false);
  const [stateRecent, setStateRecent] = useState(true);
  const [statePrj, setStatePrj] = useState(true);

  const [listProject, setListProject] = useState([]);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getlistPrj = () => {
      fetch("http://localhost:5000/project/getAll")
        .then(res => res.json())
        .then(data => {
          setListProject(data);
        })
        .catch(err => console.log(err))
    }
    const getlistUser = () => {
      fetch("http://localhost:5000/member/getAll/project_test")
        .then(res => res.json())
        .then(data => {
          setListUser(data);
        })
        .catch(err => console.log(err))
    }
    getlistPrj();
    getlistUser();
  }, [])
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
    setFormAdd(true)
    setFormAddPrj(true)
    setFormAddIssue(false)
    setFormAddMember(false)
    setStateRecent(true);

  }
  const changeFormAddIssue = () => {
    setFormAdd(true)
    setFormAddPrj(false)
    setFormAddIssue(true)
    setFormAddMember(false)
    setStateRecent(true);
  }
  const changeFormAddMember = () => {
    setFormAdd(true)
    setFormAddPrj(false)
    setFormAddIssue(false)
    setStateRecent(true);
    setFormAddMember(true)
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
        listProject,
        listUser,
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
            <React.Fragment>

              <Dashboard />
            </React.Fragment>
          </Route>
          <Route path="/project/:prjKey">
            <Project />
          </Route>
        </Router>
      </React.Fragment>
    </AddContext.Provider>
  );
}

