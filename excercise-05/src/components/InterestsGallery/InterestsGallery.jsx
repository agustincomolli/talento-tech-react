import styles from "./InterestsGallery.module.css"

export default function InterestsGallery({ className, interests }) {
    const classes = [styles.gallery, className].filter(Boolean).join(" ");

    return (
        <div className={classes}>
            {interests.map(interest => (
                <button className={styles.button} key={interest} onClick={() => handleClick(interest)}>{interest}</button>
            ))}
        </div>
    );
}

function handleClick(interest) {
    console.log(`Haz hecho click en ${interest}`)
};