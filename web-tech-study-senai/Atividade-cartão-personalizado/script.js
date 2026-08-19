const botao = document.getElementById('botao-interativo');
const fundo = document.body;
const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');
const imagem = document.getElementById('imagem');

let statusModo = false;

botao.addEventListener('click', () => {
    if (statusModo === false) {
        fundo.classList.add('modo-noite');
        titulo.innerText = "Hora da Resenha";
        texto.innerText = "Agora é hora de discutir os lances e cornetar o juiz com os amigos";
        imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgU8WbeTOwsQET8YjxvWkjCEawz1E_M9F1eAWY1H8jA&s=10";
        statusModo = true;
    } else {
        fundo.classList.remove('modo-noite');
        titulo.innerText = "Dia de Jogo";
        texto.innerText = " dia de jogo já sabemos como funciona , peimeiro o joguinho depois a resenha";
        imagem.src = "https://www.civitatis.com/blog/wp-content/uploads/2022/10/wembley-stadium-1.jpg";
        statusModo = false;
    }
});
