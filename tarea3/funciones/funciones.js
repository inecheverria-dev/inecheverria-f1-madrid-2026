// Cambia entre el tema oscuro y el tema claro
function cambiarTema() {
    document.body.classList.toggle("tema-claro");

    const boton = document.getElementById("boton-tema");
    const temaClaro = document.body.classList.contains("tema-claro");

    if (temaClaro) {
        boton.textContent = "Usar tema oscuro";
    } else {
        boton.textContent = "Usar tema claro";
    }
}

// Conecta el botón con la función
const botonTema = document.getElementById("boton-tema");

if (botonTema) {
    botonTema.addEventListener("click", cambiarTema);
}

// Cambia el tamaño del texto
function cambiarTamanoTexto() {
    document.body.classList.toggle("texto-grande");

    const boton = document.getElementById("boton-tamano");
    const textoGrande = document.body.classList.contains("texto-grande");

    if (textoGrande) {
        boton.textContent = "Tamaño normal";
    } else {
        boton.textContent = "Aumentar texto";
    }
}

// Conecta el botón con la función
const botonTamano = document.getElementById("boton-tamano");

if (botonTamano) {
    botonTamano.addEventListener("click", cambiarTamanoTexto);
}

// Vuelve suavemente al principio de la página
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Conecta el botón con la función
const botonArriba = document.getElementById("boton-arriba");

if (botonArriba) {
    botonArriba.addEventListener("click", volverArriba);
}