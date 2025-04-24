import ProductList from "../Products/ProductList"
import styles from "./Main.module.css"

export default function Main({ products }) {
    return (
        <main className={styles.main}>
            <div>
                <h2 className={styles.title}>Productos Disponibles</h2>
                <ProductList products={products} />
            </div>
        </main>
    );
}