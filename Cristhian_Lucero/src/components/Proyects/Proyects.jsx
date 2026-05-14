import { AllProyects } from './AllProyects'
import './Proyects.css'
import { Proyectos as datos } from '../../data/proyectos'
import { useMove } from '../../hooks/useMove'

export function Proyects() {
  const {
    position,
    handleMouseDown,
    handleMouseUp,
    handleTouchEnd,
    handleTouchStart,
  } = useMove({ datos })
  return (
    <section id="Proyects" className="proyects">
      <article className="proyects-article">
        <h1>Proyectos</h1>
        <div
          className="proyects-div"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ul
            onDragStart={(e) => {
              e.preventDefault()
            }}
            className="proyects-list"
            style={{ transform: `translateX(-${position * 100}%)` }}
          >
            <AllProyects
              proyectos={datos}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            />
          </ul>
        </div>
      </article>
    </section>
  )
}
