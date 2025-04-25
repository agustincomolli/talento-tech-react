import styles from "./Header.module.css"
import logo from "../../assets/react.svg"
import cartImage from "../../assets/cart.svg"

export default function Header({ toggleCart, cartItemCount }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><img className={styles.logoImage} src={logo} alt="Logo" /> Mi Tienda Online</div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Buscar productos..." />
                <button className="btn btn-primary">Buscar</button>
            </div>
            <div className={styles.cart} onClick={toggleCart} title="Carrito de compras">
                <img className={styles.cartImage} src={cartImage} alt="Carrito" />
                <span className={styles.cartItemCount}>{cartItemCount}</span>
            </div>
        </header>
    );
}