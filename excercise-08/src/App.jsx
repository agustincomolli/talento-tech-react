import { useState } from "react"
import Layout from "./components/Layout/Layout"
import Main from "./components/Layout/Main";
import Home from "./pages/Home";
import { useEffect } from "react";
import styles from "./App.module.css"

/**
 * Componente principal de la aplicación de tienda online.
 * Maneja el estado global del carrito y la visibilidad del mismo.
 */
function App() {
  // Estado para mostrar u ocultar el carrito de compras.
  // useState retorna un array con el valor actual y una función para actualizarlo.
  const [showCart, setShowCart] = useState(false);

  // Estado que contiene la lista de productos agregados al carrito.
  // Cada elemento es un objeto con id, image, name, price y quantity.
  const [cartItemsList, setCartItemsList] = useState([])

  // Estado para almacenar los productos traídos de la API
  const [products, setProducts] = useState([])
  // Estado para indicar si se están cargando los productos
  const [loading, setLoading] = useState(false)
  // Estado para guardar un posible error al cargar los productos
  const [error, setError] = useState(null)

  /**
   * useEffect se utiliza para realizar efectos secundarios en componentes funcionales.
   * En este caso, se usa para obtener los productos desde una API al montar el componente.
   * El array vacío [] como segundo argumento indica que este efecto solo se ejecuta una vez,
   * cuando el componente se monta.
   */
  useEffect(() => {
    /**
     * Función asíncrona para obtener los productos desde la API.
     * Maneja el estado de carga y posibles errores.
     */
    const fetchProducts = async () => {
      try {
        setLoading(true) // Indica que la carga ha comenzado
        const response = await fetch("https://6810b69527f2fdac24127f97.mockapi.io/api/products");

        if (!response.ok) {
          // Si la respuesta no es exitosa, lanza un error
          throw new Error("Error al cargar los productos.");
        }

        const data = await response.json();

        // Simula una demora de 2 segundos antes de mostrar los productos
        setTimeout(() => {
          setProducts(data); // Guarda los productos en el estado
          setError(null);    // Limpia cualquier error anterior          
          setLoading(false); // Indica que la carga ha finalizado
        }, 4000);
      } catch (error) {
        setError(error.message); // Guarda el mensaje de error
        setProducts([]);         // Limpia los productos si hay error
        setLoading(false); // Indica que la carga ha finalizado
      } finally {
        // No uso finally porque quiero simular que la carga de datos tarda
      }
    };

    fetchProducts();
    // El array vacío [] significa que este efecto solo se ejecuta al montar el componente
  }, [])

  /**
   * Alterna la visibilidad del carrito de compras.
   * Cambia el valor de showCart entre true y false.
   */
  function toggleCart() {
    setShowCart(!showCart);
  };

  /**
   * Agrega un producto al carrito.
   * Si el producto ya existe, incrementa su cantidad.
   * Si no existe, lo agrega con cantidad 1.
   * @param {Object} product - Producto a agregar al carrito.
   */
  function addToCart(product) {
    const existingItem = cartItemsList.find(item => item.id === product.id)

    if (existingItem) {
      // Si el producto ya está en el carrito, aumenta la cantidad.
      setCartItemsList(
        cartItemsList.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      // Si no está, lo agrega con cantidad 1.
      setCartItemsList([...cartItemsList, { ...product, quantity: 1 }])
    }
  };

  /**
   * Calcula la cantidad total de productos en el carrito.
   * @returns {number} Suma de las cantidades de todos los productos.
   */
  function getTotalItemCount() {
    let totalQuantity = 0;

    cartItemsList.forEach(item => {
      totalQuantity += item.quantity
    });
    return totalQuantity
  }

  // Renderiza la estructura principal de la app.
  // Pasa funciones y estados como props a los componentes hijos.
  return (
    <>
      {/* Layout recibe funciones y datos como props */}
      <Layout toggleCart={toggleCart} cartItemCount={getTotalItemCount()}>
        {/* Spinner y mensaje de carga centrados */}
        {loading && (
          <Main>
            <div className={styles.spinnerContainer}>
              <div className={styles.spinner}></div>
              <h2 className={styles.loadingText}>Cargando productos</h2>
            </div>
          </Main>
        )}

        {/* Mensaje de error si ocurre un problema al cargar */}
        {error && (
          <Main>
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>Error: {error}</p>
          </div>
          </Main>
        )}

        {/* Renderiza Home solo si no está cargando ni hay error */}
        {!loading && !error &&
          <Home
            products={products}
            addToCart={addToCart}
            showCart={showCart}
            cartItemsList={cartItemsList}
            setCartItemsList={setCartItemsList}
          />
        }
      </Layout>
    </>
  )
}

export default App
