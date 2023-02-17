import React, { useState } from 'react'
import './CardProject.sass'

const CardProject = ({ project }) => {

    return (
        <div className="project" >
            <div className='image-project'
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${project.image})`
                }}>
                <div className="gradient">
                    <h3 className="name-project">{project.name}</h3>
                </div>
            </div>
            <div className="content">
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <div className="card-btn">
                    <a href={project.link} target="_blank">Ver Projeto</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject