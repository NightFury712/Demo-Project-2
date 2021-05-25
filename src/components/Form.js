import React, { useContext } from "react";
import { useParams } from "react-router";
import "../css/Form.css";
import HeaderProject from "../items/HeaderProject";
import { ProjectContext } from "../provider/ProjectContext";

const Form = () => {
  const { prjKey } = useParams();
  const data = useContext(ProjectContext);
  const postIssue = async () => {
    await fetch("http://localhost:5000/issue/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        type: document.querySelector(".issue-type").value,
        subject: document.querySelector(".subject").value,
        description: document.querySelector("#textarea").value,
        status: "Open",
        priority: document.querySelector(".priority").value,
        category: document.querySelector(".category").value,
        dueDate: document.querySelector("#date-time").value,
        created: new Date().toUTCString(),
        assignee: document.querySelector(".assignee").value,
        milestone: document.querySelector(".milestone").value,
        version: document.querySelector(".version").value,
        prjKey: prjKey.split('+')[1]
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  const postIssueHandler = async () => {
    postIssue();
    alert("Add Issue sucess!");
    window.location.href = `/project/${prjKey}/issues`
  };

  return (
    <React.Fragment>
      <HeaderProject />
      <div className="full-form-setting">
        <h3 id="h3_1">Add Issue</h3>
        <form>
          <select name="issue-type" className="issue-type">
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
            className="subject"
            placeholder="Subject"
          ></input>
        </div>
        <div className="issue-content">
          <div>
            <textarea
              name="textarea"
              placeholder="Add a description, use @mention to notify a colleague..."
              id="textarea"
            ></textarea>
          </div>
          <div className="table">
            <table className="table-left">
              <tbody>
                <tr>
                  <td id="label_1">Status</td>
                  <td id="td_status">Open</td>
                </tr>
                <tr>
                  <td id="label_1">Priority</td>
                  <td>
                    <select className="priority">
                      <option value="High">High</option>
                      <option value="Normal">Normal</option>
                      <option value="Low">Low</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td id="label_1">Category</td>
                  <td>
                    <input
                      type="text"
                      name="category"
                      className="category"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td id="label_1">Due date</td>
                  <td>
                    <input
                      type="datetime-local"
                      id="date-time"
                      name="date-time"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table-right">
              <tbody>
                <tr>
                  <td id="label_1">Assignee</td>
                  <td>
                    <select className="assignee">
                      {data.listMembers.map(item => {
                        return <option key={item.id} value={item.name}>{item.name}</option>
                      })}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td id="label_1">Milestone</td>
                  <td>
                    <input
                      type="text"
                      name="milestone"
                      className="milestone"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td id="label_1">Version</td>
                  <td>
                    <input
                      type="text"
                      name="version"
                      className="version"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="submit">
          <div className="submit-button">
            <button className="add" onClick={postIssueHandler}>Add
          </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
