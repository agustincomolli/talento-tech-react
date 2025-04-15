import styles from "./TeamCard.module.css"

function TeamCard({ className, name, role, photo }) {
    const classes = [styles.card, className].filter(Boolean).join(' ');
    return (
        <div className={classes}>
            <aside className={styles.photowrap}>
                <img className={styles.photo} src={photo} alt={`Foto de ${name}`} />
            </aside>
            <section className={styles.profile}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.role}>{role}</p>
            </section>
        </div>
    );
}

export default TeamCard;