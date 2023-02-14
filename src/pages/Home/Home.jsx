import React, { useState } from 'react'
import './Home.sass'
// import MainContent from '../../components/MainContent/MainContent'
import AboutMe from '../../components/AboutMe/AboutMe'
import TechnologiesContainer from '../../components/TecnologiesContainer/TechnologiesContainer'
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'
import Contact from '../../components/Contact/Contact'
import AlertComponent from '../../components/AlertComponent/AlertComponent'


const Home = () => {
  const [sendEmailError, setSendEmailError] = useState(false)

  return (
    <main id='main-container'>
      {sendEmailError ? <AlertComponent sendEmailError={sendEmailError} setSendEmailError={setSendEmailError} /> : ''}
      <AboutMe />
      <TechnologiesContainer />
      <ProjectsContainer />
      <Contact sendEmailError={sendEmailError} setSendEmailError={setSendEmailError} />
    </main>
  )
}

export default Home