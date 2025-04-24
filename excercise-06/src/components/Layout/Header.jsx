import styles from "./Header.module.css"
import logo from "../../assets/react.svg"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><img className={styles.logoImage} src={logo} alt="Logo" /> Mi Tienda Online</div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Buscar productos..." />
                <button className="btn btn-primary">Buscar</button>
            </div>
            <div className={styles.cart}>Carrito (0)</div>
        </header>
    );
}