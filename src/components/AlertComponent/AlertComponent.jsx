import React, { useEffect } from 'react'
import './AlertComponent.sass'
import { AiOutlineClose } from 'react-icons/ai'
import { MdErrorOutline } from 'react-icons/md'
import { MdCheckCircleOutline } from 'react-icons/md'

const AlertComponent = ({ alertIsOpen, setAlertIsOpen, emailSuccessfullySent, openAlertTime }) => {

    const closeAlert = () => {
        setAlertIsOpen(false)
        console.log(alertIsOpen)
    }

    useEffect(() => {

        if (alertIsOpen) {
            setTimeout(() => {
                setAlertIsOpen(false)
            }, openAlertTime)
        }

    }, [alertIsOpen])

    return (
        <div className='alert-container'
            style={{
                height: alertIsOpen ? '150px' : '0px'
            }} >
            <div className="alert">
                <div className="alert-content">
                    <div className="content-title">
                        <span>{emailSuccessfullySent ? <MdCheckCircleOutline style={{ color: '#388e3c' }} /> : <MdErrorOutline style={{ color: '#d32f2f' }} />}</span>
                        <h2>
                            {emailSuccessfullySent ? 'Enviado!' : 'Erro!'}
                        </h2>
                    </div>
                    <p>{emailSuccessfullySent ? 'Email enviado com sucesso, aguarde a minha resposta :)'
                        : 'Erro ao enviar email :( Tente novamente mais tarde! '}</p>
                </div>
                <button onClick={() => closeAlert()}><AiOutlineClose /></button>
                <div className="alert-progress-bar"
                    style={{
                        width: alertIsOpen ? '0%' : '100%',
                        transition: `${openAlertTime}ms`,
                    }}>
                    <div className="progress-bar"
                        style={{ background: emailSuccessfullySent ? '#388e3c' : '#d32f2f' }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertComponent