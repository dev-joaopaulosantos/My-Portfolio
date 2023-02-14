import './Contact.sass'
import { AiOutlineUser } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = ({ alertIsOpen, setAlertIsOpen, emailSuccessfullySent, setEmailSuccessfullySent }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const fullName = `${name} ${lastName}`

  useEffect(() => {
    console.log(alertIsOpen)
    console.log(emailSuccessfullySent)
  }, [alertIsOpen])

  const sendEmail = (e) => {
    e.preventDefault()

    if(name === '' || lastName === ''|| email === '' || message === ''){
      setAlertIsOpen(true)
      setEmailSuccessfullySent(false)
    }else{
      setAlertIsOpen(true)
      setEmailSuccessfullySent(true)
    }

    // const templateParams = {
    //   from_name: fullName,
    //   message: message,
    //   email: email
    // }

    // emailjs.send('service_u06d2aa', 'template_lmgxe1a', templateParams, 'B8FYS5jAA7-k2REy6')
    //   .then((res) => {
    //     console.log('EMAIL ENVIADO', res.status, res.text)
    //     if (res.status == 200) {
    //       setAlertIsOpen(false)
    //     }

    //     setName('')
    //     setLastName('')
    //     setEmail('')
    //     setMessage('')

    //   }, (error) => {
    //     console.log('Erro: ', error)
    //   })

  }

  return (
    <section id='contact-container'>
      <div className="line"></div>
      <div id="contact-infos">
        <div className="subtitle">
          <h2>Fale comigo</h2>
          <div className="line-subtitle"></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Similique est consequatur facere assumenda recusandae magni
          saepe velit vitae expedita. Officiis explicabo, nemo iste
          illo voluptate accusamus beatae et id ex.
        </p>
        <div className='info'>
          <AiOutlineUser />
          <div>
            <p>Nome</p>
            <p>João Paulo Santos</p>
          </div>
        </div>
        <div className='info'>
          <FiMapPin />
          <div>
            <p>Endereço</p>
            <p>Lagoa De São Francisco / PI</p>
          </div>
        </div>
        <div className='info'>
          <MdOutlineEmail />
          <div>
            <p>E-mail</p>
            <p>joao.p.santos.silva22@gmail.com</p>
          </div>
        </div>
      </div>
      <div id="form-email">
        <form onSubmit={sendEmail}>
          <input id='name' type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          <input id='last-name' type="text" placeholder='Sobrenome' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input id='email' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea id='msg' name="msg" rows="4" cols="30" placeholder='Escrever...' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <input type='submit' className='button' value='Enviar' />
        </form>
      </div>
    </section>
  )
}

export default Contact