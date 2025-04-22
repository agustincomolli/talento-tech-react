import styles from "./ProjectCard.module.css"

export default function ProjectCard({ className, title, description, buttonText }) {
    const classes = [styles.projectCard, className].filter(Boolean).join(" ");

    return (
        <div className={classes}>
            <header className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
            </header>
            <main className={styles.main}>
                <p className={styles.description}>{description}</p>
            </main>
            <footer className={styles.footer}>
                <button className={styles.btn} onClick={() => handleClick(title)}>{buttonText}</button>
            </footer>
        </div>
    );
}

function handleClick(projectName) {
    alert(`Explorando: ${projectName}`)
}