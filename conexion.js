const form = document.getElementById("formPrestamo");
form.addEventListener("submit",function(e){e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const titulo = document.getElementById("titulo").value;
    const fechaP = document.getElementById("fechaP").value;
    const fechaD = document.getElementById("fechaD").value;
    console.log(nombre, titulo, fechaP, fechaD);
    const datos = {
        nombre: nombre,
        titulo: titulo,
        fecha_prestamo: fechaP,
        fecha_devolucion: fechaD
    };
    fetch("http://localhost:3000/api/registrar_prestamo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" },
            body: JSON.stringify(datos) })
            .then(respuesta => respuesta.json())
            .then(datosRespuesta => { alert("¡Préstamo registrado exitosamente!");
            });
});
