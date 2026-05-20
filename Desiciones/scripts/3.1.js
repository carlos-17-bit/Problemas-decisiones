function verificarVotacion() {
        const edad = document.getElementById('edad').value;
        const resultado = document.getElementById('resultado');

        if (edad >= 18) {
            resultado.innerHTML = "¡Sí! Eres apto para votar.";
            resultado.className = "puedes";
        } else {
            resultado.innerHTML = "Aún no tienes la edad mínima.";
            resultado.className = "no-puedes";
        }
    }