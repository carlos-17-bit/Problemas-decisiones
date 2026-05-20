function calcularPoliza() {
    const tipo = document.getElementById('tipo').value;
    const edad = parseInt(document.getElementById('edad').value);
    const alcohol = document.getElementById('alcohol').checked;
    const lentes = document.getElementById('lentes').checked;
    const enfermedad = document.getElementById('enfermedad').checked;
    const ressultado = document.getElementById('resultado');

    if (isNaN(edad) || edad <= 17) {
        ressultado.innerHTML = '<span class="error" style="color: red;">Usted es menor de edad, ingrese una edad valida.</span>';
        return;
    }

    let costoBase = (tipo === 'A') ? 1200 : 950;
    let cargos = 0;

    if (alcohol) cargos += costoBase * 0.10;
    if (lentes) cargos += costoBase * 0.05;
    if (enfermedad) cargos += costoBase * 0.05;
    
    if (edad > 40) {
        cargos += costoBase * 0.20;
    } else {
        cargos += costoBase * 0.10;
    }

    const total = costoBase + cargos;
    ressultado.innerHTML = `Costo Total: $${total.toFixed(2)}`;
}