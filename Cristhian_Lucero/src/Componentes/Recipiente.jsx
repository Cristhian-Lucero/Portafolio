export function Recipiente( {children, img} ) {
    return (
        <article className="cl-recipiente">
            <header className="cl-recipiente-header">
                <img className="cl-recipiente-img" src= {img} alt="img" />
            </header>
            <strong className="cl-recipiente-strong">{children}</strong>
        </article>
    )
}