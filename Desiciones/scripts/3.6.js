function calcular() {
    const precio = parseFloat(document.getElementById('precio').value);
    const resultado = document.getElementById('resultado');
    
    if (precio >= 200) {
        porcentaje = 0.15;
    } else if (precio > 100) {
        porcentaje = 0.12;
    } else {
        porcentaje = 0.10;
    }

    const descuento = precio * porcentaje;
    const costoFinal = precio - descuento;

    resultado.innerHTML = `
        Descuento (${porcentaje * 100}%): $${descuento.toFixed(2)}<br>
        Total a pagar: $${costoFinal.toFixed(2)}
    `;
}