import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [products, setProducts] = useState([])
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://68100b0627f2fdac241017b4.mockapi.io/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data)
        setloading(false)
      } catch (e) {
        setError(e)
        setloading(false)
      }
    };
    fetchProducts();
  }, []); // El array de dependencias vacío asegura que el efecto se ejecute solo una vez al montar el componente 

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error al cargar los productos: {error.message}</p>;
  }

  return (
    <>
      <h1>API de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
