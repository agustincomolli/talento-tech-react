import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css"

export default function ProductList({ products, addToCart }) {
    return (
        <section>
            <h2 className={styles.title}>Productos Disponibles</h2>
            <div className={styles.productsGrid}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </section>
    );
}