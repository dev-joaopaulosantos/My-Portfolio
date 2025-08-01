import Avatar from '../../img/eu.png'
import './AboutMe.css'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'
import Section from '../Section/Section'

const Sidebar = () => {
  const element = useRef()

  const writingAnimation = (elemento) => {
    const fraseArray = elemento.innerText.split('')
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
    <Section id={'about-container'} paddingTop={true}>

      <Container center={true} hideContainer={true}>
        <div id="image">
          <img src={Avatar} alt="João Paulo Santos" />
        </div>
      </Container>

      <Container center={true}>
        <div id="about">
          <h3 ref={element}>Seja bem vindo(a) ao meu site!</h3>
          <h1>João Paulo Santos Teste</h1>
          <p>
            Sou um desenvolvedor full stack apaixonado por desafios e sempre em busca de novas oportunidades
            para expandir meus conhecimentos. Sou um entusiasta das comunidades de programação, onde compartilho
            minhas experiências e aprendo com outros profissionais talentosos. Meu objetivo é estar sempre
            atualizado sobre as tecnologias e ferramentas mais recentes, a fim de construir projetos sólidos e modernos.
          </p>
          <p id='academic-education'>Análise e Desenvolvimento de Sistemas - VI módulo- IFPI</p>
          <SocialNetworks />
        </div>
      </Container>
      
    </Section>
  )
}
export default Sidebar
