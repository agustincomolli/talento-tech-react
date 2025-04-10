import { useState } from "react"

function TwitterFollowCard({ formatUserName, userName = "unknown", children }) {
    // La prop children es el valor que está entre las etiquetas de mi componente.
    // La prop formatUserName es la función que se pasa.
    // La prop userName tiene un valor por defecto.

    const [isFollowing, setIsFollowing] = useState(false)


    const buttonText = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing ? 
        "follow-card__button follow-card__button--following" : 
        "follow-card__button"

    // Invierte el valor de isFollowing.
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='follow-card'>
            <header className='follow-card__header'>
                <img
                    className='follow-card__avatar'
                    src={`https://unavatar.io/${userName}/`}
                    alt="Agustín Comolli" />
                <div className="follow-card__user">
                    <strong className='follow-card__name'>{children}</strong>
                    <span className='follow-card__username'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{buttonText}</button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard