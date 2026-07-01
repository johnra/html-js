console.log("Conectado...");

function enviarMensajes(id, mensaje) {
    const error = document.querySelector(`#error-${id}`);
    error.textContent = mensaje;
    setTimeout(() => {
        error.textContent = "";
    }, 5000);
}

function renderizarTabla() {
    const tabla = document.querySelector("#tabla");
    console.log(tabla);
    tabla.innerHTML = ""; // limpia el contenido del tbody
    personas.forEach(function (p) {
        // Creando una fila
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.edad}</td>
        <td>${p.estadoCivil === "0" ? "Soltero(a)" : p.estadoCivil === "1" ? "Casado(a)" : "Divorciado(a)"}</td>
        <td>${p.licencia}</td>
        `;
        const color = p.licencia === "si" ? "bg-verde" : "bg-rojo";
        // classList agrega clases
        tr.classList.add(color)
        tabla.appendChild(tr);
    });

}

const personas = []; // Lista para guardar datos

// Capturar ese form
const formulario = document.querySelector("#formulario");
console.log(formulario);
// Capturando el checkbox para habilitar boton
const ticket = document.querySelector("#ticket");
// Capturando boton
const boton = document.querySelector("#btn-aceptar");


// Escuchar el evento submit
formulario.addEventListener("submit", function (event) {
    // para evitar la recarga de pagina en submit
    event.preventDefault();
    console.log("Hice click");

    // Variable para confimar
    let validaciones = true;

    const nombre = formulario.nombre.value.trim(); // obtener valor del input
    // "   Hola  mundo ".trim() -> "Hola  mundo"
    const edad = Number(formulario.edad.value);
    const estadoCivil = formulario.estadoCivil.value;
    const licencia = formulario.licencia.value;

    console.log("Tu nombre es ", nombre);

    // Como validamos que un campo no sea vacio?
    if (nombre === "") {
        enviarMensajes("nombre", "Nombre no puede estar vacio");
        validaciones = false;
    }

    console.log(edad);
    if (isNaN(edad) || edad <= 0) { // || -> o   && -> y
        console.log("Entrando if edad")
        // Number("3") -> 3
        // Number("Tres") -> NaN (Not a Number)
        // Number("") -> 0
        enviarMensajes("edad", "Debe ingresar una edad valida");
        validaciones = false;
    }

    if (estadoCivil == "-1") {
        enviarMensajes("ecivil", "Debe seleccionar una opcion valida");
        validaciones = false;
    }

    // Verifica si un nombre esta en la lista
    const esta = personas.some(function (p) {
        return p.nombre === nombre;
    })

    if (esta === true) {
        enviarMensajes("nombre", "Nombre ya existe");
        validaciones = false;
    }

    console.log(licencia); // si o no || algo
    if (licencia != "si" && licencia != "no") {
        enviarMensajes("licencia", "Debe seleccionar SI o NO");
        validaciones = false;
    }

    if (validaciones == false) {
        return // early return
    }

    alert("Todos los campos estan correctos");

    const persona = {
        nombre: nombre,
        edad: edad,
        estadoCivil: estadoCivil,
        licencia: licencia
    }

    personas.push(persona); // agrega un objeto person a lista personas
    renderizarTabla();
    formulario.reset(); // Limpia campos de formulario
});

ticket.addEventListener("change", function () {
    console.log("Cambio el ticket");
    console.log(ticket.checked); // Ver estado de checkbox
    if (ticket.checked === true) {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
});