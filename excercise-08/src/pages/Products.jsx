import ProductList from "../components/Products/ProductList"

export default function Products({ products, addToCart }) {
  return (
    <>
      {/* Lista de productos, recibe la función para agregar al carrito */}
      <ProductList products={products} addToCart={addToCart} />
    </>
  )
}