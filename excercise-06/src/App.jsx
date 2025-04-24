import Header from "./components/Layout/Header"
import Nav from "./components/Layout/Nav"
import Main from "./components/Layout/Main"
import ProductCard from "./components/Products/ProductCard"
import ProductList from "./components/Products/ProductList"
import Footer from "./components/Layout/Footer"

function App() {
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
  ]

  return (
    <>
      <Header/>
      <Nav/>
      <Main products={products}/>
      <Footer/>
    </>
  )
}

export default App
