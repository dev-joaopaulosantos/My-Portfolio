import './Contact.css'
import { AiOutlineUser } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
import Container from '../Container/Container'
import Section from '../Section/Section'

const Contact = ({ setAlertIsOpen, setEmailSuccessfullySent, openAlertTime }) => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const fullName = `${name} ${lastName}`

	const [validCaptcha, setValidCaptcha] = useState(null)
	const [loading, setLoading] = useState(false)

	const clearAllInputs = () => {
		setName('')
		setLastName('')
		setEmail('')
		setMessage('')
	}

	const validateCaptcha = () => {
		if (captcha.current.getValue()) {
			setValidCaptcha(true)
			console.log('Usuario autenticado!')
		} else {
			setValidCaptcha(false)
			console.log('Usuario NÂO autenticado!')
		}
	}

	const captcha = useRef(null)

	const sendEmail = (e) => {
		e.preventDefault()

		if (name === '' || lastName === '' || email === '' || message === '') {
			console.log('Erro. Preencha todos os campos!')
			return
		}

		if (!validCaptcha) {
			setValidCaptcha(false)
			return
		}

		setLoading(true)

		const templateParams = {
			from_name: fullName,
			message: message,
			email: email
		}

		emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
			.then((res) => {
				console.log('EMAIL ENVIADO', res.status, res.text)
				setAlertIsOpen(true)
				setEmailSuccessfullySent(true)

				clearAllInputs()

				setTimeout(() => {
					setLoading(false)
				}, openAlertTime)

			}, (error) => {
				console.log('Erro: ', error)
				setAlertIsOpen(true)
				setEmailSuccessfullySent(false)

				setTimeout(() => {
					setLoading(false)
				}, openAlertTime)
			})
	}

	return (
		<Section title={'Fale Comigo'} id={'contact-container'} paddingTop={true}>
			<Container>
				<p>Sinta-se à vontade para me contatar. Aguardo sua mensagem! :) </p>
				<div id="contact-infos">
					<div className='info'>
						<AiOutlineUser />
						<div>
							<p>Nome</p>
							<h4>João Paulo Santos</h4>
						</div>
					</div>
					<div className='info'>
						<FiMapPin />
						<div>
							<p>Endereço</p>
							<h4>Lagoa De São Francisco / PI</h4>
						</div>
					</div>
					<div className='info'>
						<MdOutlineEmail />
						<div>
							<p>E-mail</p>
							<h4>dev.joaopaulosantos@gmail.com</h4>
						</div>
					</div>
				</div>
			</Container>
			<Container center={true}>
				<div id="form-email">
					<form onSubmit={sendEmail}>
						<input
							id='name'
							type="text"
							placeholder='Nome'
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							id='last-name'
							type="text"
							placeholder='Sobrenome'
							value={lastName}
							required
							onChange={(e) => setLastName(e.target.value)}
						/>
						<input
							id='email'
							type="email"
							placeholder='Email'
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							id='msg'
							name="msg"
							rows="4"
							cols="30"
							placeholder='Escrever...'
							value={message}
							required
							onChange={(e) => setMessage(e.target.value)}>
						</textarea>
						<div className="recaptcha">
							<ReCAPTCHA
								theme='dark'
								size='normal'
								ref={captcha}
								sitekey={import.meta.env.VITE_CAPTCHA_KEY}
								onChange={validateCaptcha}
							/>
							{validCaptcha === false && <div className="error-recaptcha">Clique em "Não sou um robô"</div>}
						</div>
						<button type='submit' id='button' disabled={loading ? true : false} className={`btn ${loading ? 'btn-disabled' : null}`}>Enviar</button>
					</form>
				</div>
			</Container>
		</Section>
	)
}

export default Contact