import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <select name="issue-type" className="issue-type">
          <option value="task">Task</option>
          <option value="bug">Bug</option>
          <option value="Request">Request</option>
          <option value="Other">Other</option>
        </select>
      </form>
      <div>
        <input type="text" name="subject" className="subject" placeholder="Subject"></input>
      </div>
      <div className="issue-content">
        <div>
          <textarea name="textarea" placeholder="Add a description, use @mention to notify a colleague..." id="textarea"></textarea>
        </div>
        <div className="table">
          <table className="table-left">
            <tbody>
              <tr>
                <td>Status</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Priority</td>
                <td>
                  <select>
                    <option value="high">High</option>
                    <option value="normal">Normal</option>
                    <option value="low">Low</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Category</td>
                <td>
                  <input type="text" name="category" className="category"></input>
                </td>
              </tr>
              <tr>
                <td>Due date</td>
                <td>
                  <input type="datetime-local" id="date-time" name="date-time"></input>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-right">
            <tbody>
              <tr>
                <td>Assignee</td>
                <td>
                  <select>
                    <option value="me">Me</option>
                    <option value="you">You</option>
                    <option value="we">We</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Milestone</td>
                <td>
                  <select>
                    <option value="me">Me</option>
                    <option value="you">You</option>
                    <option value="we">We</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Version</td>
                <td>
                  <select>
                    <option value="me">Me</option>
                    <option value="you">You</option>
                    <option value="we">We</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="submit">
        <button className="preview">Preview</button>
        <button className="add">Add</button>
      </div>
    </div>

  );
}

export default Form;
