import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="contact-info">
                <h4>Contacto</h4>
                <p>Email: info@mitienda.com</p>
                <p>Teléfono: +123 456 789</p>
            </div>
            <div className="useful-links">
                <h4>Enlaces Útiles</h4>
                <ul>
                    <li><a href="#">Términos y Condiciones</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; 2025 Mi Tienda Online, por Agustín Comolli. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}