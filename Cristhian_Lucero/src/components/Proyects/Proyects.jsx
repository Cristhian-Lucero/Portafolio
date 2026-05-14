import { AllProyects } from './AllProyects'
import './Proyects.css'
import { Proyectos as datos } from '../../data/proyectos'

export function Proyects() {
  return (
    <section id="Proyects" className="proyects">
      <h1>Proyectos</h1>
      <article className="proyects-article">
        <button className="proyects-button">{`<`}</button>
        <div className="proyects-div">
          <ul className="proyects-list">
            <AllProyects proyectos={datos} />
          </ul>
        </div>
        <button className="proyects-button">{`>`}</button>
      </article>
    </section>
  )
}
