import React, { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0)

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <div className="counter">
            <h3>Contador</h3>
            <p>El valor del contador es {counter}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
}

export default Counter;