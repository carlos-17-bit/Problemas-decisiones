function buscarMenor() {
    let persona1 = { nombre: document.getElementById('nombre1').value, edad: parseInt(document.getElementById('edad1').value) };
    let persona2 = { nombre: document.getElementById('nombre2').value, edad: parseInt(document.getElementById('edad2').value) };
    let persona3 = { nombre: document.getElementById('nombre3').value, edad: parseInt(document.getElementById('edad3').value) };
    let resultado = document.getElementById('resultado');

    if (persona1.edad < persona2.edad && persona1.edad < persona3.edad) {
        menor = persona1;
    } else if (persona2.edad < persona3.edad) {
        menor = persona2;
    } else {
        menor = persona3;
    }

    resultado.innerHTML = `La persona menor es ${menor.nombre} con ${menor.edad} años.`;
    resultado.style.display = 'block';
}