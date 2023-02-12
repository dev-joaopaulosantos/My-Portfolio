import './Contact.sass'
import { AiOutlineUser } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact-container'>
      <div className="line"></div>
        <div id="contact-infos">
          <h2>Fale comigo</h2>
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
          <form>
            <input id='name' type="text" placeholder='Nome' />
            <input id='last-name' type="text" placeholder='Sobrenome' />
            <input id='email' type="email" placeholder='Email' />
            <textarea id='msg' name="msg" rows="4" cols="30" placeholder='Escrever...'></textarea>
            <button>Enviar</button>
          </form>
        </div>
    </section>
  )
}

export default Contact