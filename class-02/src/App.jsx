import reactLogo from './assets/react.svg'
import './App.css'
import UserList from "./components/user-list"
import GreetButton from './components/button-greet'

function App() {
  return (
    <>
      <div class="app">
        <h1>¡Hola mundo! 💪</h1>
        <h2>¡Fucking yeah!</h2>
        <p>Programando por Agustín con </p>
        <p><img src={reactLogo} className="logo react spin" alt="React logo" /></p>
        <div>
          <h3>Usuarios registrados:</h3>
          <UserList></UserList>
        </div>

        <p>
          <GreetButton text={"Saludar"} bgcolor="lightgreen" onClick={Greetings}></GreetButton>        </p>
      </div>
    </>
  )
}

function Greetings() {
  alert("¡Hola mundo! Soy Agustín");
}

export default App