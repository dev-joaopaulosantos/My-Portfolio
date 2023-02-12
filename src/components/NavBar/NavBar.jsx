import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import '../NavBar/NavBar.sass'
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks'
import { useState } from 'react'

const NavBar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handlerVisibilityMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    console.log("funcionou")
  }

  return (
    <header>
      <div id="nav-desktop">
        <div id="name-container">
          <div id='icon-user'><span>JP</span></div>
          <h2>João Paulo Santos</h2>
        </div>
        <nav id='nav'>
          <ul>
            <li><a href="#" >Sobre mim</a></li>
            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Projetos</a></li>
          </ul>
        </nav>
        <button id="mobile-menu-btn" onClick={() => handlerVisibilityMobileMenu()}>
          {menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <nav id='menu-mobile' className={menuIsOpen ? 'menu-open' : 'menu-close'}>
        <ul>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Habilidades</a></li>
          <li><a href="#">Projetos</a></li>
        </ul>
        <div id="social-networks">
          <SocialNetworks />
        </div>
      </nav>
    </header>
  )
}

export default NavBar