import './App.css'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <>
      <h1>Ejercicio 04</h1>
      <ProductCard
        className="margin-bottom-card"
        title="Manzanas"
        icon="🍎"
        description="Manzanas rojas de Calingasta. Si te las comés... te la comés bien."
        buttonText="Comprar"
        />
      <ProductCard
        className="margin-bottom-card"
        title="Peras"
        icon="🍐"
        description="The golden apple. Las manzanas de oro."
        buttonText="Comprar"
        />
      <ProductCard
        className="margin-bottom-card"
        title="Bananas"
        icon="🍌"
        description="De Formosa. Más ricas que las del Ecuador."
        buttonText="Comprar"
      />
    </>
  )
}

export default App
