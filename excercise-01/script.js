const greetingButton = document.querySelector(".greeting-button");

document.addEventListener("DOMContentLoaded", () => {
    greetingButton.addEventListener("click", Greet);
});

function Greet() {
    alert("¡Hola, mundo!")
}