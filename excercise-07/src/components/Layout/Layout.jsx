import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

/**
 * Componente de layout general de la aplicación.
 * Incluye header, navegación, contenido principal y footer.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Contenido principal a renderizar.
 * @param {Function} props.toggleCart - Función para mostrar/ocultar el carrito.
 * @param {number} props.cartItemCount - Cantidad total de productos en el carrito.
 */
export default function Layout({ children, toggleCart, cartItemCount }) {
    return (
        <>
            {/* Header recibe funciones y datos como props */}
            <Header toggleCart={toggleCart} cartItemCount={cartItemCount} />
            <Nav />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}