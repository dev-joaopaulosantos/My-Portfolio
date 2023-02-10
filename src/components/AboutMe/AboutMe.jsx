import Avatar from '../../img/eu.jpg'
import './AboutMe.sass'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

const Sidebar = () => {
  return (
    <section id='about-container'>
      <div id="image">
        <img src={Avatar} alt="João Paulo Santos" />
      </div>
      <div id="about">
        <h3>Olá, eu sou desenvolvedor web</h3>
        <h1>João Paulo Santos</h1>
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
        <div id="btn-container">
          <a href="#">Ver Curriculo</a>
        </div>
        <SocialNetworks />
      </div>
    </section>
  )
}
export default Sidebar
