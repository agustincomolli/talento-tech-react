import ProductList from "../components/Products/ProductList"
import Cart from "../components/Cart/Cart"

export default function Products({ products, addToCart, showCart, cartItemsList, setCartItemsList }) {
  return (
    <>
      {/* Lista de productos, recibe la función para agregar al carrito */}
      <ProductList products={products} addToCart={addToCart} />
      {/* Carrito, solo se muestra si showCart es true */}
      {showCart && <Cart items={cartItemsList} setItems={setCartItemsList} />}
    </>
  )
}