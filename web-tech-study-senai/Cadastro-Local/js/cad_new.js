const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionar evento click no botão salvar
salvarBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const valor = campo.value;

    if(valor.trim() == "") {
        alert("Campo Obrigatorio")
        return;
    }

    //salvar no localStorage
    const chave = `ValorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor); 

    //limpar campo apos salvar 
    campo.value = "";

    //exibir os valores salvos 
    carregarValoresSalvos();
});