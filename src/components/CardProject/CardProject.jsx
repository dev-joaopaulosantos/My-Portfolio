import React, { useState } from 'react'
import ProjectDialog from '../ProjectDialog/ProjectDialog'
import './CardProject.sass'

const CardProject = ({ project }) => {
    const [openProjectDialog, setOpenProjectDialog] = useState(false)

    const dialogHandler = () => {
        setOpenProjectDialog(!openProjectDialog)

    }
    return (
        <React.Fragment>
            <ProjectDialog
                open={openProjectDialog}
                dialogHandler={dialogHandler}
                project={project}
            />
            <div className="project"
                onClick={() => setOpenProjectDialog(true)}
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${project.image})`
                }}>
                <div className='gradient'>
                    <div className="content">
                        <h3>{project.name}</h3>
                        <p>Saiba mais</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardProject