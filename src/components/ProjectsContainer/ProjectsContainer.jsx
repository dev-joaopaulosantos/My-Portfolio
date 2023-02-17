import './ProjectsContainer.sass'
import React, { useState } from 'react'
import CardProject from '../CardProject/CardProject'
import data from '../../../data'

const projects = data.projects

const ProjectsContainer = () => {

	return (
		<section id="projects-container">
			<div className="subtitle">
				<h2>Projetos</h2>
				<div className="line-subtitle"></div>
			</div>
			<div className="projects">
				{projects.map((project) => (
					<CardProject
						key={project.id}
						project={project} />
				))}
			</div>
		</section>
	)
}

export default ProjectsContainer