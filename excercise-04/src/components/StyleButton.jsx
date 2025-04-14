import "./StyleButton.css"

function StyleButton({ styleButtonColor, className, children }) {
    // styles contiene la clase predeterminada button + la clase pasada por prop
    // styleButtonColor + la clase optional className.
    const styles = `button ${styleButtonColor} ${className || ''}`;

    return (
        // El children es lo que va entre las etiquetas de apertura y cierre.
        <button className={styles}>{children}</button>
    )
}

export default StyleButton