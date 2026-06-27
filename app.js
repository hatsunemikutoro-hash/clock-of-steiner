const dataAlvo = new Date('2036-08-20T00:00:00').getTime()
const horario = document.getElementById('counter')


function update() {
    const agora = new Date().getTime()
    const diferenca = dataAlvo - agora

    const totalSegundos = Math.floor(diferenca / 1000);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    const horasFormatadas = String(horas).padStart(6, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');

    const displayNixie = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
    horario.innerText = displayNixie

}

const intervalo = setInterval(update, 1000);

update()