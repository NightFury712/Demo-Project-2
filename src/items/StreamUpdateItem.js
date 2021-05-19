import React from 'react'

const StreamUpdateItem = () => {
  return (
    <React.Fragment>
      <li className="timeline__stream-item">
        <div className="stream-update-issue">
          <div className="stream-update__wrap">
            <span class="stream-update__icon">
              <i className="far fa-building"></i>
            </span>
            <div className="stream-update__content">
              <div className="stream-update__title">
                <span className="stream-update__text">
                  <span className="stream-update__username">Hoang Hai Danh </span>
                              add a new
                              <span className="Action-Addissue">issue</span>
                </span>
                <span className="stream-update__meta">4 day agos</span>
              </div>
              <span className="backlog-card-checked">123456-1</span>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default StreamUpdateItem;