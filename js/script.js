console.log("Conectando...")

function enviarMensajes(id, mensaje){
    const error = document.querySelector(`#error-${id}`); // comillas invertidas ->  altgr + enter al costado(``)
    error.textContent = "mensaje";
    setTimeout(() => {
        error.textContent = "";
    }, 5000); 
}

// Capturar ese form
const formulario = document.querySelector("#formulario");
console.log(formulario);


// Escuchar el evento submit
formulario.addEventListener("submit", function(event){
    // Para evitar la recarga de pagina en submit
    event.preventDefault();
    console.log("Hice click");

    const nombre = formulario.nombre.value.trim(); //obtener valor del input
    // "    Hola mundo  "  .trim() -> "Hola mundo"
    const edad = Number(formulario.edad.value);
    const estadocivil = formulario.estadocivil.value;

    console.log("Tu nombre es ", nombre)

    // Como validamos que un campo no sea vacio?
    if (nombre === ""){
        enviarMensajes("nombre", "Nombre no puede estar vacio")
    }

    console.log(edad);
    if (isNaN(edad) || edad <= 0){        // || -> o   && -> y
        console.log("Entrando if edad")
        // Number ("3") -> 3
        // Number ("Tres") -> NaN (Not a Number)
        enviarMensajes("edad", "Debe ingresar una edad valida")
    }
});