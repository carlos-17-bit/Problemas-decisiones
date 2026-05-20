function elegirRegalo() {
    const presupuesto = parseFloat(document.getElementById('presupuesto').value);
    const resultado = document.getElementById('resultado');
    const Regalo = document.getElementById('regalo');
    
    if (presupuesto <= 10) {
        regalo = "Una Tarjeta";
    } else if (presupuesto > 10 && presupuesto <= 100) {
        regalo = "Chocolates";
    } else if (presupuesto > 100 && presupuesto <= 250) {
        regalo = "Un Ramo de Flores";
    } else {
        regalo = "Un Anillo";
    }

    Regalo.innerText = regalo;
    resultado.style.display = 'block';
    
    resultado.style.backgroundColor = (presupuesto > 250) ? "#fffaf0" : "#fff5f5";
}