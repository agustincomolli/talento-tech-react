import styles from "./Login.module.css";

export default function Login() {

  return (
    <div className={styles.loginContent}>
      <h2>Iniciar sesión</h2>
      <form action="" className={styles.loginForm}>
        <input type="text" placeholder="Usuario" name="user" />
        <input type="password" name="password" id="password" placeholder="Contraseña" />
        <button className="btn btn-primary" type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}