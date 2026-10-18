const form = document.getElementById("formPrestamo");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        titulo: document.getElementById("titulo").value,
        fecha_prestamo: document.getElementById("fechaP").value,
        fecha_devolucion: document.getElementById("fechaD").value
    };

    try {
        const respuesta = await fetch(
            "http://localhost:3000/api/registrar_prestamo",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            }
        );

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(resultado.error || "Error al registrar el préstamo");
        }

        alert(resultado.mensaje);
        form.reset();

    } catch (error) {
        console.error("Error en la petición:", error);
        alert("No se pudo registrar el préstamo: " + error.message);
    }
});
