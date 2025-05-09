import Swal from 'sweetalert2';
import styles from "./Contact.module.css"

export default function Contact({ showCart, cartItemsList, setCartItemsList }) {
  function handleSubmit(event) {
    event.preventDefault()
    const message = "<p>Su mensaje ha sido enviado correctamente.</p>"
      + "<p>Nos comunicaremos con usted a la brevedad.</p>"
   
    Swal.fire({
      title: "Información de contacto",
      html: message,
      icon: "success",
      confirmButtonText: "Continuar",
      footer:"<p>Muchas gracias</p>"
    })
  };

  return (
    <div className="pageContent">
      <h2>Contáctanos</h2>
      <p>
        Si tienes alguna pregunta, comentario o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        Completa el siguiente formulario y te responderemos lo antes posible.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="user-name">Nombre:</label>
        <input type="text" id="user-name" name="user-name" required placeholder="Nombre y Apellido" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="alguien@dominio.com" />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="8" required placeholder="Escribe tu mensaje aquí"></textarea>

        <button className="btn btn-primary" type="submit">Enviar Mensaje</button>
      </form>
      {/* Carrito, solo se muestra si showCart es true */}
      {showCart && <Cart items={cartItemsList} setItems={setCartItemsList} />}
    </div>
  );
}