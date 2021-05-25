import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { ProjectContext } from '../provider/ProjectContext';

const CardIssueBoard = ({ item }) => {
  const { prjKey } = useParams();
  const data = useContext(ProjectContext);
  const issueSelectHandler = () => {
    data.setIssueSelect(item);
    data.showDialogHandler();
  }

  return (
    <React.Fragment>
      <li className="brief-issue-item">
        <button className="brief-issue-content" onClick={issueSelectHandler}>
          <div className="card-issue-title">
            <span className="name-issue">{prjKey.split('+')[1]}-{item.id}</span>
            <span className="typeOfIssue">{item.type}</span>
          </div>
          <div className="card-issue-type">
            <span className="project-name">{item.subject}</span>
          </div>
          <div className="card-issue-due-date">
            <span className="due-date">{item.dueDate}</span>
          </div>
        </button>
      </li>
    </React.Fragment>
  )
}

export default CardIssueBoard;