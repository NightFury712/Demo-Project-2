import React from 'react'
import '../css/Board.css'

const Board = () => {
	return (
		<React.Fragment>
			<div className="full-board">
				<div className="wrap-header">
					<div className="header-board">
						<div className="board-set-icon">
							<a href="/project/home">
								<i className="fas fa-home"></i>
							</a>
						</div>
						<h1 className="board-set-text">Project Name</h1>
					</div>
				</div>

				<div className="content-main">
					<div className="main-board">
						<div className="hide-filter">
							<h3 className="name-board">Board</h3>
						</div>
						<div className="choose-filter">
							<button className="button-hide-filter1">
								<div>
									<i className="fas fa-filter"></i>
								</div>
								<div>
									<span className="name-filter">Hide Filters</span>
								</div>
							</button>
						</div>
					</div>
					<div className="detail-filter">
						<div className="box-filter">
							<div className="filter-issueType">
								<div><span>Issue Type</span></div>
								<div className="wrap-filter">
									<form>
										<select name="issuetype-filter" className="filter">
											<option value="All">All</option>
											<option value="Task">Task</option>
											<option value="Bug">Bug</option>
											<option value="Request">Request</option>
											<option value="Other">Other</option>
										</select>
									</form>
								</div>
							</div>
						</div>

						<div className="box-filter">
							<div className="filter-category">
								<div><span>Category</span></div>
								<div className="wrap-filter">
									<form>
										<select name="category-filter" className="filter">
											<option value="All">All</option>
											<option value="NoCategoty">No Category</option>
											<option value="Research">Research</option>
										</select>
									</form>
								</div>
							</div>
						</div>

						<div className="box-filter">
							<div className="filter-milestone">
								<div><span>Milestone</span></div>
								<div className="wrap-filter">
									<form>
										<select name="milestone-filter" className="filter">
											<option value="All">All</option>
											<option value="NoMilestone">No Milestone</option>
										</select>
									</form>
								</div>
							</div>
						</div>

						<div className="box-fiter">
							<div className="assignee-issueType">
								<div><span>Assignee</span></div>
								<div className="wrap-filter">
									<form>
										<select name="assignee-filter" className="filter">
											<option value="All">All</option>
											<option value="Unassignee">Unassignee</option>
										</select>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="board-management">
					<div className="board">
						<div className="status">
							<span className="dot-red"></span>
							<div className="name"><span>Open</span></div>
							<div className="number-open">1</div>
						</div>
						<ul className="list">
							<li className="brief-issue">
								<div className="card-issue">
									<a className="name-issue" href="/issues" target="_blank">Make-Frontend</a>
									<span className="typeOfIssue">Task</span>
								</div>
								<div><span className="project-name">Create-Website</span></div>
								<div><span className="due-date">30/05/2021</span></div>
							</li>
						</ul>
					</div>
					<div className="board">
						<div className="status">
							<span className="dot-blue"></span>
							<div className="name"><span>In Progress</span></div>
							<div className="number-inprogress">1</div>
						</div>
						<ul className="list">
							<li className="brief-issue">
								<div className="card-issue">
									<a className="name-issue" href="/issues" target="_blank">Make-Frontend</a>
									<span className="typeOfIssue">Task</span>
								</div>
								<div><span className="project-name">Create-Website</span></div>
								<div><span className="due-date">30/05/2021</span></div>
							</li>
						</ul>
					</div>
					<div className="board">
						<div className="status">
							<span className="dot-green"></span>
							<div className="name"><span>Resolved</span></div>
							<div className="number-resolved">1</div>
						</div>
						<ul className="list">
							<li className="brief-issue">
								<div className="card-issue">
									<a className="name-issue" href="/issues" target="_blank">Make-Frontend</a>
									<span className="typeOfIssue">Task</span>
								</div>
								<div><span className="project-name">Create-Website</span></div>
								<div><span className="due-date">30/05/2021</span></div>
							</li>
						</ul>
					</div>
					<div className="board">
						<div className="status">
							<span className="dot-greenyellow"></span>
							<div className="name"><span>Closed</span></div>
							<div className="number-closed">1</div>
						</div>
						<ul className="list">
							<li className="brief-issue">
								<div className="card-issue">
									<a className="name-issue" href="/issues" target="_blank">Make-Frontend</a>
									<span className="typeOfIssue">Task</span>
								</div>
								<div><span className="project-name">Create-Website</span></div>
								<div><span className="due-date">30/05/2021</span></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Board;