export function IconsLinks({ toMe }) {
  return (
    <>
      {toMe.redes.map(({ name, img, link }) => {
        return (
          <a key={name} href={link} target="_blank">
            <img className="links" src={img} alt="" />
          </a>
        )
      })}
    </>
  )
}
