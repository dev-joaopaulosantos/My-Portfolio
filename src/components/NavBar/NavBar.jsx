import React from 'react'
import '../NavBar/NavBar.sass'

const NavBar = () => {
  return (
    <header>
      <div id="name-container">
        <div id='icon-user'>JP</div>
        <h2>João Paulo Santos</h2>
      </div>
      <nav id='nav'>
        <ul>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Habilidades</a></li>
          <li><a href="#">Projetos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar