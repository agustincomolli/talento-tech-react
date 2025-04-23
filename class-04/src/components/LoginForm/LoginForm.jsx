import styles from "./LoginForm.module.css"
import { useState } from "react";

export default function LoginForm() {
    const [name, setName] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        alert(`${name || "Usuario anónimo"} ha iniciado sesión.`)
        setName("")
    }

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <form className={styles.loginForm} action="" onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Iniciar Sesión</h3>
            <input
                className={styles.input}
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Usuario"
            />
            <input
                className={styles.input}
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
            />
            <button className={styles.buttonSubmit} type="submit">Iniciar sesión</button>
        </form>
    );
}