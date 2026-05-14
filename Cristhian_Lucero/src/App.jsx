import { AboutMe } from './components/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { toMe } from './data/personalData'
import imgPerfil from './assets/Perfil2.png'
import { Proyects } from './components/Proyects/Proyects'
import './App.css'
function App() {
  return (
    <>
      <Header />
      <AboutMe fotoPerfil={imgPerfil} toMe={toMe} />
      <div className="secciones">
        <Proyects />
        {/*TODO: Certificados */}
      </div>
    </>
  )
}
export default App
