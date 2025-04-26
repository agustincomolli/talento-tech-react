import styles from "./Cart.module.css"

/**
 * Componente que representa un producto dentro del carrito.
 * Permite modificar la cantidad o eliminar el producto.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.item - Producto del carrito.
 * @param {Function} props.updateQuantity - Función para cambiar la cantidad.
 * @param {Function} props.removeItem - Función para eliminar el producto.
 */
export default function CartItem({ item, updateQuantity, removeItem }) {
    return (
        <div className={styles.itemInfo}>
            {/* Nombre del producto */}
            <h4>{item.name}</h4>
            {/* Precio unitario */}
            <p>$ {item.price}</p>
            {/* Controles para modificar cantidad y eliminar */}
            <div className={styles.itemControls}>
                {/* Botón para disminuir cantidad */}
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                {/* Botón para aumentar cantidad */}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                {/* Botón para eliminar producto */}
                <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>×</button>
            </div>
        </div>
    );
}