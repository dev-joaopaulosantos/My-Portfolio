import React from 'react'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import './AlertComponent.sass'

const AlertComponent = ({ sendEmailError, setSendEmailError }) => {

    const closeAlert = () => {
        setSendEmailError(false)
        console.log(sendEmailError)
    }


    return (
        <div className='alert-container'>
            <div className="alert">
                <div className="alert-content">
                    <h2>Alerta de Ação</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
                <button onClick={() => closeAlert()}>X</button>
                <div className="alert-progress-bar"></div>
            </div>
        </div>
    )
}

export default AlertComponent