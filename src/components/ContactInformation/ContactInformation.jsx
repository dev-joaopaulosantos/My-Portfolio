import './ContactInformation.sass'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

const ContactInformation = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(86) 9 8181-5369</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='mail-icon' />
            <div>
                <h3>E-mail</h3>
                <p>joao.p.santos.silva22@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Lagoa De São Francisco/PI</p>
            </div>
        </div>
    </section>
  )
}

export default ContactInformation