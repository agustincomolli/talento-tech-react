import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
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
            <div className={styles.copyright}>
                <p>&copy; 2025 Mi Tienda Online, por Agustín Comolli. Todos los derechos reservados.</p>
                <div className={styles.socialNetworks}>
                    <a href="https://www.facebook.com" target="_blank" title="Facebook">{<BsFacebook/>}</a>
                    <a href="https://www.twitter.com" target="_blank" title="Twitter">{< BsTwitter/>}</a>
                    <a href="https://www.linkedin.com" target="_blank" title="Linkedin">{<BsLinkedin/>}</a>
                    <a href="https://www.youtube.com" target="_blank" title="outube">{<BsYoutube/>}</a>
                </div>
            </div>
        </footer>
    );
}