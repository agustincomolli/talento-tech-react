import "./TeamCard.css"

function TeamCard({ className, name, role, photo }) {
    const style = `card ${className || ''}`
    return (
        <div className={style}>
            <aside className="card__profile-photo">
                <img className="card__photo" src={photo} alt={`Foto de ${name}`} />
            </aside>
            <section className="card__profile">
                <h2 className="card__name">{name}</h2>
                <p className="card__role">{role}</p>
            </section>
        </div>
    );
}

export default TeamCard;