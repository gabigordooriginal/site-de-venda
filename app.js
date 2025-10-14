// Array para armazenar os itens do carrinho
let cart = [];
// Contador de itens no carrinho
let cartCount = 0;

// Seleciona o elemento onde a contagem será exibida
const cartCountElement = document.getElementById('cart-count');

// Seleciona todos os botões com a classe 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Função para atualizar a contagem no HTML
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Adiciona um evento de clique a cada botão 'Comprar'
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 1. Coleta os dados do produto usando os atributos 'data-'
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // 2. Cria um objeto para o novo item
        const newItem = {
            name: productName,
            price: productPrice,
            quantity: 1
        };

        // 3. Adiciona o item ao carrinho (neste exemplo, apenas aumenta o contador)
        // Em um sistema real, você adicionaria o objeto 'newItem' ao array 'cart'.
        cart.push(newItem); 
        
        // 4. Incrementa o contador do carrinho
        cartCount++;
        updateCartCount();

        // Feedback visual para o usuário
        alert(`${productName} adicionado ao carrinho!`);
        
        // Opcional: Log no console para ver o estado do carrinho
        console.log('Carrinho Atual:', cart);
    });
});

// Inicializa a contagem ao carregar a página
updateCartCount();
