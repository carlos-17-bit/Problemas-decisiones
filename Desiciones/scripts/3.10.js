function determinarDestino() {
    const presupuesto = parseFloat(document.getElementById('presupuesto').value);
    const costoKm = parseFloat(document.getElementById('costoKm').value);
    const resultado = document.getElementById('resultado');

    const dCancun = 1800 * 2 * costoKm;
    const dAcapulco = 1200 * 2 * costoKm;
    const dPV = 800 * 2 * costoKm;
    const dMexico = 750 * 2 * costoKm;

    if (presupuesto >= dCancun) {
        destino = "Tu destino es: Cancún";
    } else if (presupuesto >= dAcapulco) {
        destino = "Tu destino es: Acapulco";
    } else if (presupuesto >= dPV) {
        destino = "Tu destino es: Puerto Vallarta";
    } else if (presupuesto >= dMexico) {
        destino = "Tu destino es: México";
    } else {
        destino = "Debes quedarte en casa";
    }

    resultado.innerHTML = destino;
}