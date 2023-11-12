document.addEventListener("DOMContentLoaded", function(){

    // script.js (modificado con funcionalidad adicional)
console.log("Script modificado cargado");

// Nueva funcionalidad: Búsqueda de elementos en el DOM
const buscarElemento = (selector) => {
    const elemento = document.querySelector(selector);
    return elemento ? elemento : "Elemento no encontrado";
};

// Ejemplo de uso
const resultado = buscarElemento(".mi-clase");
console.log(resultado);

// Otra funcionalidad: Cambiar dinámicamente el contenido de un elemento
const cambiarContenido = (selector, nuevoContenido) => {
    const elemento = buscarElemento(selector);
    if (elemento !== "Elemento no encontrado") {
        elemento.textContent = nuevoContenido;
    }
};

// Ejemplo de uso
cambiarContenido("#mi-elemento", "¡Nuevo Contenido!");

});
