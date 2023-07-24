import './TechnologiesContainer.css'
import data from '../../../data'
import Technology from '../Technology/Technology'
import Container from '../Container/Container'
import Section from '../Section/Section'

const technologies = data.technologies

const
  TechnologiesContainer = () => {
    return (
      <Section title={'Habilidades'} id={'technologies-container'} paddingTop={true}>
        <Container>
          <p>Com base nos meus estudos acadêmicos e em cursos online, tenho adquirido
            conhecimentos sólidos no desenvolvimento de aplicações web e mobile, abrangendo tanto o
            front-end quanto o back-end. Tenho explorado diversas linguagens de programação,
            bibliotecas e frameworks, capacitando-me a construir soluções eficientes e robustas.
            Estou familiarizado com uma ampla gama de tecnologias relevantes para o desenvolvimento
            web moderno. Algumas das habilidades que adquiri incluem:
          </p>
        </Container>
        <Container>
          <Technology title={"Liguagens"} technology={technologies.languages} />
          <Technology title={"Frameworks / Bibliotecas"} technology={technologies.frameworks} />
          <Technology title={"Ferramentas"} technology={technologies.tools} />
          <Technology title={"Banco de Dados"} technology={technologies.database} />
        </Container>
      </Section>
    )
  }

export default TechnologiesContainer