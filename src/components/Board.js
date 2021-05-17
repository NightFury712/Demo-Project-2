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
								<span class="name-filter">Hide Filter</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
    </React.Fragment>
  );
}

export default Board;