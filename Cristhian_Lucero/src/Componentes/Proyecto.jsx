export function Proyecto( {name, img, repo, description} ) {
    const Click = () => {
        if (!repo) return;  
        window.open(repo, '_blank');
    }
    return (
        <section className="cl-proyecto">
            <img className="cl-proyecto-img" src={img} alt="img" onClick={Click}/>
            <article className="cl-proyecto-article">
                <header className="cl-proyecto-titulo">{name}</header>
                <div className="cl-proyecto-description">{description}</div>
            </article>
        </section>
    )
}