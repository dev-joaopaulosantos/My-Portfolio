import Avatar from '../../img/eu.jpg'
import './Aboutme.sass'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <div id="infos">
        <img src={Avatar} alt="João Paulo Santos" />
        <p className="title">Desenvolvedor Web</p>
        <SocialNetworks />
        <a href="" className="btn">Ver Curriculo</a>
      </div>
      <section className="about-container">
        <h2>Sobre mim</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          sed odio vero dignissimos omnis provident, animi tempore a harum
          facilis doloribus nisi dolore ex sequi consectetur
          assumenda placeat quod facere.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          sed odio vero dignissimos omnis provident, animi tempore a harum
          facilis doloribus nisi dolore ex sequi consectetur
          assumenda placeat quod facere.
        </p>
      </section>
    </div>
  )
}
export default Sidebar
