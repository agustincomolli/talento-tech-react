import styles from "./Cart.module.css"

export default function CartItem({ item, updateQuantity, removeItem }) {
    return (
        <>
            <li className={styles.cartItem}>
                <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <p>$ {item.price}</p>
                </div>
                <div className={styles.itemControls}>
                    <button onClick={updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className={styles.removeBtn} onclick={removeItem(item.id)}>×</button>
                </div>
            </li>
        </>
    );
}