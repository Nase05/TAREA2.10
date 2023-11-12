document.addEventListener("DOMContentLoaded", function(){

// script.js (modificado para búsqueda)
console.log("Script modificado cargado");

// Nueva funcionalidad: Búsqueda de elementos en el DOM
const buscarElemento = (selector) => {
    const elemento = document.querySelector(selector);
    return elemento ? elemento : "Elemento no encontrado";
};

// Ejemplo de uso
const resultado = buscarElemento(".mi-clase");
console.log(resultado);

});
