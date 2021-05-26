import React, { useContext } from 'react'
import HeaderProject from '../items/HeaderProject'
import StreamUpDateItem from '../items/StreamUpdateItem'
import '../css/Home.css'
import { ProjectContext } from '../provider/ProjectContext'

const Home = () => {
  const data = useContext(ProjectContext);

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
              {
                data.subTimeline.map(item => {
                  return <StreamUpDateItem key={item.id} item={item} />
                })
              }
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
                <div class="graph--bar__fig-bar status--1" style={{width: `${data.listIssues.filter(item => item.status === 'Open').length / data.listIssues.length * 100}%`}}></div>
                <div class="graph--bar__fig-bar status--2" style={{width: `${data.listIssues.filter(item => item.status === 'In progress').length / data.listIssues.length * 100}%`}}></div>
                <div class="graph--bar__fig-bar status--3" style={{width: `${data.listIssues.filter(item => item.status === 'Resolved').length / data.listIssues.length * 100}%`}}></div>
                <div class="graph--bar__fig-bar status--4" style={{width: `${data.listIssues.filter(item => item.status === 'Closed').length / data.listIssues.length * 100}%`}}></div>
              </div>
              <div className="graph-bar__info">
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">Open</div>
                  <div className="graph-bar__info-wrapper-content info-content--1">
                    {data.listIssues.filter(item => item.status === 'Open').length}
                  </div>
                </div>
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">In progess</div>
                  <div className="graph-bar__info-wrapper-content info-content--2">
                    {data.listIssues.filter(item => item.status === 'In progess').length}
                  </div>
                </div>
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">Resolved</div>
                  <div className="graph-bar__info-wrapper-content info-content--3">
                    {data.listIssues.filter(item => item.status === 'Resolved').length}
                  </div>
                </div>
                <div className="graph-bar__info-wrapper">
                  <div className="graph-bar__info-wrapper-title">Closed</div>
                  <div className="graph-bar__info-wrapper-content info-content--4">
                    {data.listIssues.filter(item => item.status === 'Closed').length}
                  </div>
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