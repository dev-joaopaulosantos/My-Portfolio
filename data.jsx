import { DiHtml5, DiCss3, DiJsBadge, DiMysql, DiReact } from 'react-icons/di'
import { SiPhp, SiCsharp, SiDotnet, SiFlutter, SiGithub, SiNodedotjs } from 'react-icons/si'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import ReactMovies from './src/img/ReactMovies.png'
import ImgApi from './src/img/api.jpg'

export default {
    socialNetworks: [
        { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/dev-joaopaulosantos/' },
        { name: 'github', icon: <FaGithub />, link: 'https://github.com/dev-joaopaulosantos' },
        { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/joao_paul0_s/' }
    ],
    technologies: [
        // { id: 'html', name: 'HTML5', progress: 70, icon: <DiHtml5 /> },
        // { id: 'css', name: 'CSS3', progress: 65, icon: <DiCss3 /> },
        { id: 'js', name: 'JavaScript', progress: 65, icon: <DiJsBadge /> },
        { id: 'react', name: 'React', progress: 50, icon: <DiReact /> },
        { id: 'node', name: 'Node.js', progress: 50, icon: <SiNodedotjs /> },
        { id: 'csharp', name: 'C#', progress: 35, icon: <SiCsharp /> },
        { id: 'github', name: 'GitHub', progress: 45, icon: <SiGithub /> },
        // { id: 'dotnet', name: '.NET', progress: 35, icon: <SiDotnet /> },
        // { id: 'php', name: 'PHP', progress: 45, icon: <SiPhp /> },
        { id: 'flutter', name: 'Flutter', progress: 40, icon: <SiFlutter /> },
        { id: 'mysql', name: 'MySQL', progress: 55, icon: <DiMysql /> },
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
        },
        {
            id: 2,
            name: 'API Futebol Lagoense',
            image: ImgApi,
            link: 'https://github.com/dev-joaopaulosantos/Documentation-FutebolLagoense-API',
            description: `Desenvolvi essa API utilizando Node.js, MongoDB, Express e Mongoose para gerenciar 
            campeonatos de futebol amador da cidade de Lagoa de São Francisco. Esta API oferece rotas públicas
            e privadas, criando uma plataforma segura e eficiente para o controle e organização dos campeonatos locais.
            As rotas públicas da API são todas do tipo "GET", permitindo o acesso a informações essenciais 
            sobre os campeonatos, como tabela de classificação, artilharia, jogos e resultados 
            anteriores. Isso possibilita que torcedores, jogadores e demais interessados possam 
            acompanhar os detalhes dos campeonatos em tempo real.`
        }
    ]
}