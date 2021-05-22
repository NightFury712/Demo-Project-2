import React from 'react'

const Issue = ({issue}) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <span class="row-issueType">{issue.type}</span>
        </td>
        <td>
          <span class="row-issueKey">123456-1</span>
        </td>
        <td>
          <span class="row-issueSubject">{issue.subject}</span>
        </td>
        <td>
          <span class="row-issueAssignee">{issue.assignee}</span>
        </td>
        <td>
          <span class="row-issueStatus">Open</span>
        </td>
        <td>
          <span class="row-issuePriority">{issue.priority}</span>
        </td>
        <td>
          <span class="row-issueCreated">{issue.created}</span>
        </td>
        <td>
          <span class="row-issueDueDate">{issue.dueDate}</span>
        </td>
        <td>
          <span class="row-issueUpdate">15:30</span>
        </td>
        <td>
          <span class="row-issueRegister">Dang</span>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Issue;