import React, { useState } from 'react'
// import ProjectDialog from '../ProjectDialog/ProjectDialog'
import './CardProject.sass'

const CardProject = ({ project }) => {
    const [openProjectDialog, setOpenProjectDialog] = useState(false)

    const dialogHandler = () => {
        setOpenProjectDialog(!openProjectDialog)

    }
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
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Amet voluptatem quam
                        suscipit praesentium? Nihil, temporibus
                        eos dolorem quia autem earum voluptate
                        porro provident nostrum, cum, molestias
                        exercitationem voluptatem eligendi quaerat.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Amet voluptatem quam
                        suscipit praesentium? Nihil, temporibus
                        eos dolorem quia autem earum voluptate
                        porro provident nostrum, cum, molestias
                        exercitationem voluptatem eligendi quaerat.
                    </p>
                </div>
                <div className="card-btn">
                    <a href="#">Ver Projeto</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject