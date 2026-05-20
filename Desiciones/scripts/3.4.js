function calcularParking() {
    let horas = parseFloat(document.getElementById('horas').value);
    let total = 0;
    let resultado = document.getElementById('resultado');

    if (horas <= 2) {
        total = horas * 5;
    } else if (horas <= 5) {
        total = (2 * 5) + (horas - 2) * 4;
    } else if (horas <= 10) {
        total = (2 * 5) + (3 * 4) + (horas - 5) * 3;
    } else {
        total = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
    }

    resultado.innerHTML = `Total a pagar: $${total.toFixed(2)}`;
    resultado.style.display = 'block';
}