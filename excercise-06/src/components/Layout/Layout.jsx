import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

export default function Layout({ children, toggleCart, cartItemCount }) {
    return (
        <>
            <Header toggleCart={toggleCart} cartItemCount={cartItemCount} />
            <Nav />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}