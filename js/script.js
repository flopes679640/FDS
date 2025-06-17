let mensagem = document.querySelector('#mensagem');
const botao = document.querySelector('.botaoMensagem');

botao.addEventListener('click', e=>{
let conteudoMensagem = "Continue se dedicando, que voce alcançara todos os seus objetivos";
 mensagem.innerHTML = conteudoMensagem;
setTimeout(() => {
 mensagem.innerHTML = '';
}, 2500);

});
