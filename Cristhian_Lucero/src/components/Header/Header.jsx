import './Header.css'
import logoReact from '../../assets/react.svg'
export function Header() {
  const logo = logoReact //TODO
  return (
    <header className="header">
      <img src={logo} alt="imagen" />
      <nav className="header-nav">
        <a href="#aboutMe">Sobre Mí</a>
        <a href="#Proyects">Proyectos</a>
        <a href="#tecnologies">Tecnologias</a>
      </nav>
    </header>
  )
}
