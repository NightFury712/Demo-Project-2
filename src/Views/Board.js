import React, { useContext } from 'react'
import '../css/Board.css'
import HeaderProject from '../items/HeaderProject';
import CardIssueBoard from '../items/CardIssueBoard'
import { ProjectContext } from '../provider/ProjectContext'

const Board = () => {
	const data = useContext(ProjectContext);
	return (
		<React.Fragment>
			<div className="full-board">
				<HeaderProject />
				<div className="board-content-main">
					<div className="board-content-icon">
						<i className="fas fa-chart-bar"></i>
					</div>
					<div className="main-board">
						<div className="hide-filter">
							<h3 className="name-board">Board</h3>
						</div>
					</div>

				</div>
				<div className="board-management">
					<div className="board">
						<div className="board-management-status">
							<span className="dot-red"></span>
							<div className="name"><span>Open</span></div>
							<div className="number-open">1</div>
						</div>
						<ul className="board-status-list">
							<div className="board-status-list__wrapper">
								{data.listIssues.filter(item => item.status === 'Open').map(item => {
									return <CardIssueBoard key={item.id} item={item} />
								})}
							</div>

						</ul>
					</div>
					<div className="board">
						<div className="board-management-status">
							<span className="dot-blue"></span>
							<div className="name"><span>In Progress</span></div>
							<div className="number-inprogress">1</div>
						</div>
						<ul className="board-status-list">
							<div className="board-status-list__wrapper">
								{data.listIssues.filter(item => item.status === 'In progress').map(item => {
									return <CardIssueBoard key={item.id} item={item} />
								})}
							</div>

						</ul>
					</div>
					<div className="board">
						<div className="board-management-status">
							<span className="dot-green"></span>
							<div className="name"><span>Resolved</span></div>
							<div className="number-resolved">1</div>
						</div>
						<ul className="board-status-list">
							<div className="board-status-list__wrapper">
								{data.listIssues.filter(item => item.status === 'Resolved').map(item => {
									return <CardIssueBoard key={item.id} item={item} />
								})}
							</div>

						</ul>
					</div>
					<div className="board">
						<div className="board-management-status">
							<span className="dot-greenyellow"></span>
							<div className="name"><span>Closed</span></div>
							<div className="number-closed">1</div>
						</div>
						<ul className="board-status-list">
							<div className="board-status-list__wrapper">
								{data.listIssues.filter(item => item.status === 'Closed').map(item => {
									return <CardIssueBoard key={item.id} item={item} />
								})}
							</div>

						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Board;