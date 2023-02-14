import './ProjectsContainer.sass'
import Netflix from '../../img/Netflix.png'
import ImgTeste from '../../img/Icon.png'
import React, { useState } from 'react'
import CardProject from '../CardProject/CardProject'

const projects = [
	{
		id: 1,
		name: 'ReactMovie',
		image: Netflix,
		description: `Descrição do projeto reactmovie Descrição do 
						projeto reactmovie Descrição do projeto reactmovie 
						Descrição do projeto reactmovie Descrição do 
						projeto reactmovie Descrição do projeto reactmovie 
						Descrição do projeto reactmovie Descrição do projeto 
						reactmovie Descrição do projeto reactmovie`
	},
	{
		id: 2,
		name: 'Teste',
		image: ImgTeste,
		description: `Descrição teste descrição teste descrição 
						teste Descrição teste descrição teste descrição teste 
						Descrição teste descrição teste descrição teste Descrição 
						teste descrição teste descrição teste Descrição teste 
						descrição teste descrição teste Descrição teste descrição 
						teste descrição teste`
	}
]

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