console.log("Conectando...");

function enviarMensajes(id, mensaje) {
    const error = document.querySelector(`#error-${id}`); // comillas invertidas ->  altgr + enter al costado(``)
    error.textContent = mensaje;
    setTimeout(() => {
        error.textContent = "";
    }, 5000); 
}

// Capturar ese form
const formulario = document.querySelector("#formulario");
console.log(formulario);
// Capturando el checkbox para habilitar boton
const ticket = document.querySelector("#ticket");
// Capturando boton
const boton = document.querySelector("#btn-aceptar");

// Escuchar el evento submit
formulario.addEventListener("submit", function(event){
    // Para evitar la recarga de pagina en submit
    event.preventDefault();
    console.log("Hice click");
    
    // Variable para confirmar
    let validaciones = true;

    const nombre = formulario.nombre.value.trim(); //obtener valor del input
    // "    Hola mundo  "  .trim() -> "Hola mundo"  , quita los escpacios 
    const edad = Number(formulario.edad.value);
    const estadocivil = formulario.estadoCivil.value;
    const licencia = formulario.licencia.value;

    console.log("Tu nombre es ", nombre);

    // Como validamos que un campo no sea vacio?
    if (nombre === ""){
        enviarMensajes("nombre", "Nombre no puede estar vacio");
        validaciones = false;
    }

    console.log(edad);
    if (isNaN(edad) || edad <= 0){        // || -> o   && -> y
        console.log("Entrando if edad")
        // Number ("3") -> 3
        // Number ("Tres") -> NaN (Not a Number)
        // Number("") -> 0
        enviarMensajes("edad", "Debe ingresar una edad valida");
        validaciones = false;
    }

    if (estadocivil == "-1"){
        enviarMensajes("ecivil", "Debe seleccionar una opcion valida")
        validaciones = false;
    }

    console.log("licencia");  // Si o no 
    if (licencia != "si" && licencia != "no"){
        enviarMensajes("licencia", "Debe seleccionar Si o No"); 
        validaciones = false;
    }

    if(validaciones == false){
        return  // early return
    }

    alert("Todos los campos estan correctos");
});

ticket.addEventListener("change", function(){
    console.log("Cambio el ticket");
    console.log(ticket.checked);  // Ver estado de checkbox
    if(ticket.checked === true){
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }
});