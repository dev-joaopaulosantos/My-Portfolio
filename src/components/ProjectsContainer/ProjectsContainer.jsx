import './ProjectsContainer.css'
import React, { useState } from 'react'
import CardProject from '../CardProject/CardProject'
import data from '../../../data'
import Container from '../Container/Container'
import Section from '../Section/Section'

const projects = data.projects

const ProjectsContainer = () => {

	return (
		<Section title={'Projetos'} id={'projects-container'} paddingTop={true}>
			<Container singleContainer={true}>
				<div className="projects">
					{projects.map((project) => (
						<CardProject
							key={project.id}
							project={project} />
					))}
				</div>
			</Container>
		</Section>
	)
}

export default ProjectsContainer