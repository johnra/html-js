console.log("Conectando...")

// Capturar ese form
const formulario = document.querySelector("#formulario");
console.log(formulario);

// Escuchar el evento submit
formulario.addEventListener("submit", function(event){
    // Para evitar la recarga de pagina en submit
    event.preventDefault();
    console.log("Hice click");


});