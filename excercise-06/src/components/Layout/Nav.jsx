import styles from "./Nav.module.css"

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navMenu}>
                <li><a className={styles.navMenuLink} href="#">Categoría 1</a></li>
                <li><a className={styles.navMenuLink} href="#">Categoría 2</a></li>
                <li><a className={styles.navMenuLink} href="#">Categoría 3</a></li>
                <li><a className={styles.navMenuLink} href="#">...</a></li>
            </ul>
        </nav>
    );
}