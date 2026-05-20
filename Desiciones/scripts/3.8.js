function calcularBono() {
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const resultado = document.getElementById('resultado');

    let bonoAnt = 0;
    if (antiguedad >= 2 && antiguedad < 5) {
        bonoAnt = sueldo * 0.20;
    } else if (antiguedad >= 5) {
        bonoAnt = sueldo * 0.30;
    }

    let bonoSueldo = 0;
    if (sueldo < 1000) {
        bonoSueldo = sueldo * 0.25;
    } else if (sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
    } else {
        bonoSueldo = sueldo * 0.10;
    }

    const bonoFinal = Math.max(bonoAnt, bonoSueldo);
    const motivo = (bonoAnt > bonoSueldo) ? "Antigüedad" : "Monto de Sueldo";

    resultado.style.display = "block";
    resultado.innerHTML = `
        <p>Bono por Antigüedad: $${bonoAnt.toFixed(2)}</p>
        <p>Bono por Sueldo: $${bonoSueldo.toFixed(2)}</p>
        <div class="highlight">
            <strong>Bono Final Asignado: $${bonoFinal.toFixed(2)}</strong><br>
            <small>Criterio aplicado: ${motivo}</small>
        </div>
    `;
}