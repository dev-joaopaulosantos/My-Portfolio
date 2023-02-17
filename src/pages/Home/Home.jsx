import React, { useState } from 'react'
import './Home.sass'
// import MainContent from '../../components/MainContent/MainContent'
import AboutMe from '../../components/AboutMe/AboutMe'
import TechnologiesContainer from '../../components/TecnologiesContainer/TechnologiesContainer'
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'
import Contact from '../../components/Contact/Contact'
import AlertComponent from '../../components/AlertComponent/AlertComponent'

const openAlertTime = 5000

const Home = () => {
  const [alertIsOpen, setAlertIsOpen] = useState(false)
  const [emailSuccessfullySent, setEmailSuccessfullySent] = useState(false)

  return (
    <main id='main-container'>
      <AlertComponent 
      alertIsOpen={alertIsOpen} 
      setAlertIsOpen={setAlertIsOpen}
      emailSuccessfullySent={emailSuccessfullySent}
      setEmailSuccessfullySent={setEmailSuccessfullySent}
      openAlertTime={openAlertTime}
      />
      <AboutMe />
      <TechnologiesContainer />
      <ProjectsContainer />
      <Contact 
      setAlertIsOpen={setAlertIsOpen}
      setEmailSuccessfullySent={setEmailSuccessfullySent}
      openAlertTime={openAlertTime}
      />
    </main>
  )
}

export default Home