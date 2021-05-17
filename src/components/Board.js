import React from 'react';

const Board = () => {
  return (
    <React.Fragment>
      <div class="content-outer">
        <header id="project-header" class="cotent-header" aria-label="Project header">
          <div class="content-header__inner project-header">
            <div class="header-icon-set project-header__summary">
              <div class="header-icon-set__icon">
                <a href="/project/home">
                  <i class="fas fa-home"></i>
                </a>
              </div>
              <h1 class="header-icon-set__text">
                <span class="header-icon-set__name">Create Website</span>
              </h1>
            </div>
          </div>
        </header>
        <div id="kanban">
          <div class="css-1tcfnvl-col">
            <div class="css-fkdpnl-box-title-group-content-main">
              <div class="css-tkr54z-row">
                <div class="css-ihdlua-row">
                  <h3 class="title-breadcrumbs">
                    <span class="breadcrumbs__item">Board</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="css-v58cw3-box">
            <div class="css-odqhsh-box">
              <h3 id="filter.isueType"  class="css-1snpzvg-box">Isue Type</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Board;