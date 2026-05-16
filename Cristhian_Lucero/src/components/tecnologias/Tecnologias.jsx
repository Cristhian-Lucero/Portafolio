import './Tecnologias.css'
export function Tecnologias({ tecnologias }) {
  const handleClick = (e) => {
    const img = e.currentTarget
    img.classList.add('girando')
  }
  const handleAnimationEnd = (e) => {
    const img = e.currentTarget
    img.classList.remove('girando')
  }
  return (
    <>
      <div id="tecnologies">
        <h1>{tecnologias.title}</h1>
        <div className="tec-div">
          {tecnologias.elements.map((e) => (
            <div key={e.name}>
              <img
                onClick={handleClick}
                onAnimationEnd={handleAnimationEnd}
                className={`tec-div-img`}
                src={e.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
