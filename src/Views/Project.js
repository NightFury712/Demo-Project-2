import React, { useEffect, useState } from "react";
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import { useParams } from "react-router";
import { ProjectContext } from "../provider/ProjectContext";

const Project = () => {
  const [listIssues, setListIssues] = useState([]);
  const [listMembers, setListMembers] = useState([]);
  const [issueFilter, setIssueFilter] = useState([]);
  const { prjKey } = useParams();
  useEffect(() => {
    const getDataIssue = async () => {
      fetch(`http://localhost:5000/issue/getAll/${prjKey.split('+')[1]}`)
        .then(res => res.json())
        .then(data => {
          setListIssues(data);
          setIssueFilter(data)
        })
        .catch(err => console.log(err));
    }
    const getDataMember = async () => {
      fetch(`http://localhost:5000/member/getAll/${prjKey.split('+')[1]}`)
        .then(res => res.json())
        .then(data => {
          setListMembers(data);
        })
        .catch(err => console.log(err));
    }
    getDataMember();
    getDataIssue();
  }, [])

  return (
    <ProjectContext.Provider value={{
      listIssues,
      issueFilter,
      listMembers,
      setIssueFilter,
      setListMembers
    }}>
      <React.Fragment>
        <Topbar />
        <Navbar />
      </React.Fragment>
    </ProjectContext.Provider>
  );
}

export default Project;

