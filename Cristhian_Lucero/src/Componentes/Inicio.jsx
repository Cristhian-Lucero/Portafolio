export function Inicio ( {nam, title, recidencia, children, link, git, img} ){
    const click = (url) => {
        window.open(url,"_blank", "noopener,noreferrer")
    }
    const click2 = () => {
        window.open(`${import.meta.env.BASE_URL}Cristhian_Lucero_CV.pdf`,"_blank", "noopener,noreferrer")
    }
    return(
        <article className="cl-inicio">
            <div className="cl-inicio-info">
                <div className="cl-inicio-title">
                    <div className="cl-inicio-title1">
                        {nam} 
                    </div>
                    <div className="cl-inicio-title2">
                        {title}
                        <div className="cl-inicio-title3">
                            🌐 {recidencia}
                        </div>
                    </div>
                </div>
                <div className="cl-inicio-description">
                    {children}
                </div>
                <div className="cl-inicio-botones">
                    <button className="cl-inicio-btn" onClick={() => click(git)}><img className="cl-inicio-botones-img" src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"></img> GitHub</button>
                    <button className="cl-inicio-btn" onClick={() => click(link)}><img className="cl-inicio-botones-img" src="https://cdn-icons-png.flaticon.com/128/4401/4401412.png"></img>Linkedin</button>
                    <button className="cl-inicio-btn" onClick={() => click2()}><img className="cl-inicio-botones-img" src="https://cdn-icons-png.flaticon.com/128/4401/4401412.png"></img>CV</button>
                </div>
            </div>
            <div className="cl-inicio-img">
                <img className="cl-inicio-img1" src={img} alt="img"/>
            </div>
        </article>
    )
}