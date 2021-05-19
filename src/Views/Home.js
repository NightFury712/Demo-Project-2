import React from 'react'
import HeaderProject from '../items/HeaderProject'
import '../css/Home.css'

const Home = () => {
  return (
    <div className="content-outer">
      <HeaderProject />
      <div className="home-content-wrapper">
        <div className="home-content-main">
          <div className="title-group-content-main">
          <h2 className="title title--thirdly-content-main title-group__title">
            Project Home :
            <span className="title__sub-line -with-colon">
              Recent Updates
            </span>
            <span className="title__sub-icon">
              <i className="fas fa-wifi"></i>
            </span>
          </h2>
          </div>
          <div id="timeline"></div>
        </div>
        <div className="home-content-sub"></div>
      </div>
    </div>
  );
}

export default Home;