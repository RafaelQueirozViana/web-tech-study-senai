const apagarBtn = document.querySelector("#apagar");

apagarBtn.addEventListener("click", function () {
    //limpa todos os valores no localstorage
    localStorage.clear();

    ListaValores.innerHTML = "";
})