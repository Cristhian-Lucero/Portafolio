import { AllProyects } from './AllProyects'
import './Proyects.css'
import { useMove } from '../../hooks/useMove'

export function Proyects({ title, datos }) {
  const {
    isDragging,
    position,
    handleMouseDown,
    handleMouseUp,
    handleTouchEnd,
    handleTouchStart,
    setPosition,
  } = useMove({ datos })
  return (
    <section id="Proyects" className="proyects">
      <article className="proyects-article">
        <h1>{title}</h1>
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
              isDragging={isDragging}
            />
          </ul>
        </div>
        <div className="dots">
          {datos.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === position ? 'dot--active' : ''}`}
              onClick={() => setPosition(i)}
            />
          ))}
        </div>
      </article>
    </section>
  )
}
