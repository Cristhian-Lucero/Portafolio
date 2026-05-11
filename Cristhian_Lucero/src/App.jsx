import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { toMe } from './data/personalData'
import imgPerfil from './assets/Perfil2.png'

function App() {
  return (
    <>
      <Header />
      <AboutMe fotoPerfil={imgPerfil} toMe={toMe} />
    </>
  )
}
export default App
