const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const button = document.getElementById("button");
const lista = document.getElementById("lista");

button.addEventListener("click", (event) => {
   event.preventDefault();
   
   const inputNome = nome.value;
   const inputTelefone = telefone.value;
   const inputEmail = email.value;
   

const templateHTML = `
   <li class="item-usuario">
      <strong>Nome:</strong> ${inputNome} <br>
      <strong>Telefone:</strong> ${inputTelefone} <br>
      <strong>E-mail:</strong> ${inputEmail}
   </li>
`;


   // Inclui o item no HTML
   lista.innerHTML += templateHTML;

   nome.value = "";
   telefone.value = "";
   email.value = "";
});
