import React, { useContext } from 'react'

import '../css/TimeLineList.css'
import StreamUpdateItem from '../items/StreamUpdateItem'
import { AddContext } from '../provider/AddContext'

const TimeLineList = ({ arrowTL, changeArrowTL }) => {
  const handler = useContext(AddContext);
  return (
    <React.Fragment>
      <div className="dashboard-contents-right">
        <section id="timeline-section" className="timeline-section">
          <div className="timeline__wrapper">
            <div class="title-group-dashboard">
              <h3 class="title title--thirdly title-group__inline-title -clickable js_folding-handle">
                <button type="button" class="_plain-button-timeline" onClick={changeArrowTL}>
                  <span class="title-group__icon-collapsed">
                    <span class={`icon -medium js_folding-icon ${arrowTL ? 'icon--arrow-down' : 'icon--arrow-up'}`}></span>
                  </span>
                  <span className="_plain-button-content">
                    Recent Update
                  </span>
                </button>
              </h3>
            </div>
            <div className={`timeline-content ${arrowTL ? 'is_opened-project-list' : ''}`}>
              <div className="timeline">
                <ul className="timeline__stream">
                  {
                    handler.timeline.map(item => {
                      return <StreamUpdateItem key={item.id} item={item}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default TimeLineList;