import { useState } from 'react'
import { createPortal } from 'react-dom'

export function AllProyects({ proyectos, onMouseDown, onMouseUp }) {
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
          <div className="div-max">
            <img
              onClick={() => {
                setMax(false)
                setImgMax(null)
              }}
              className="div-max-img"
              src={imgMax}
              alt="img"
            />
          </div>,
          document.body,
        )}
    </>
  )
}
