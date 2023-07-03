import './TechnologiesContainer.sass'
import ProgressBar from '../ProgressBar/ProgressBar'
import data from '../../../data'

const technologies = data.technologies

const TechnologiesContainer = () => {
  return (
    <section id="technologies-container">
      <div className="subtitle">
        <h2> Habilidades </h2>
        <div className="line-subtitle"></div>
      </div>
      <div className="content">
        <div className="skills">
          <p>Com base nos meus estudos acadêmicos e em cursos online, tenho adquirido 
            conhecimentos sólidos no desenvolvimento de aplicações web e mobile, abrangendo tanto o 
            front-end quanto o back-end. Tenho explorado diversas linguagens de programação, 
            bibliotecas e frameworks, capacitando-me a construir soluções eficientes e robustas.
            Estou familiarizado com uma ampla gama de tecnologias relevantes para o desenvolvimento 
            web moderno. Algumas das habilidades que adquiri incluem:
          </p>
        </div>
        <div className="technologies">
          {technologies.map((tech) => (
            <div
              className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <ProgressBar progress={tech.progress} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default TechnologiesContainer