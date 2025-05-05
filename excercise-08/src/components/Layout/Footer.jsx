import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

/**
 * Componente de pie de página.
 * Muestra información de contacto, enlaces útiles y derechos de autor.
 */
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
                    <li><Link to="/terms">Términos y Condiciones</Link></li>
                    <li><Link to="/policies">Política de Privacidad</Link></li>
                    <li><Link to="faq">Preguntas Frecuentes</Link></li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; 2025 Mi Tienda Online, por Agustín Comolli. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}