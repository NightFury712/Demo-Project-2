import React, { useContext, useEffect, useState } from 'react'
import Issue from '../components/Issue';
import '../css/Issues.css'
import HeaderProject from '../items/HeaderProject';
import { ProjectContext } from '../provider/ProjectContext';

const Issues = () => {
  const [status, setStatus] = useState('all')
  const data = useContext(ProjectContext);
  const clickHandler = (e) => {
    setStatus(e.target.classList[1]);
  }

  const filterHandler = () => {
    switch (status) {
      case 'open':
        data.setIssueFilter(data.listIssues.filter(item => item.status === 'Open'));
        break;
      case 'in-progress':
        data.setIssueFilter(data.listIssues.filter(item => item.status === 'In progress'));
        break;
      case 'resolved':
        data.setIssueFilter(data.listIssues.filter(item => item.status === 'Resolved'));
        break;
      case 'closed':
        data.setIssueFilter(data.listIssues.filter(item => item.status === 'Closed'));
        break;
      case 'not-closed':
        data.setIssueFilter(data.listIssues.filter(item => item.status !== 'Closed'));
        break;
      default:
        data.setIssueFilter(data.listIssues);
        break;
    }
  }

  useEffect(() => {
    filterHandler();
  }, [status])
  return (
    <React.Fragment>
      <HeaderProject />
      <div class="full-board">
        <div class="result-setting">
          <div class="title-group-condition">
            <button type="button" class="search-condition-button">
              <span>Search Conditions</span>
            </button>
          </div>
          <div class="bar-status">
            <div><span class="statusString">Status : </span></div>
            <div class="filter-nav__item">
              <button class="filter-nav__link all" onClick={clickHandler}>All</button>
            </div>
            <div class="filter-nav__item">
              <button class="filter-nav__link open" onClick={clickHandler}>Open</button>
            </div>
            <div class="filter-nav__item">
              <button class="filter-nav__link in-progress" onClick={clickHandler}>In Progress</button>
            </div>
            <div class="filter-nav__item">
              <button class="filter-nav__link resolved" onClick={clickHandler}>Resolved</button>
            </div>
            <div class="filter-nav__item">
              <button class="filter-nav__link closed" onClick={clickHandler}>Closed</button>
            </div>
            <div class="filter-nav__item">
              <button class="filter-nav__link not-closed" onClick={clickHandler}>Not Closed</button>
            </div>
          </div>
          <div class="bar-filter">
            <div className="box-filter1">
              <div className="filter-category1">
                <div><span>Category</span></div>
                <div className="wrap-filter1">
                  <form>
                    <select name="category-filter1" className="filter1">
                      <option value="All">All</option>
                      <option value="NoCategoty">No Category</option>
                      <option value="Research">Research</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>

            <div className="box-filter1">
              <div className="filter-milestone1">
                <div><span>Milestone</span></div>
                <div className="wrap-filter1">
                  <form>
                    <select name="milestone-filter1" className="filter1">
                      <option value="All">All</option>
                      <option value="NoMilestone">No Milestone</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>

            <div className="box-fiter1">
              <div className="assignee-issueType1">
                <div><span>Assignee</span></div>
                <div className="wrap-filter1">
                  <form>
                    <select name="assignee-filter1" className="filter1">
                      <option value="All">All</option>
                      <option value="Unassignee">Unassignee</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="result-set">
          <div class="result-set__main">
            <table class="issue-table">
              <thead>
                <tr>
                  <th class="sort" id="issueType" tabIndex="0">
                    <span class="sort__icon">
                      Issue Type
                      </span>
                  </th>
                  <th class="sort" id="issueKey" tabIndex="0">
                    <span class="sort__icon">
                      Key
                      </span>
                  </th>
                  <th class="sort" id="issueSubject" tabIndex="0">
                    <span class="sort__icon">
                      Subject
                      </span>
                  </th>
                  <th class="sort" id="issueAssignee" tabIndex="0">
                    <span class="sort__icon">
                      Assignee
                      </span>
                  </th>
                  <th class="sort" id="issueStatus" tabIndex="0">
                    <span class="sort__icon">
                      Status
                       </span>
                  </th>
                  <th class="sort" id="issuePriority" tabIndex="0">
                    <span class="sort__icon">
                      Priority
                      </span>
                  </th>
                  <th class="sort" id="issueCreated" tabIndex="0">
                    <span class="sort__icon">
                      Created
                    </span>
                  </th>
                  <th class="sort" id="issueDuedate" tabIndex="0">
                    <span class="sort__icon">
                      Due date
                      </span>
                  </th>
                  <th class="sort" id="issueUpdate" tabIndex="0">
                    <span class="sort__icon">
                      Updated
                      </span>
                  </th>
                  <th class="sort" id="issueRegister" tabIndex="0">
                    <span class="sort__icon">
                      Registered by
                    </span>
                  </th>
                </tr>

              </thead>
              <tbody class="tbody">
                {data.issueFilter.map((item) => {
                  return <Issue issue={item} key={item.id} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default Issues;