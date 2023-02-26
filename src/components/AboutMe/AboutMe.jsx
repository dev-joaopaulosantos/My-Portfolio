import Avatar from '../../img/eu.png'
import './AboutMe.sass'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { useEffect, useRef, useState } from 'react'

const Sidebar = () => {
  const element = useRef() 

  const writingAnimation = (elemento) => {
    const fraseArray = elemento.innerText.split('')
    console.log(fraseArray)
    elemento.innerText = ''
    fraseArray.forEach((letter, i) => {
      setTimeout(() => {
        elemento.innerText += letter
      }, 100 * i);
    })
  }

  useEffect(() => {
    const h3 = element.current
    writingAnimation(h3)
  }, [])

  return (
    <section id='about-container'>
      <div id="image">
        <img src={Avatar} alt="João Paulo Santos" />
      </div>
      <div id="about">
        <h3 ref={element}>Seja bem vindo(a) ao meu site!</h3>
        <h1>João Paulo Santos</h1>
        <p>
          Sou um desenvolvedor full stack, sempre em busca de novas oportunidades de apredizado.
          Faço parte de comunidades de programação onde compartilho e absorvo conhecimento.
          Tento me atualizar o maximo possivel sobre as mais atuais tecnologias e ferramentas para construir projetos sólidos e modernos.
        </p>
        <p id='academic-education'>Análise e Desenvolvimento de Sistemas - VI módulo- IFPI</p>
        <div id="btn-container">
          <a href="">Ver Curriculo</a>
        </div>
        <SocialNetworks />
      </div>
    </section>
  )
}
export default Sidebar
