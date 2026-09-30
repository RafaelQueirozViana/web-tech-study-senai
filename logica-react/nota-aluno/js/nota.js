// Variáveis
const inputNome = document.getElementById("nome");
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");
const button = document.getElementById("Verifica-nota");

function resultadoNotaClick(event) {
    event.preventDefault();

    // Validação
    if (
        inputNome.value.trim() === "" ||
        inputNota.value.trim() === ""
    ) {
        message.style.display = "block";
        resultado.innerHTML = "";
        return;
    }

    message.style.display = "none";

    const nome = inputNome.value.trim();
    const nota = Number(inputNota.value);

    // Resultado
    if (nota >= 6) {
        resultado.innerHTML = `
            <h3>Resultado</h3>
            <p><strong>Aluno:</strong> ${nome}</p>
            <p><strong>Nota:</strong> ${nota}</p>
            <p><strong>Status:</strong> Aprovado </p>
        `;
    } else {
        resultado.innerHTML = `
            <h3>Resultado</h3>
            <p><strong>Aluno:</strong> ${nome}</p>
            <p><strong>Nota:</strong> ${nota}</p>
            <p><strong>Status:</strong> Reprovado </p>
        `;
    }

    inputNome.value = "";
    inputNota.value = "";
}

button.addEventListener("click", resultadoNotaClick);