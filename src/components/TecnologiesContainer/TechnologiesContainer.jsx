import './TechnologiesContainer.sass'
// import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'
import ProgressBar from '../ProgressBar/ProgressBar'
import data from '../../../data'

const technologies = data.technologies

const TechnologiesContainer = () => {
  return (
    <section id="technologies-container">
      <div className="subtitle">
        <h2>Habilidades</h2>
        <div className="line-subtitle"></div>
      </div>
      <div className="content">
        <div className="skills">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus magni voluptate officiis laudantium incidunt
            iusto rem. Odit aliquam maxime aliquid laboriosam, rerum et
            voluptatibus nesciunt blanditiis deleniti, tempore obcaecati
            placeat?
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