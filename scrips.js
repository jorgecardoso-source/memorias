function abrirCarta() {
    const carta = document.getElementById("carta");

    carta.classList.remove("escondida");

    setTimeout(() => {
        carta.scrollIntoView({
            behavior: "smooth"
        });
    }, 100);
}


// CONTADOR DESDE 10/08/2026

const inicio = new Date("2026-08-10T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - inicio;

    if (diferenca < 0) {
        diferenca = 0;
    }

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);

    const horas = Math.floor(
        (segundosTotais % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotais % 3600) / 60
    );

    const segundos =
        segundosTotais % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);
