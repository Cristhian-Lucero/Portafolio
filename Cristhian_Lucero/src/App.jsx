import { AboutMe } from './components/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { toMe } from './data/personalData'
import tecnologias from './data/tecnologias'
import imgPerfil from './assets/Perfil2.png'
import { Proyects } from './components/Proyects/Proyects'
import { Proyectos as datos } from './data/proyectos'
import { Certs } from './data/certs'
import './App.css'
import { Tecnologias } from './components/tecnologias/Tecnologias'
function App() {
  return (
    <>
      <Header />
      <AboutMe fotoPerfil={imgPerfil} toMe={toMe} />
      <div id="secciones" className="secciones">
        <Proyects title="Proyectos" datos={datos} />
        <Proyects title="Certificados" datos={Certs} />
        {/*TODO: Certificados */}
      </div>
      <Tecnologias tecnologias={tecnologias} />
    </>
  )
}
export default App
