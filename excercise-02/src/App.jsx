import "./App.css"

function App() {
  return (
    <>
      <h1>¡Hola, mundo!</h1>
      <button className="greeting-button" onClick={Greet}>Saludar 👋</button>
    </>
  )
}

function Greet() {
  alert("¡Hola, mundo! 🌎")
}

export default App