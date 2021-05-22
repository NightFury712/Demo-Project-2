import React from 'react'

const Issue = ({issue}) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <span>{issue.type}</span>
        </td>
        <td>
          <span>123456-1</span>
        </td>
        <td>
          <span>{issue.subject}</span>
        </td>
        <td>
          <span>{issue.assignee}</span>
        </td>
        <td>
          <span>Open</span>
        </td>
        <td>
          <span>{issue.priority}</span>
        </td>
        <td>
          <span>{issue.created}</span>
        </td>
        <td>
          <span>{issue.dueDate}</span>
        </td>
        <td>
          <span>15:30</span>
        </td>
        <td>
          <span>Dang</span>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Issue;