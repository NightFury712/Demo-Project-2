import React from 'react'
import Issue from '../components/Issue'
import '../css/Issues.css'

const Issues = ({issue}) => {
  return (
    <React.Fragment>
    <div class="full-board">
		<div class="wrap-header">
			<div class="header-board">
				<div class="board-set-icon">
					<a href="/project/home">
						<i class="fas fa-home"></i>
					</a>
				</div>
				<h1 class="board-set-text">Project Name</h1>
			</div>
		</div>
        <div class="result-setting">
            <div class="title-group-condition">
                <button type="button" class="search-condition-button">
                    <span>Search Conditions</span>
                </button>     
            </div>
            <div class="bar-status">
                <div><span class="statusString">Status : </span></div>
                <div class="filter-nav__item">
                    <button class="filter-nav__link">All</button>
                </div>
                <div class="filter-nav__item">
                    <button class="filter-nav__link">Open</button>
                </div>
                <div class="filter-nav__item">
                    <button class="filter-nav__link">In Progress</button>
                </div>
                <div class="filter-nav__item">
                    <button class="filter-nav__link">Resolved</button>
                </div>
                <div class="filter-nav__item">
                    <button class="filter-nav__link">Closed</button>
                </div>
                <div class="filter-nav__item">
                    <button class="filter-nav__link">Not Closed</button>
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
                        <tr>
                            <td class="row-issueType">
                                <span >Task</span>
                            </td>
                            <td class="row-issueKey">
                                <span >123456-1</span>
                            </td>
                            <td class="row-issueSubject">
                                <span >Make-Frontend</span>
                            </td>
                            <td class="row-issueAssignee">
                                <span>Dang</span>
                            </td>
                            <td class="row-issueStatus">
                                <span>Open</span>
                            </td>
                            <td class="row-issuePriority">
                                <span>High</span>
                            </td>
                            <td class="row-issueCreated">
                                <span>15-05-2021</span>
                            </td>
                            <td class="row-issueDueDate">
                                <span>30-05-2021</span>
                            </td>
                            <td class="row-issueUpdate">
                                <span>20-05-2021</span>
                            </td>
                            <td class="row-issueRegister">
                                <span>Cuong</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
    {/* <div>
      
        <tbody>
          {issue.map((item) => {
            return <Issue issue={item} key={issue.id}/>
          })}
        </tbody>
      </table>
    </div> */}
    </React.Fragment>
    
  );
}

export default Issues;