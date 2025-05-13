import { Link } from "react-router-dom";
import styles from "./ProductDetail.module.css"

export default function ProductDetail({ showCart, cartItemsList, setCartItemsList }) {
  return (
    <div className={styles.productDetail}>
      <img src="" alt="" />
      <div className={styles.productInfo}>
        <h2 className="product-name"></h2>
        <p className="description"></p>
        <p className="price"></p>
        <p className="category"></p>
        <p className="brand"></p>
        <button>Agregar al carrito</button>
        <Link to="/">Volver al Inicio</Link>
      </div>

      {/* Carrito, solo se muestra si showCart es true */}
      {showCart && <Cart items={cartItemsList} setItems={setCartItemsList} />}
    </div>
  );
}