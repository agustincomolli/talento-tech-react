import styles from "./ProductCard.module.css"

/**
 * Componente que representa un solo producto.
 * Muestra la información del producto y un botón para agregarlo al carrito.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.product - Objeto con los datos del producto.
 * @param {Function} props.addToCart - Función para agregar el producto al carrito.
 */
export default function ProductCard({ product, addToCart }) {
    return (
        <div className={styles.productCard}>
            {/* Imagen del producto */}
            <img src={product.image} alt={product.name} />
            {/* Nombre del producto */}
            <h3>{product.name}</h3>
            {/* Precio del producto */}
            <p>$ {product.price}</p>
            {/* Botón para agregar al carrito */}
            <button className={`btn btn-success`} onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
    );
}