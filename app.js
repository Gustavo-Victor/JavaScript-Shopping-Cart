//Pegando elementos html
var containerProdutos = window.document.getElementById('produtos'); 
var containerCarrinho = window.document.getElementById('carrinho'); 
var links = window.document.getElementsByTagName('a');

//criando vetor de objetos com os produtos
const produtos = [
    {
        id: 0,
        nome: 'Camiseta 1',
        img: 'imagem.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Camiseta 2',
        img: 'imagem.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Boné',
        img: 'imagem3.jpg',
        quantidade: 0
    }
];

//função para mostrar a vitrine
var mostrarVitrine = () => {
    produtos.map((valor) => {
        containerProdutos.innerHTML += 
        `
        <div class='produto-single'>
            <img src='${valor.img}' alt='${valor.nome}' title='${valor.nome}' />
            <p>${valor.nome}</p>            
            <a href='#' key='${valor.id}'>Adicionar ao Carrinho</a>
        </div>
        `;
    })
}
//chamar
mostrarVitrine();

//pra cada link que existir vai ter uma função que quando clicar no link adiciona na qunatidade do produto 
for(let contador = 0; contador < links.length; contador++){
    links[contador].addEventListener('click', function(){
        let key = this.getAttribute('key');
        produtos[key].quantidade++;
        adicionarCarrinho();  
    });
}

//função para adicionar ao carrinho
var adicionarCarrinho = () => {
    containerCarrinho.innerHTML = '';

    produtos.map((valor) => {
        if(valor.quantidade > 0){
            containerCarrinho.innerHTML += 
            `
            <div class='info-single-checkout'>
                <p id='product'><strong>Produto: </strong>${valor.nome}</p>
                <p id='quantity'><strong>Quantidade: </strong>${valor.quantidade}</p>
                <div id='limpar'></div>
            </div>
            `;
        }
    });
}


