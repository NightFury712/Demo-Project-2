import React from 'react'
import { useParams } from 'react-router';

const Member = ({ item }) => {
  const { prjKey } = useParams();
  const removeHandler = () => {
    var flag = window.confirm(`Remove ${item.name} from this project!`);
    if (flag === true) {
      const deleteMember = async () => {
        await fetch("http://localhost:5000/member/delete", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            prjKey: prjKey.split('+')[1],
            id: item.id
          })
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
      }
      deleteMember();
      window.location.reload();
    }
  }
  return (
    <React.Fragment>
      <tr key={item.id}>
        <td className="project-settings-td project-settings-td-name-1">{item.name}</td>
        <td className="project-settings-td project-settings-td-email">{item.email}</td>
        <td className="project-settings-td project-settings-td-role">{item.role}</td>
        <td className="project-settings-td project-settings-td-time">{item.time_invite}</td>
        <td className="project-settings-td">
          <button className="delete-project-member" onClick={removeHandler}>x</button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Member;