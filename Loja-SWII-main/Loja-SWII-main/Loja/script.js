
const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const btnAnterior = document.querySelector('.seta-anterior');
const btnProximo = document.querySelector('.seta-proximo');
let indiceAtual = 0;

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}
btnAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual === 0) ? imagens.length - 1 : indiceAtual - 1;
  atualizarCarrossel();
});
btnProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual === imagens.length - 1) ? 0 : indiceAtual + 1;
  atualizarCarrossel();
});


const btnCarrinho = document.getElementById('btn-carrinho');
const carrinhoLateral = document.getElementById('carrinho-lateral');
const contadorQuantidade = document.getElementById('contador-quantidade');
const botoesAdicionar = document.querySelectorAll('.botao-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');

let carrinho = [];
let total = 0;

btnCarrinho.addEventListener('click', () => {
  carrinhoLateral.classList.toggle('aberto');
});

botoesAdicionar.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const produto = btn.parentElement;
    const descricao = produto.querySelector('.descricao').innerText;
    const preco = parseFloat(produto.querySelector('.preco').innerText.replace('R$', '').replace(',', '.'));

    carrinho.push({ descricao, preco });
    total += preco;

    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  itensCarrinho.innerHTML = '';
  carrinho.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.descricao} - R$ ${item.preco.toFixed(2)}`;
    itensCarrinho.appendChild(div);
  });

  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
  contadorQuantidade.textContent = carrinho.length;
  contadorQuantidade.style.display = carrinho.length > 0 ? 'inline-block' : 'none';
}
