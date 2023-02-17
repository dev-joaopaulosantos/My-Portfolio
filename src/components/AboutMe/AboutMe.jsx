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
        <p>
          Sou um desenvolvedor full stack com foco em web, porém já desenvolvi também aplicações
          mobile. Estou sempre em busca de novas oportunidades de apredizado. Tento me atualizar o maximo possivel
          sobre as mais atuais tecnologias e ferramentas para construir projetos sólidos e modernos. <br />
          <strong>Tecnologias: React - JavaScript - Sass - Material UI - PHP - MySql</strong>
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
