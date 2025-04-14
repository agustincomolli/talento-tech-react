import './App.css'
import Products from './components/Products'

function App() {
  const products = ["Manzanas", "Peras", "Bananas", "Uvas"]

  return (
    <>
      <h1>Ejercicio 03</h1>
      <Products productsList={products}></Products>
    </>
  )
}

export default App
