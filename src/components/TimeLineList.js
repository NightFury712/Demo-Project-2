import React from 'react'

import '../css/TimeLineList.css'

const TimeLineList = ({arrowTL, changeArrowTL}) => {
  return (
    <React.Fragment>
      <div className="dashboard-contents-right">
        <section id="timeline-section" className="timeline-section">
          <div className="timeline__wrapper">
            <div class="title-group -dashboard">
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
            <div id="timeline-content"></div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default TimeLineList;