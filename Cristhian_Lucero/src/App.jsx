import './Estilo/App.css'
import './Estilo/Inicio.css'
import './Estilo/Recipiente.css'
import './Estilo/Proyectos.css'
import perfil from './assets/Perfil2.png'
import Proyectos from './data/proyectos.js';
import Lenguajes from './data/lenguajes.js';
import { Recipiente } from './Componentes/Recipiente.jsx'
import { Inicio } from './Componentes/Inicio.jsx'
import { Proyecto } from './Componentes/Proyecto.jsx'


export function App() {
  return (
    <>
      <header>
        <div className="atajos">
          <img className='logo' src='https://cdn-icons-png.flaticon.com/128/5831/5831220.png'></img>
          <nav>
            <a href="#inicio">Sobre Mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#tecnologias">Tecnologias</a>
          </nav>
        </div>
      </header>



      <section id='inicio'>
        <div className="cl-app">
          <Inicio 
            nam="Cristhian Lucero"
            title="Desarrollador Back End"
            recidencia="Paraguay - Asunción"
            link="https://www.linkedin.com/in/cristhian-lucero"
            git="https://github.com/Cristhian-Lucero"
            img={perfil}
          >
            Soy estudiante de Ingeniería en Informática en la Facultad Politécnica de la Universidad Nacional de Asunción. Me apasiona la tecnología y estoy comprometido con el aprendizaje continuo y la aplicación de mis conocimientos en el desarrollo de soluciones innovadoras. Tengo experiencia en el trabajo con lenguajes de programación y en la gestión de proyectos relacionados con sistemas de información. Estoy enfocado en seguir creciendo profesionalmente y contribuir al avance de la tecnología en el ámbito de la informática.
          </Inicio>
        </div>
      </section>

      <section id='proyectos'>
        <div className="cl-app-title"> 
          <div className='cl-app-title-div'>
            <img className='cl-app-img' src='https://cdn-icons-png.flaticon.com/128/4471/4471714.png'></img>
            <header className="cl-app-title-header"><h1>Proyectos</h1></header>
          </div>
          <article className='cl-app-proyectos'>
            {
              Proyectos.map( (proyecto) => { const {name, img, url, desc} = proyecto
                  return (
                    <Proyecto key={name} name={name} img={img} description={desc} repo={url}></Proyecto>
                  )
                }
              )
            }
          </article>
        </div>
      </section>


      <section id='tecnologias'>
        <div className="cl-app-title">
          <div className='cl-app-title-div'>
            <img className='cl-app-img' src='https://cdn-icons-png.flaticon.com/128/1688/1688404.png'></img>
            <header className="cl-app-title-header"><h1>Tecnologías</h1></header>
          </div>
          <div>
          {
            Lenguajes.map( (lenguaje) => { const {name, img} = lenguaje
                return (
                  <Recipiente key={name} img={img}>
                    {name}
                  </Recipiente>
                )
              }
            )
          }
          </div>
        </div>
      </section>


      <footer className='footer'>
        <p>&copy; 2025 Cristhian Lucero. All rights reserved</p>
      </footer>
    </>
  )
}

