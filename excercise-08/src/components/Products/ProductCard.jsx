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
    function handleClick() {
        addToCart(product)
    };

    return (
        <div className={styles.productCard}>
            {/* Imagen del producto */}
            <img src={product.images[0]} alt={product.title} />
            {/* Nombre del producto */}
            <h3>{product.title}</h3>
            {/* Precio del producto */}
            <p>$ {product.price}</p>
            {/* Botón para agregar al carrito */}
            <button className={`btn btn-success`} onClick={handleClick}>Agregar al Carrito</button>
        </div>
    );
}