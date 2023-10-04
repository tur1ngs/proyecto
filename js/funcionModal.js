$(document).ready(function () {
    // Manejar el envío del formulario
    $("#miFormulario").submit(function (e) {
        e.preventDefault(); // Prevenir el envío del formulario normal

        // Aquí puedes agregar la lógica para procesar el formulario y verificar si se envió con éxito.
        // Si el envío fue exitoso, activa el modal:

        $("#myModal").modal("show");
    });

    // Manejar el cierre del modal
    $("#myModal").on("hidden.bs.modal", function () {
        // Redirigir a index.html después de cerrar el modal
        window.location.href = "/index.html";
    });
});