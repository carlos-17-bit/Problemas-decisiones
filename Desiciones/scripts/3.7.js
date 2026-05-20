function procesarBeca() {
    const edad = parseInt(document.getElementById('edad').value);
    const promedio = parseFloat(document.getElementById('promedio').value);
    const resultado = document.getElementById('resultado');

    let mensaje = "";
    let clase = "exito";

    if (edad > 18) {
        if (promedio >= 9) mensaje = "Beca asignada: $2000.00";
        else if (promedio >= 7.5) mensaje = "Beca asignada: $1000.00";
        else if (promedio >= 6.0) mensaje = "Beca asignada: $500.00";
        else {
            mensaje = "Te invitamos a estudiar más el próximo ciclo.";
            clase = "info";
        }
    } else {
        if (promedio >= 9) mensaje = "Beca asignada: $3000.00";
        else if (promedio >= 8) mensaje = "Beca asignada: $2000.00";
        else if (promedio >= 6) mensaje = "Beca asignada: $100.00";
        else {
            mensaje = "Te invitamos a estudiar más el próximo ciclo.";
            clase = "info";
        }
    }

    resultado.className = "mensaje " + clase;
    resultado.innerHTML = mensaje;
}