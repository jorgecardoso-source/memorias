```javascript
const inicio = new Date(2026, 7, 10, 0, 0, 0);

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora.getTime() - inicio.getTime();

    if (diferenca < 0) {
        diferenca = 0;
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(totalSegundos / 86400);

    const horas = Math.floor(
        (totalSegundos % 86400) / 3600
    );

    const minutos = Math.floor(
        (totalSegundos % 3600) / 60
    );

    const segundos =
        totalSegundos % 60;


    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}


atualizarContador();

setInterval(atualizarContador, 1000);
```
