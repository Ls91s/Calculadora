function calcular() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, informe números válidos.");
    } else {
        const soma = numero1 + numero2;
        const subtracao = numero1 - numero2;
        const multiplicacao = numero1 * numero2;
        const divisao = numero2 !== 0 ? numero1 / numero2 : "Não é possível dividir por zero";

        document.getElementById("resultadoSoma").textContent = "Soma: " + soma;
        document.getElementById("resultadoSubtracao").textContent = "Subtração: " + subtracao;
        document.getElementById("resultadoMultiplicacao").textContent = "Multiplicação: " + multiplicacao;
        document.getElementById("resultadoDivisao").textContent = "Divisão: " + divisao;

        // Mostra a mensagem "Lembra da promessa" após o cálculo
        const mensagemPerguntaDiv = document.querySelector('.mensagem-pergunta');
        mensagemPerguntaDiv.style.display = 'block';
    }
}

function mostrarPergunta() {
    const mensagemPerguntaDiv = document.querySelector('.mensagem-pergunta');
    mensagemPerguntaDiv.style.display = 'block';
}

function mostrarImagens() {
    const mensagemPositivaDiv = document.querySelector('.mensagem-positiva');
    mensagemPositivaDiv.style.display = 'block';
    const mensagemNegativaDiv = document.querySelector('.mensagem-negativa');
    mensagemNegativaDiv.style.display = 'none';
    const imagensDiv = document.querySelector('.imagens');
    imagensDiv.style.display = 'flex';
}

function mostrarMensagem() {
    const mensagemNegativaDiv = document.querySelector('.mensagem-negativa');
    mensagemNegativaDiv.style.display = 'block';
    const mensagemPositivaDiv = document.querySelector('.mensagem-positiva');
    mensagemPositivaDiv.style.display = 'none';
    const imagensDiv = document.querySelector('.imagens');
    imagensDiv.style.display = 'none';
}

function redefinir() {
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");

    numero1Input.value = "";
    numero2Input.value = "";

    document.getElementById("resultadoSoma").textContent = "";
    document.getElementById("resultadoSubtracao").textContent = "";
    document.getElementById("resultadoMultiplicacao").textContent = "";
    document.getElementById("resultadoDivisao").textContent = "";

    const mensagemNegativaDiv = document.querySelector('.mensagem-negativa');
    mensagemNegativaDiv.style.display = 'none';

    // Oculta a mensagem "Lembra da promessa né?" quando redefinir
    const mensagemPerguntaDiv = document.querySelector('.mensagem-pergunta');
    mensagemPerguntaDiv.style.display = 'none';

    // Redefina a mensagem junto com as imagens
    const mensagemPositivaDiv = document.querySelector('.mensagem-positiva');
    mensagemPositivaDiv.style.display = 'none';

    const imagensDiv = document.querySelector('.imagens');
    imagensDiv.style.display = 'none';

    mostrarPergunta();


}



