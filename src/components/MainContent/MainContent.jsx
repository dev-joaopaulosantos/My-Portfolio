import './MainContent.sass'
import ContactInformation from '../ContactInformation/ContactInformation'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import TechnologiesContainer from '../TecnologiesContainer/TechnologiesContainer'

const MainContent = () => {
  return (
    <main id="main-content">
      <TechnologiesContainer />
      <ProjectsContainer />
      {/* <ContactInformation /> */}
    </main>
  )
}

export default MainContent