export function AllProyects({ proyectos }) {
  return (
    <>
      {proyectos.map((proyect) => {
        return (
          <li key={proyect.name}>
            <h2>{proyect.name}</h2>
            <a href={proyect.url} target="_blank">
              <img src={proyect.img} alt="imagen" />
            </a>
            <p>{proyect.desc}</p>
          </li>
        )
      })}
    </>
  )
}
