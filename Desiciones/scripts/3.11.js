function calcularBono() {
    const antiguedad = parseInt(document.getElementById('antiguedad').value);
    const resultado = document.getElementById('resultado');
    let bono = 0;

    if (antiguedad > 5) {
        bono = 1000;
    } else {
        bono = antiguedad * 100;
    }

    resultado.innerHTML = `Bono: $${bono}`;
}