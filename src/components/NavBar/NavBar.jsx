import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import '../NavBar/NavBar.sass'
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks'
import { useEffect, useRef, useState } from 'react'

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const desktopMenu = useRef()
  const mobileMenu = useRef()

  const handlerVisibilityMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenuSlowly = () => {
    setTimeout(() => {
      if(mobileMenu.current.classList.contains('menu-open')){
        setMenuIsOpen(!menuIsOpen)
      }
    }, 200)
  }

  function smoothScroll(e) {
    e.preventDefault()

    const href = this.getAttribute('href')
    const offsetTop = document.querySelector(href).offsetTop

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    })
  }

  useEffect(() => {

    const desktopLinks = desktopMenu.current.querySelectorAll('#menu-desktop ul li a')
    const mobileLinks = mobileMenu.current.querySelectorAll('#menu-mobile ul li a')
    const allLinks = [...desktopLinks, ...mobileLinks]

    allLinks.forEach((link) => {
      link.addEventListener('click', smoothScroll)
    })

  }, [])

  useEffect(() => {
    document.body.style.overflowY = menuIsOpen ? 'hidden' : 'auto'
  }, [menuIsOpen])

  return (
    <header>
      <div id="nav-desktop">
        <div id="name-container">
          <div id='icon-user'><span>JP</span></div>
          <h2>João Paulo Santos</h2>
        </div>
        <nav id='menu-desktop' ref={desktopMenu}>
          <ul>
            <li><a href="#about-container">Sobre mim</a></li>
            <li><a href="#technologies-container">Habilidades</a></li>
            <li><a href="#projects-container">Projetos</a></li>
            <li><a href="#contact-container">Contato</a></li>
          </ul>
        </nav>
        <button id="mobile-menu-btn" onClick={() => handlerVisibilityMobileMenu()}>
          {menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <nav id='menu-mobile' ref={mobileMenu} className={menuIsOpen ? 'menu-open' : 'menu-close'}>
        <ul onClick={() => closeMenuSlowly()}>
          <li><a href="#about-container">Sobre mim</a></li>
          <li><a href="#technologies-container">Habilidades</a></li>
          <li><a href="#projects-container">Projetos</a></li>
          <li><a href="#contact-container">Contato</a></li>
        </ul>
        <div id="social-networks">
          <SocialNetworks />
        </div>
      </nav>
    </header>
  )
}

export default NavBar