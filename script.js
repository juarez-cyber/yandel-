    // Declaramos las variables
let tesoro = Math.floor(Math.random() * 9);
let intentos = 3;

// Se crea la función para identificar una celda
function verificar(posicion) {
    let celdas = document.getElementsByClassName("cell");

    // Evita seguir jugando si ya terminó
    if (intentos === 0) return;

    // Evita repetir clic en misma celda
    if (celdas[posicion].style.pointerEvents == "none") return;

    // Se descuenta intento de 1 en 1
    intentos--;

    // Compara la posición del clic contra la del tesoro
    if (posicion === tesoro) {
        celdas[posicion].style.backgroundColor = "gold";
        celdas[posicion].textContent = "💰"; // Icono representativo
        document.getElementById("mensaje").textContent = "¡Felicidades encontraste el tesoro!";
        desactivarTodo();
    } else {
        celdas[posicion].style.backgroundColor = "gray";
        celdas[posicion].textContent = "x";
        celdas[posicion].style.pointerEvents = "none";

        if (intentos === 0) {
            document.getElementById("mensaje").textContent = "¡Uy! Lo siento perdiste";
            mostrarTesoro();
            desactivarTodo();
        } else {
            document.getElementById("mensaje").textContent = "Sigue buscando... Intentos restantes: " + intentos;
        }
    }
}

// Muestra dónde estaba el tesoro al perder
function mostrarTesoro() {
    let celdas = document.getElementsByClassName("cell");
    celdas[tesoro].textContent = "💰";
    celdas[tesoro].style.backgroundColor = "gold";
}

// Función para deshabilitar todas las celdas al terminar
function desactivarTodo() {
    let celdas = document.getElementsByClassName("cell");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.pointerEvents = "none";
    }
}

// Se recarga la página para reiniciar el juego
function reiniciarJuego() {
    location.reload();
}