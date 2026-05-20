function calcular() {
        const horas = parseFloat(document.getElementById('horas').value);
        const pago = parseFloat(document.getElementById('pago').value);
        const resultado = document.getElementById('resultado');
        const detalle = document.getElementById('detalle');
        const total = document.getElementById('total');

        let sueldo = 0;
        let msgDetalle = "";

        if (horas <= 40) {
            sueldo = horas * pago;
            msgDetalle = `Horas normales: ${horas} x $${pago}`;
        } else {
            const horasExtra = horas - 40;
            const pagoNormal = 40 * pago;
            const pagoExtra = horasExtra * (pago * 2);
            sueldo = pagoNormal + pagoExtra;
            msgDetalle = `Horas normales (40): $${pagoNormal}<br>Horas extra (${horasExtra}): $${pagoExtra} (Doble)`;
        }

        detalle.innerHTML = msgDetalle;
        total.innerText = sueldo.toLocaleString();
        resultado.style.display = 'block';
    }