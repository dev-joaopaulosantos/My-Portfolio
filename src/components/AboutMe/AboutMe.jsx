import Avatar from '../../img/eu.png'
import './AboutMe.sass'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { useEffect, useRef } from 'react'

const Sidebar = () => {
  const element = useRef()
  

  const writingAnimation = (phrase) => {
    const phraseArray = phrase.split('')
    element.current.innerHTML = ''
    phraseArray.forEach((letter, i) => {
      setTimeout(() => {
        element.current.innerHTML += letter
      }, 100 * i);
    })

  }

  useEffect(() => {
    const welcomePhrase = element.current.innerHTML
    writingAnimation(welcomePhrase)
  }, [])

  return (
    <section id='about-container'>
      <div id="image">
        <img src={Avatar} alt="João Paulo Santos" />
      </div>
      <div id="about">
        <h3 ref={element}>Olá, seja bem vindo(a) ao meu site!</h3>
        <h1>João Paulo Santos</h1>
        <p>
          Sou um desenvolvedor full stack com foco em web, porém já desenvolvi também aplicações
          mobile. Estou sempre em busca de novas oportunidades de apredizado. Tento me atualizar o maximo possivel
          sobre as mais atuais tecnologias e ferramentas para construir projetos sólidos e modernos.
        </p>
        <p id='p-tecnologies'>Tecnologias: React - JavaScript - Sass - Material UI - PHP - MySql</p>
        <div id="btn-container">
          <a href="#">Ver Curriculo</a>
        </div>
        <SocialNetworks />
      </div>
    </section>
  )
}
export default Sidebar
