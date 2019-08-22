import React from 'react';

import '../App.css'

function Team ({teamMembers}) {
	return(
		<div className="card-container">
			{teamMembers.map(member => {
				return (
					<div className="card">
						<h1 className="card-header">
							{member.name}
						</h1>
						<h2 className="card-sub-header">
							{member.email}
						</h2>
						<p>{member.role}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Team;