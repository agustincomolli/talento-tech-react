import styles from "./Cart.module.css"
import CartItem from "./CartItem";

export default function Cart({ items, setItems }) {
    // Calcular el subtotal.
    function getSubtotal() {
        let subtotal = 0;
        items.forEach(item => {
            subtotal += item.price * item.quantity
        });
        return subtotal.toFixed(2)
    };

    // Eliminar un producto del carrito.
    function removeItem(id) {
        setItems(items.filter(item => item.id !== id))
    };

    // Actualizar la cantidad del producto.
    function updateQuantity(id, newQuantity) {
        if (newQuantity < 1) return;
        setItems(
            items.map(
                item => item.id === id ? { ...item, quantity: newQuantity } : item
            ));
    };

    return (
        <div className={styles.cartDropdown}>
            <h3>Tu Carrito</h3>
            {
                items.length == 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <ul className={styles.cartItems}>
                        {items.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeItem={removeItem}
                            />
                        ))}
                    </ul>
                )
            }
            <div className={styles.cartSummary}>
                <p>Subtotal: $ {getSubtotal}</p>
                <button className={`btn btn-primary ${styles.cartSummaryButton}`}>Ver Carrito</button>
                <button className={`btn btn-success ${styles.cartSummaryButton}`}>Finalizar Compra</button>
            </div>
        </div>
    );
}