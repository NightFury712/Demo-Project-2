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
							<div class="f-issue">
								<form>
									<select name="issuetype-filter" class="issuetype-filter">
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
							<div class="f-category">
								<form>
									<select name="category-filter" class="category-filter">
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
							<div class="f-milestone">
								<form>
									<select name="milestone-filter" class="milestone-filter">
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
							<div class="f-assignee">
								<form>
									<select name="assignee-filter" class="assignee-filter">
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

			</div>
		</div>
    </React.Fragment>
  );
}

export default Board;