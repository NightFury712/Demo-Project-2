import React from 'react'

const StreamUpdateItem = ({item}) => {
  return (
    <React.Fragment>
      <li className="timeline__stream-item">
        <div className="stream-update-issue">
          <div className="stream-update__wrap">
            <span class="stream-update__icon">
              <i className="far fa-user"></i>
            </span>
            <div className="stream-update__content">
              <div className="stream-update__title">
                <span className="stream-update__text">
                  <span className="stream-update__username">{item.name} </span>
                    {item.activity}
                    <span className="Action-Addissue">{item.type}</span>
                </span>
                <span className="stream-update__meta">{item.time}</span>
              </div>
              <span className="backlog-card-checked">{item.project_Key}</span>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default StreamUpdateItem;