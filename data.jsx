import { FaLinkedinIn, FaGithub, FaInstagram, FaJava, FaGitAlt, FaReact } from 'react-icons/fa'
import { DiJsBadge, DiMysql, DiReact } from 'react-icons/di'
import { SiPhp, SiNodedotjs, SiMongodb, SiMysql, SiVisualstudiocode } from 'react-icons/si'

import ReactMovies from './src/img/ReactMovies.png'
import ImgApi from './src/img/api.jpg'

const teste = "teste"

export default {
    socialNetworks: [
        { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/dev-joaopaulosantos/' },
        { name: 'github', icon: <FaGithub />, link: 'https://github.com/dev-joaopaulosantos' },
        { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/joao_paul0_s/' }
    ],

    technologies: {
        languages: [
            { id: 'js', name: 'JavaScript', icon: <DiJsBadge title='JavaScript' /> },
            { id: 'java', name: 'Java', icon: <FaJava title='Java' /> },
            { id: 'php', name: 'PHP', icon: <SiPhp title='PHP' /> },
        ],
        frameworks: [
            { id: 'react', name: 'React', icon: <FaReact title='React' /> },
        ],
        tools: [
            { id: 'node', name: 'Node.js', icon: <SiNodedotjs title='Node.js' /> },
            { id: 'git', name: 'Git', icon: <FaGitAlt title='Git' /> },
            { id: 'github', name: 'GitHub', icon: <FaGithub title='GitHub' /> },
            { id: 'vscode', name: 'Visual Studio Code', icon: <SiVisualstudiocode title='Visual Studio Code' /> },
        ],
        database: [
            { id: 'mysql', name: 'MySQL', icon: <SiMysql title='MySQL' /> },
            { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb title='MongoDB' /> },
        ]
    },

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
            description: `Desenvolvi essa API utilizando Node.js, MongoDB, Express e Mongoose. É usada para gerenciar campeonatos de 
            futebol amador na cidade de Lagoa de São Francisco. Essa API oferece rotas públicas e privadas, criando uma 
            plataforma segura e eficiente para o controle e organização dos campeonatos locais. As rotas públicas permitem 
            acesso a informações essenciais, como tabela de classificação, artilharia, jogos e resultados anteriores, 
            possibilitando que torcedores, jogadores e interessados acompanhem os detalhes dos campeonatos em tempo real.`
        }
    ]
}