const formulario = document.getElementById("formulario-espacial");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensajeUsuario = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensajeUsuario === "") {
        respuesta.textContent = `Por favor, completá todos los campos antes de enviarlo al cosmos.`;
        respuesta.style.color = "red";
    } else {
        respuesta.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado al cosmos con éxito. 🚀`;
        respuesta.style.color = "lightgreen";
        
        formulario.reset();
    }
});
    
    