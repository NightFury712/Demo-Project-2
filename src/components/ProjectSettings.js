import React from 'react'
import HeaderProject from '../items/HeaderProject'
import '../css/ProjectSettings.css'

const ProjectSettings = () => {
	return (
		<React.Fragment>
			<div className="full-settings">
				<HeaderProject/>

				<div className="content-wrapper">
					<article>
						<ul className="setting-nav">
							<li className="generals-menu">
								<h2 className="settings-nav-title">Project Settings</h2>
								
								<ul className="setting-nav-menu">
									<li className="is_active">
										<a href="/projectSettings/general">General</a>
									</li>
									<li className="is_active">
										<a href="/projectSettings/members">Members</a>
									</li>
								</ul>
							</li>
						</ul>
					</article>
					<aside>
						ss
					</aside>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProjectSettings;