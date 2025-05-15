import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllProducts } from "./api/products";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Terms from "./pages/Terms";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Main from "./components/Layout/Main";

/**
 * Componente principal de la aplicación de tienda online.
 * Maneja el estado global del carrito y la visibilidad del mismo.
 * 
 * Configura las rutas principales de la aplicación usando React Router:
 * - "/"         : Página principal con productos y carrito.
 * - "/faq"      : Página de preguntas frecuentes.
 * - "/terms"    : Página de términos y condiciones.
 * - "/policies" : Página de políticas de privacidad.
 * 
 * Cada ruta puede recibir props si necesita mostrar el carrito o manipular el estado global.
 * Se utiliza lógica condicional en la ruta "/" para mostrar un spinner, un mensaje de error o el contenido principal según el estado de la app.
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
    const getProducts = async () => {
      try {
        setLoading(true) // Indica que la carga ha comenzado

        const data = await fetchAllProducts();

        // Simula una demora de 4 segundos antes de mostrar los productos
        setTimeout(() => {
          setProducts(data.products); // Guarda los productos en el estado
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

    getProducts();
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

  /**
   * Renderiza el componente apropiado basado en los estados de carga, error y productos.
   *
   * @param {Object} params - Los parámetros para la función.
   * @param {boolean} params.loading - Indica si los datos se están cargando actualmente.
   * @param {string|null} params.error - El mensaje de error, si ocurrió alguno durante la carga.
   * @param {Array} params.products - La lista de productos a mostrar.
   * @param {Function} params.addToCart - Función para manejar la adición de un producto al carrito.
   * @param {boolean} params.showCart - Indica si el carrito debe mostrarse.
   * @param {Array} params.cartItemsList - La lista de elementos actualmente en el carrito.
   * @param {Function} params.setCartItemsList - Función para actualizar la lista de elementos del carrito.
   * @param {Object} params.styles - El objeto de estilos que contiene los nombres de las clases CSS.
   * @returns {JSX.Element} El componente renderizado basado en el estado actual.
   */
  function getProductsComponent({ loading, error, products, addToCart, showCart, cartItemsList, setCartItemsList }) {
    if (loading) {
      /* Spinner y mensaje de carga centrados */
      return (
        <LoadingSpinner message="Cargando productos.." />
      );
    }

    if (error) {
      /* Mensaje de error si ocurre un problema al cargar */
      return (
        <ErrorMessage message={error} />
      );
    }

    /* Renderiza Products solo si no está cargando ni hay error */
    return (
      <Products
        products={products}
        addToCart={addToCart}
        showCart={showCart}
        cartItemsList={cartItemsList}
        setCartItemsList={setCartItemsList}
      />
    );
  }

  // Renderiza la estructura principal de la app.
  // Pasa funciones y estados como props a los componentes hijos.
  // 
  // <Routes> define las rutas de la aplicación:
  // - La ruta "/" usa lógica condicional para mostrar un spinner, un error o el componente Home.
  // - Las rutas "/faq", "/terms" y "/policies" muestran sus páginas correspondientes y reciben props si necesitan mostrar el carrito.
  return (
    <>
      {/* Layout recibe funciones y datos como props */}
      <Layout
        toggleCart={toggleCart}
        cartItemCount={getTotalItemCount()}
        showCart={showCart}
        setShowCart={setShowCart}
        cartItemsList={cartItemsList}
        setCartItemsList={setCartItemsList}
      >
        <Routes>
          <Route path="/" element={<Main><Home addToCart={addToCart} /></Main>} />
          {/* Muestra spinner, error o Products según el estado */}
          <Route path="/products"
            element={
              <Main>
                {getProductsComponent({
                  loading, error, products, addToCart, showCart,
                  cartItemsList, setCartItemsList
                })}
              </Main>
            }
          />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          {/* Rutas estáticas para páginas informativas */}
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
