function calcularPasaje() {
    const alumnos = parseInt(document.getElementById('alumnos').value);
    const resultado = document.getElementById('resultado');
    let costo = 0;
    
    if (alumnos > 100) {
        costo = 20;
    } else if (alumnos >= 50) {
        costo = 35;
    } else if (alumnos >= 20) {
        costo = 40;
    } else {
        costo = 70;
    }

    let totalAutobus = (alumnos < 20) ? 1400 : (costo * alumnos);
    let costoIndividual = (alumnos < 20) ? (1400 / alumnos) : costo;

    resultado.innerHTML = `
        <p>Costo por alumno: $${costoIndividual.toFixed(2)}</p>
        <p><strong>Total a pagar por el autobús: $${totalAutobus.toFixed(2)}</strong></p>
    `;
}