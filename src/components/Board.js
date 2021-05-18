import React from 'react'
import '../css/Board.css'

const Board = () => {
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

			<div class="content-main">
				<div class="main-board">
					<div class="hide-filter">
						<h3 class="name-board">Board</h3>
					</div>
					<div class="choose-filter">
						<button class="button-hide-filter">
							<div>
								<i class="fas fa-filter"></i>
							</div>
							<div>
								<span class="name-filter">Hide Filters</span>
							</div>
						</button>
					</div>
				</div>
				<div class="detail-filter">
					<div class="box-filter">
						<div class="filter-issueType">
							<div><span>Issue Type</span></div>
							<div class="wrap-filter">
								<form>
									<select name="issuetype-filter" class="filter">
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
					
					<div class="box-filter">
						<div class="filter-category">
							<div><span>Category</span></div>
							<div class="wrap-filter">
								<form>
									<select name="category-filter" class="filter">
										<option value="All">All</option>
										<option value="NoCategoty">No Category</option>
										<option value="Research">Research</option>
									</select>
								</form>
							</div>
						</div>
					</div>
					
					<div class="box-filter">
						<div class="filter-milestone">
							<div><span>Milestone</span></div>
							<div class="wrap-filter">
								<form>
									<select name="milestone-filter" class="filter">
										<option value="All">All</option>
										<option value="NoMilestone">No Milestone</option>
									</select>
								</form>
							</div>
						</div>
					</div>
					
					<div class="box-fiter">
						<div class="assignee-issueType">
							<div><span>Assignee</span></div>
							<div class="wrap-filter">
								<form>
									<select name="assignee-filter" class="filter">
										<option value="All">All</option>
										<option value="Unassignee">Unassignee</option>
									</select>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="board-management">
				<div class="board">
					<div class="status">
						<span class="dot-red"></span>
						<div class="name"><span>Open</span></div>
						<div class="number-open">1</div>
					</div>
					<ul class="list">
						<li class="brief-issue">
							<div class="card-issue">
								<a class="name-issue" href="/issues" target="_blank">Make-Frontend</a>
								<span class="typeOfIssue">Task</span>
							</div>
							<div><span class="project-name">Create-Website</span></div>
							<div><span class="due-date">30/05/2021</span></div>
						</li>
					</ul>
				</div>
				<div class="board">
					<div class="status">
						<span class="dot-blue"></span>
						<div class="name"><span>In Progress</span></div>
						<div class="number-inprogress">1</div>
					</div>
					<ul class="list">
						<li class="brief-issue">
							<div class="card-issue">
								<a class="name-issue" href="/issues" target="_blank">Make-Frontend</a>
								<span class="typeOfIssue">Task</span>
							</div>
							<div><span class="project-name">Create-Website</span></div>
							<div><span class="due-date">30/05/2021</span></div>
						</li>
					</ul>
				</div>
				<div class="board">
					<div class="status">
						<span class="dot-green"></span>
						<div class="name"><span>Resolved</span></div>
						<div class="number-resolved">1</div>
					</div>
					<ul class="list">
						<li class="brief-issue">
							<div class="card-issue">
								<a class="name-issue" href="/issues" target="_blank">Make-Frontend</a>
								<span class="typeOfIssue">Task</span>
							</div>
							<div><span class="project-name">Create-Website</span></div>
							<div><span class="due-date">30/05/2021</span></div>
						</li>
					</ul>
				</div>
				<div class="board">
					<div class="status">
						<span class="dot-greenyellow"></span>
						<div class="name"><span>Closed</span></div>
						<div class="number-closed">1</div>
					</div>
					<ul class="list">
						<li class="brief-issue">
							<div class="card-issue">
								<a class="name-issue" href="/issues" target="_blank">Make-Frontend</a>
								<span class="typeOfIssue">Task</span>
							</div>
							<div><span class="project-name">Create-Website</span></div>
							<div><span class="due-date">30/05/2021</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </React.Fragment>
  );
}

export default Board;