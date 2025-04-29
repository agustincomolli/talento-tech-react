import { useState } from 'react'
import './App.css'
import DialogBox from "./components/DialogBox/DialogBox"

function MyGreetings(props) {
  return(
    <h1>¡Hola, {props.name}!</h1>
  )
}

function App() {
  const [showDialog, setShowDialog] = useState(false)

  function handleClick() {
    setShowDialog(true)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <MyGreetings name="Agustín"/>
        <p>Bienvenido a tu primera aplicación React.</p>
        <a className='App-link' href="https://react.dev" target='_blank' rel="noopener noreferrer">
        Aprende React
        </a>
      </header>
      <button onClick={handleClick}>Abrir cuadro de diálogo</button>
      {showDialog && (
        <DialogBox
          title="Título de la ventana"
          text="Este es el mensaje del cuadro de diálogo."
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  )
}

export default App
