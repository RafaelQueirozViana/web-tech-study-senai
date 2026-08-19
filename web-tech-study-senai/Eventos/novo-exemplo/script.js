const botao = document.getElementById("btnRevelar");
const answerText = document.getElementById("resposta");

botao.addEventListener('click', function () {
    botao.style.display = "none";
    answerText.textContent = "Resposta revelada";
})
