import { useState } from 'react'
import { createPortal } from 'react-dom'

export function AllProyects({ proyectos, onMouseDown, onMouseUp, isDragging }) {
  const [max, setMax] = useState(false)
  const [imgMax, setImgMax] = useState(null)
  return (
    <>
      {proyectos.map((proyect) => {
        return (
          <li key={proyect.name}>
            <h2>{proyect.name}</h2>
            <img
              onClick={() => {
                if (isDragging.current) return
                setMax(true)
                setImgMax(proyect.img)
              }}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              draggable="false"
              src={proyect.img}
              alt="imagen"
            />
            <p>{proyect.desc}</p>
          </li>
        )
      })}
      {max &&
        createPortal(
          <div
            onClick={() => {
              setMax(false)
              setImgMax(null)
            }}
            className="div-max"
          >
            <img className="div-max-img" src={imgMax} alt="img" />
          </div>,
          document.body,
        )}
    </>
  )
}
