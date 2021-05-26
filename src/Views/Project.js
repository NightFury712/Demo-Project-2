import React, { useEffect, useState } from "react";
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import { useParams } from "react-router";
import { ProjectContext } from "../provider/ProjectContext";
import Dialog from "../components/Dialog";

const Project = () => {
  const [listIssues, setListIssues] = useState([]);
  const [listMembers, setListMembers] = useState([]);
  const [issueFilter, setIssueFilter] = useState([]);
  const [issueSelect, setIssueSelect] = useState([]);
  const [subTimeline, setSubTimeline] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const { prjKey } = useParams();

  const showDialogHandler = () => {
    setShowDialog(!showDialog);
  }
  useEffect(() => {
    const getDataIssue = async () => {
      await fetch(`http://localhost:5000/issue/getAll/${prjKey.split('+')[1]}`)
        .then(res => res.json())
        .then(data => {
          setListIssues(data);
          setIssueFilter(data)
        })
        .catch(err => console.log(err));
    }
    const getDataMember = async () => {
      await fetch(`http://localhost:5000/member/getAll/${prjKey.split('+')[1]}`)
        .then(res => res.json())
        .then(data => {
          setListMembers(data);
        })
        .catch(err => console.log(err));
    }
    const getSubTimeline = async () => {
      await fetch(`http://localhost:5000/timeline/getAll`)
        .then(res => res.json())
        .then(data => {
          setSubTimeline(data);
        })
        .catch(err => console.log(err));
    }
    getSubTimeline();
    getDataMember();
    getDataIssue();
  }, [])

  return (
    <React.Fragment>
      <ProjectContext.Provider value={{
        listIssues,
        issueFilter,
        listMembers,
        showDialog,
        issueSelect,
        subTimeline,
        setIssueSelect,
        showDialogHandler,
        setIssueFilter,
        setListMembers
      }}>
        <div className={`dark-background-div ${showDialog ? '' : 'dark-background-div-display'}`}></div>
        <Dialog />
        <Topbar />
        <Navbar />
      </ProjectContext.Provider>
    </React.Fragment>
  );
}

export default Project;

