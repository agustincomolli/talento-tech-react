import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchTopProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=3&skip=3&sortBy=rating&order=desc");
        const data = await response.json();
        setTopProducts(data.products);
        setError(null);
      } catch(err) {
        setError("Error al cargar productos destacados");
        setTopProducts([])
      } finally {
        setLoading(false);
      }
    };
    fetchTopProducts();
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <h2>Bienvenido a Mi Tienda Online</h2>
        <p>
          Encuentra los mejores productos con las mejores ofertas. ¡Explora nuestro catálogo y descubre todo lo que
          tenemos para ti!
        </p>
        <Link to="/products" className="btn btn-primary">Vea Nuestros Productos</Link>
      </div>
      <div className={styles.featuredCategories}>
        <div className={styles.categoryCard}>
          <img src="https://picsum.photos/100?category=tech" alt="Tecnología" />
          <h3>Tecnología</h3>
        </div>
        <div className={styles.categoryCard}>
          <img src="https://picsum.photos/100?category=fashion" alt="Moda" />
          <h3>Moda</h3>
        </div>
        <div className={styles.categoryCard}>
          <img src="https://picsum.photos/100?category=home" alt="Hogar" />
          <h3>Hogar</h3>
        </div>
        <div className={styles.categoryCard}>
          <img src="https://picsum.photos/100?category=sports" alt="Deportes" />
          <h3>Comestibles</h3>
        </div>
      </div>
    </>
  )
}