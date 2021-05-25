import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "../css/Dialog.css"
import { ProjectContext } from '../provider/ProjectContext';

const Dialog = () => {
  const data = useContext(ProjectContext);
  const [currIssue, setCurrIssue] = useState({
    type: '',
    subject: '',
    description: '',
    status: '',
    priority: '',
    category: '',
    dueDate: '',
    updated: '',
    assignee: '',
    milestone: '',
    version: ''
  })

  const deleteIssueHandler = () => {
    const flag = window.confirm('Are you sure you want to delete this issue?')
    if (flag === true) {
      const deleteIssue = async () => {
        await fetch("http://localhost:5000/issue/delete", {
          method: 'delete',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            id: data.issueSelect.id,
            prjKey: prjKey.split('+')[1]
          })
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
      }
      deleteIssue();
      window.location.reload();
    }
  }

  const backHandler = () => {
    setCurrIssue({
      ...currIssue,
      type: '',
      subject: '',
      description: '',
      status: '',
      priority: '',
      category: '',
      dueDate: '',
      updated: '',
      assignee: '',
      milestone: '',
      version: ''
    }
    )
    data.showDialogHandler();
  }

  const { prjKey } = useParams();
  const updateIssueHandler = () => {
    const updateIssue = async () => {
      await fetch("http://localhost:5000/issue/update", {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: data.issueSelect.id,
          type: currIssue.type === '' ? data.issueSelect.type : currIssue.type,
          subject: currIssue.subject === '' ? data.issueSelect.subject : currIssue.subject,
          description: currIssue.description === '' ? data.issueSelect.description : currIssue.description,
          status: currIssue.status === '' ? data.issueSelect.status : currIssue.status,
          priority: currIssue.priority === '' ? data.issueSelect.priority : currIssue.priority,
          category: currIssue.category === '' ? data.issueSelect.category : currIssue.category,
          dueDate: currIssue.dueDate === '' ? data.issueSelect.dueDate : currIssue.dueDate,
          updated: new Date().toUTCString(),
          assignee: currIssue.assignee === '' ? data.issueSelect.assignee : currIssue.assignee,
          milestone: currIssue.milestone === '' ? data.issueSelect.milestone : currIssue.milestone,
          version: currIssue.version === '' ? data.issueSelect.version : currIssue.version,
          prjKey: prjKey.split('+')[1]
        })
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    updateIssue();
    alert("Update issue sucess!");
    window.location.reload();
  }
  console.log(currIssue);
  useEffect(() => {
    document.querySelector('.issue-type-dialog').value = data.issueSelect.type;
    document.querySelector('.subject-dialog').value = data.issueSelect.subject;
    document.querySelector('#textarea-dialog').value = data.issueSelect.description;
    document.querySelector('.status-dialog').value = data.issueSelect.status;
    document.querySelector('.priority-dialog').value = data.issueSelect.priority;
    document.querySelector('.category-dialog').value = data.issueSelect.category;
    document.querySelector('#date-time-dialog').value = data.issueSelect.dueDate;
    document.querySelector('.assignee-dialog').value = data.issueSelect.assignee;
    document.querySelector('.milestone-dialog').value = data.issueSelect.milestone;
    document.querySelector('.version-dialog').value = data.issueSelect.version;
  }, [data.issueSelect])

  return (
    <React.Fragment>
      <div className={`full-dialog-setting ${data.showDialog ? '' : 'full-dialog-setting-display'}`}>
        <div className="content-header-dialog">
          <div className="content-header-dialog-title">
            <img src="https://110900.backlog.com/SpaceImage.action" alt="avatar" className="img-dialog"></img>
            <h2 className="h2-dialog">{prjKey.split('+')[0]} ({prjKey.split('+')[1]})</h2>
          </div>
        </div>
        <div className="button-dialog-top">
          <div className="button-dialog__back__save-top">
            <button className="back" onClick={backHandler}>Back</button>
            <button className="save" onClick={updateIssueHandler}>Save</button>
          </div>
        </div>
        <div className="content-header-dialog-main">
          <form>
            <select name="issue-type" className="issue-type-dialog" onChange={(e) => setCurrIssue({
              ...currIssue,
              type: e.target.value
            })}>
              <option value="Task">Task</option>
              <option value="Bug">Bug</option>
              <option value="Request">Request</option>
              <option value="Other">Other</option>
            </select>
          </form>
          <div>
            <input
              type="text"
              name="subject"
              className="subject-dialog"
              placeholder="Subject"
              onChange={(e) => setCurrIssue({
                ...currIssue,
                subject: e.target.value
              })}
            >
            </input>
          </div>
          <div className="issue-content-dialog">
            <div>
              <textarea
                name="textarea"
                placeholder="Add a description, use @mention to notify a colleague..."
                id="textarea-dialog"
                onChange={(e) => setCurrIssue({
                  ...currIssue,
                  description: e.target.value
                })}
              ></textarea>
            </div>

            <div className="table-dialog">
              <table className="table-left-dialog">
                <tbody>
                  <tr>
                    <td id="table-element">Status</td>
                    <td>
                      <select className="status-dialog" onChange={(e) => setCurrIssue({
                        ...currIssue,
                        status: e.target.value
                      })}>
                        <option value="Open">Open</option>
                        <option value="In progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td id="table-element">Priority</td>
                    <td>
                      <select className="priority-dialog" onChange={(e) => setCurrIssue({
                        ...currIssue,
                        priority: e.target.value
                      })}>
                        <option value="High">High</option>
                        <option value="Normal">Normal</option>
                        <option value="Low">Low</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td id="table-element">Category</td>
                    <td>
                      <input type="text" name="category" className="category-dialog"
                        onChange={(e) => setCurrIssue({
                          ...currIssue,
                          category: e.target.value
                        })}></input>
                    </td>
                  </tr>
                  <tr>
                    <td id="table-element">Due date</td>
                    <td>
                      <input type="datetime-local" id="date-time-dialog" name="date-time"
                        onChange={(e) => setCurrIssue({
                          ...currIssue,
                          dueDate: e.target.value
                        })}></input>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table-right-dialog">
                <tbody>
                  <tr>
                    <td id="table-element">Assignee</td>
                    <td>
                      <select className="assignee-dialog" onChange={(e) => setCurrIssue({
                        ...currIssue,
                        assignee: e.target.value
                      })}>
                        {data.listMembers.map(item => {
                          return <option key={item.id} value={item.name}>{item.name}</option>
                        })}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td id="table-element">Milestone</td>
                    <td>
                      <input type="text" name="milestone" className="milestone-dialog" onChange={(e) => setCurrIssue({
                        ...currIssue,
                        milestone: e.target.value
                      })}>
                      </input>
                    </td>
                  </tr>
                  <tr>
                    <td id="table-element">Version</td>
                    <td>
                      <input type="text" name="version" className="version-dialog" onChange={(e) => setCurrIssue({
                        ...currIssue,
                        version: e.target.value
                      })}>
                      </input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="button-dialog">
          <div className="button-dialog__delete">
            <button className="delete" onClick={deleteIssueHandler}>Delete issue</button>
          </div>
          <div className="button-dialog__back__save">
            <button className="back" onClick={backHandler}>Back</button>
            <button className="save" onClick={updateIssueHandler}>Save</button>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
};

export default Dialog
