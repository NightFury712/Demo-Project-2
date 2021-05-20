import React from 'react'
import HeaderProject from '../items/HeaderProject'
import StreamUpDateItem from '../items/StreamUpdateItem'
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
          <div id="timeline">
            <div className="timeline">
              <StreamUpDateItem />
            </div>
          </div>
        </div>
        <div className="home-content-sub">
          <h4 class="title title--fourth-content-sub">
            <span>Status</span>
          </h4>
          <div className="card card-default-content-sub">
            <div className="graph-bar-full">
              <div className="graph-bar__fig">
                <div class="graph--bar__fig-bar status--1"></div>
              </div>
              <div className="graph-bar__info">
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">Open</div>
                  <div className="graph-bar__info-wrapper-content info-content--1">1</div>
                </div>
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">In progess</div>
                  <div className="graph-bar__info-wrapper-content info-content--2">2</div>
                </div>
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">Resolve</div>
                  <div className="graph-bar__info-wrapper-content info-content--3">3</div>
                </div>
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">Closed</div>
                  <div className="graph-bar__info-wrapper-content info-content--4">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;