export function AllProyects({ proyectos, onMouseDown, onMouseUp }) {
  return (
    <>
      {proyectos.map((proyect) => {
        return (
          <li key={proyect.name}>
            <h2>{proyect.name}</h2>
            <img
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
    </>
  )
}
