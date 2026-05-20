function calcular() {
    const horas = parseFloat(document.getElementById('horas').value);
    const pago = parseFloat(document.getElementById('pago').value);
    const resultado = document.getElementById('resultado');
    let sueldo = 0;

    resultado.style.display = 'block';

    if (horas > 50) {
        resultado.innerHTML = '<span class="error">Máximo 50 horas permitidas</span>';
        return;
    }

    if (horas <= 40) {
        sueldo = horas * pago;
    } else if (horas <= 45) {
        sueldo = (40 * pago) + ((horas - 40) * pago * 2);
    } else {
        sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
    }

    resultado.innerHTML = `Sueldo: $${sueldo.toFixed(2)}`;
}