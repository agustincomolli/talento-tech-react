import { useState } from "react"
import Cart from "./components/Cart/Cart"
import ProductList from "./components/Products/ProductList"
import Layout from "./components/Layout/Layout"

function App() {
  // Este estado controla si se muestra el carrito de compras.
  const [showCart, setShowCart] = useState(false);
  // Estado para controlar el carrito de compras.
  const [cartItemsList, setCartItemsList] = useState([])

  // Datos de ejemplo.
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

  function toggleCart() {
    setShowCart(!showCart);
  };

  function addToCart(product) {
    const existingItem = cartItemsList.find(item => item.id === product.id)

    if (existingItem) {
      setCartItemsList(
        cartItemsList.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItemsList([...cartItemsList, { ...product, quantity: 1 }])
    }

  };

  function getTotalItemCount() {
    let totalQuantity = 0;

    cartItemsList.forEach(item => {
      totalQuantity += item.quantity
    });
    return totalQuantity
  }

  return (
    <>
      <Layout toggleCart={toggleCart} cartItemCount={getTotalItemCount()}>
        <ProductList products={products} addToCart={addToCart} />
        {showCart && <Cart items={cartItemsList} setItems={setCartItemsList} />}
      </Layout>
    </>
  )
}

export default App
