import React, { useEffect } from 'react'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import './AlertComponent.sass'
import { AiOutlineClose } from 'react-icons/ai'

const AlertComponent = ({ alertIsOpen, setAlertIsOpen, emailSuccessfullySent }) => {
    const openAlertTime = 5000

    const closeAlert = () => {
        setAlertIsOpen(false)
        console.log(alertIsOpen)
    }

    // useEffect(() => {

    //     if (alertIsOpen) {
    //         setTimeout(() => {
    //             setAlertIsOpen(false)
    //         }, openAlertTime)
    //     }

    // }, [alertIsOpen])

    return (
        <div className='alert-container'
            style={{
                height: alertIsOpen ? '150px' : '0px'
            }} >
            <div className="alert"
                style={{
                    background:'linear-gradient(90deg, #003598 0%, #2354be 100%)'
                }}>
                <div className="alert-content">
                    <h2
                        style={{
                            borderBottom: emailSuccessfullySent ? '3px solid #17B169' : '3px solid red',
                            // color: emailSuccessfullySent ? '#17B169' : 'red'
                        }}>
                        {emailSuccessfullySent ? 'Enviado!' : 'Erro!'}
                    </h2>
                    <p>{emailSuccessfullySent ? 'Email enviado com sucesso, aguarde a minha resposta :)'
                        : 'Erro ao enviar email, verifique se todos os campos estão preenchidos!'}</p>
                </div>
                <button onClick={() => closeAlert()}><AiOutlineClose /></button>
                <div className="alert-progress-bar">
                    <div className="progress-bar"
                        style={{
                            width: alertIsOpen ? '30%' : '100%',
                            transition: `${openAlertTime}ms`,
                            background: emailSuccessfullySent ? '#17B169' : 'red' 
                        }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertComponent