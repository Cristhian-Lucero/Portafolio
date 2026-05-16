import './Header.css'
export function Header() {
  return (
    <header className="header">
      <img
        src="https://cdn-icons-png.flaticon.com/128/4191/4191241.png"
        alt="imagen"
      />
      <nav className="header-nav">
        <a href="#aboutMe">Sobre Mí</a>
        <a href="#secciones">Proyectos & Certificados</a>
        <a href="#tecnologies">Tecnologias</a>
      </nav>
    </header>
  )
}
