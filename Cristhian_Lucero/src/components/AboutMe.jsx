import './AboutMe.css'
import { IconsLinks } from './IconsLinks'

export function AboutMe({ fotoPerfil, toMe }) {
  return (
    <section className="section" id="aboutMe">
      <div className="section-div">
        <div id="section-div-info1" className="section-div-info">
          <div className="section-div-info-title">
            <h1>{toMe.name}</h1>
            <h3>{toMe.cargo}</h3>
          </div>
          <p>{toMe.info}</p>
          <div className="section-div-links">
            <IconsLinks toMe={toMe} />
          </div>
        </div>
      </div>
      <div id="imagen" className="section-div">
        <img className="section-div-img" src={fotoPerfil} alt="imagen" />
      </div>

      <div id="section-extra" className="section-div">
        <div className="section-div-extra">
          <span className="extra-label">{toMe.extraInfo}</span>

          <div className="quick-info">
            <div>
              <strong>+4</strong>
              <span>Años aprendiendo</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Tecnologías</span>
            </div>
          </div>

          <div className="extra-tags">
            <IconsLinks toMe={toMe} />
          </div>
        </div>
      </div>
    </section>
  )
}
