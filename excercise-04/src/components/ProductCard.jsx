import "./ProductCard.css"
import StyleButton from "./StyleButton"

function ProductCard({ className, title, icon, description, buttonText }) {
    // styles contiene el estilo predeterminado + la clase opcional.
    const styles = `product-card ${className || ''}`
    return (
        <div className={styles}>
            <header className="product-card__header">
                <h2 className="product-card__title">{title}</h2>
            </header>
            <main className="product-card__desciption">
                <div className="product-card__icon">
                    {icon}
                </div>
                <p className="product-card__text">{description}</p>
            </main>
            <footer className="product-card__footer">
                <StyleButton className="product-card__buy-button" styleButtonColor="green">{buttonText}</StyleButton>
                <StyleButton className="product-card__buy-button" styleButtonColor="red">Cancelar</StyleButton>
            </footer>
        </div>
    )
}

export default ProductCard