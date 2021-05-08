import React from 'react'
import Issue from '../components/Issue'
import '../css/Issues.css'

const Issues = ({issue}) => {
  return (
    <div>
      <table>
        <thead>
          <tr className="header">
            <th>
              <span>Issue Type</span>
            </th>
            <th>
              <span>Key</span>
            </th>
            <th>
              <span>Subject</span>
            </th>
            <th>
              <span>Assignee</span>
            </th>
            <th>
              <span>Status</span>
            </th>
            <th>
              <span>Priority</span>
            </th>
            <th>
              <span>Created</span>
            </th>
            <th>
              <span>Due date</span>
            </th>
            <th>
              <span>Updated</span>
            </th>
            <th>
              <span>Register By</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {issue.map((item) => {
            return <Issue issue={item} key={issue.id}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Issues;