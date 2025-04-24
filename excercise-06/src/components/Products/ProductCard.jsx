import styles from "./ProductCard.module.css"

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
            <button className={`btn btn-success`}>Agregar al Carrito</button>
        </div>
    );
}