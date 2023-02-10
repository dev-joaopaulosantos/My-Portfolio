import './TechnologiesContainer.sass'
import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'
import ProgressBar from '../ProgressBar/ProgressBar'

const technologies = [
  { id: 'html', name: 'HTML5', progress: 70, icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', progress: 65, icon: <DiCss3 /> },
  { id: 'js', name: 'JAvaScript', progress: 45, icon: <DiJsBadge /> },
  { id: 'node', name: 'Node.js', progress: 10, icon: <DiNodejsSmall /> },
  { id: 'mysql', name: 'MySQL', progress: 30, icon: <DiMysql /> },
  { id: 'react', name: 'React', progress: 46, icon: <DiReact /> },
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Habilidades</h2>
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