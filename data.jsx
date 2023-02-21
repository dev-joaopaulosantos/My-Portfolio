import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import ReactMovies from './src/img/ReactMovies.png'

export default {
    socialNetworks: [
        { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/dev-joaopaulosantos/' },
        { name: 'github', icon: <FaGithub />, link: 'https://github.com/dev-joaopaulosantos' },
        { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/joao_paul0_s/' }
    ],
    technologies: [
        { id: 'html', name: 'HTML5', progress: 70, icon: <DiHtml5 /> },
        { id: 'css', name: 'CSS3', progress: 65, icon: <DiCss3 /> },
        { id: 'js', name: 'JavaScript', progress: 55, icon: <DiJsBadge /> },
        { id: 'node', name: 'Node.js', progress: 10, icon: <DiNodejsSmall /> },
        { id: 'mysql', name: 'MySQL', progress: 40, icon: <DiMysql /> },
        { id: 'react', name: 'React', progress: 45, icon: <DiReact /> },
    ],
    projects: [
        {
            id: 1,
            name: 'ReactMovie',
            image: ReactMovies,
            link: 'https://joaopaulo-react-movies.netlify.app/',
            description: `Este projeto usa uma API de filmes chamada (The Movie database), que retorna informações
            de vários filmes e séries, o layout foi inspirado nos principis sites de filmes do mercado. 
            Resolvi desenvolver o ReactMovies, pois queria colocar à prova o que tinha aprendido sobre API´s e React.
            Futuramene pretendo desenvolver minha própria API, para deixar o projeto mais customizado e padronizado`
        }
    ]
}