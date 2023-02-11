import React from 'react'
import './Home.sass'
// import MainContent from '../../components/MainContent/MainContent'
import AboutMe from '../../components/AboutMe/AboutMe'
import TechnologiesContainer from '../../components/TecnologiesContainer/TechnologiesContainer'
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'
import Contact from '../../components/Contact/Contact'


const Home = () => {
  return (
    <main id='main-container'>
      <AboutMe />
      <TechnologiesContainer />
      <ProjectsContainer />
      <Contact />
    </main>
  )
}

export default Home