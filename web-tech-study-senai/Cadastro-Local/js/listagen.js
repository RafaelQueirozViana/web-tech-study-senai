const ListaValores = document.querySelector("#ListaValores");

//carregar vaklores ao iniciar a pagina 
carregarValoresSalvos();


//função para carrehar valores na lista 
function carregarValoresSalvos() {
    ListaValores.innerHTML = " ";

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith(`ValorSalvo`));//filtra as chaves
           const valor = localStorage.getItem(chave);
           const Listitem = document    .createElement("li");
           Listitem.textContent = valor;
           ListaValores.appendChild(Listitem);
    }

}