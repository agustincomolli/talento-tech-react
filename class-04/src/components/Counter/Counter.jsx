import React, { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0)
    const [paragraphColor, setParagraphColor] = useState("black")

    function handleClick() {
        setCounter(counter + 1);
    }

    function handleParagraphClick() {
        const newColor = paragraphColor === "black" ? "red" : "black"
        setParagraphColor(newColor)
    }

    return (
        <div className="counter">
            <h3>Contador</h3>
            <p
                style={{ color: paragraphColor, cursor: "pointer" }}
                onClick={handleParagraphClick}
                title="Hazme clic"
            >
                El valor del contador es {counter}
            </p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
}

export default Counter;