import { useState } from "react"
import Cart from "./components/Cart/Cart"
import ProductList from "./components/Products/ProductList"
import Layout from "./components/Layout/Layout"

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

  // Lista de productos disponibles en la tienda (datos de ejemplo).
  const products = [
    { id: 1, image: "https://picsum.photos//150", name: "Producto 1", price: 1590 },
    { id: 2, image: "https://picsum.photos//150", name: "Producto 2", price: 2580 },
    { id: 3, image: "https://picsum.photos//150", name: "Producto 3", price: 3570 },
    { id: 4, image: "https://picsum.photos//150", name: "Producto 4", price: 4560 },
    { id: 5, image: "https://picsum.photos//150", name: "Producto 5", price: 5550 },
    { id: 6, image: "https://picsum.photos//150", name: "Producto 6", price: 6540 },
    { id: 7, image: "https://picsum.photos//150", name: "Producto 7", price: 7530 },
    { id: 8, image: "https://picsum.photos//150", name: "Producto 8", price: 8520 },
    { id: 9, image: "https://picsum.photos//150", name: "Producto 9", price: 9510 },
  ];

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
        {/* Lista de productos, recibe la función para agregar al carrito */}
        <ProductList products={products} addToCart={addToCart} />
        {/* Carrito, solo se muestra si showCart es true */}
        {showCart && <Cart items={cartItemsList} setItems={setCartItemsList} />}
      </Layout>
    </>
  )
}

export default App
