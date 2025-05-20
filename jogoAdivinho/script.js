
window.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("palpite");
    const botao = document.getElementById("enviar");
    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

    const numeroAleatorio = Math.floor(Math.random() * 100 + 1);
    let contadorTentativa = 0;

    botao.addEventListener("click", function () {
        const palpite = Number(input.value);

        if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
            mensagem.textContent = 'Digite um número entre 1 e 100.';
            mensagem.style.color = 'red';
            return;
        }

        contadorTentativa++;

        if (palpite === numeroAleatorio) {
            mensagem.textContent = `Meus parabéns! Você acertou o número: ${numeroAleatorio} em ${contadorTentativa} tentativas.`;
            mensagem.style.color = 'green';
        } else if (palpite < numeroAleatorio) {
            mensagem.textContent = "Voce errou! O número é maior.";
            mensagem.style.color = 'red';
        } else if (palpite > numeroAleatorio) {
            mensagem.textContent = "Voce errou! O número é menor.";
            mensagem.style.color = 'holloween';
        } else {
            mensagem.textContent = "Você ainda NÃO acertou! Tente novamente.";
            mensagem.style.color = 'orange';
        }

        tentativas.textContent = `Tentativa: ${contadorTentativa}`;
        input.value = "";
        input.focus();
    });
});

