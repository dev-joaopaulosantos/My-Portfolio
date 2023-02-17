import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import Netflix from './src/img/Netflix.png'
import ImgTeste from './src/img/Icon.png'

export default {
    socialNetworks: [
        { name: 'linkedin', icon: <FaLinkedinIn />, link: 'http://google.com' },
        { name: 'github', icon: <FaGithub />, link: 'http://google.com' },
        { name: 'instagram', icon: <FaInstagram />, link: 'http://google.com' }
    ],
    technologies: [
        { id: 'html', name: 'HTML5', progress: 70, icon: <DiHtml5 /> },
        { id: 'css', name: 'CSS3', progress: 65, icon: <DiCss3 /> },
        { id: 'js', name: 'JAvaScript', progress: 50, icon: <DiJsBadge /> },
        { id: 'node', name: 'Node.js', progress: 10, icon: <DiNodejsSmall /> },
        { id: 'mysql', name: 'MySQL', progress: 40, icon: <DiMysql /> },
        { id: 'react', name: 'React', progress: 45, icon: <DiReact /> },
    ],
    projects: [
        {
            id: 1,
            name: 'ReactMovie',
            image: Netflix,
            link: 'http://google.com/',
            description: `lorem ipsum dolor sit amet, consectetur adip 
            lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet 
            lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet 
            lorem ipsum dlorem ipsum dolor sit amet lorem ipsum lorem 
            ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsum lorem 
            ipsum lorem ipsum lorem ipsum lorem ipsum`
        },
        {
            id: 2,
            name: 'Teste',
            image: ImgTeste,
            link: 'http://google.com/',
            description: `lorem ipsum dolor sit amet, consectetur adip 
            lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet 
            lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet 
            lorem ipsum dlorem ipsum dolor sit amet lorem ipsum lorem 
            ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsum lorem 
            ipsum lorem ipsum lorem ipsum lorem ipsum`
        }
    ]
}