import styles from "./Contact.module.css"

export default function Contact({ showCart, cartItemsList, setCartItemsList }) {
  return (
    <div className="pageContent">
      <h2>Contáctanos</h2>
      <p>
        Si tienes alguna pregunta, comentario o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        Completa el siguiente formulario y te responderemos lo antes posible.
      </p>

      <form className={styles.contactForm}>
        <label htmlFor="user-name">Nombre:</label>
        <input type="text" id="user-name" name="user-name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="8" required></textarea>

        <button className="btn btn-primary" type="submit">Enviar Mensaje</button>
      </form>
      {/* Carrito, solo se muestra si showCart es true */}
      {showCart && <Cart items={cartItemsList} setItems={setCartItemsList} />}
    </div>
  );
}