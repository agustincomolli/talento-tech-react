import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div className="pageContent">
      <h2>Contáctanos</h2>
      <p>
        Si tienes alguna pregunta, comentario o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        Completa el siguiente formulario y te responderemos lo antes posible.
      </p>

      <form className={styles.contactForm}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
}