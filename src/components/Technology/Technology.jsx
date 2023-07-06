import React from 'react'
import './Technology.sass'

const Technology = ({ title, technology }) => {
    return (
        <div>
            <h3 className='title-technology'>{title}</h3>
            <div className='technology'>
                {technology.map((technology) => (
                    <div className="icon" key={technology.id}>
                        {technology.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technology