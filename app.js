// Array para armazenar os itens do carrinho
let cart = [];
// Contador de itens no carrinho
let cartCount = 0;

// Seleciona o elemento onde a contagem será exibida
const cartCountElement = document.getElementById('cart-count');

// Seleciona todos os botões com a classe 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Carrinho
    const cartButton = document.querySelector('.btn-cart');
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Previne que o clique submeta um formulário ou navegue
            event.preventDefault(); 
            
            // Lógica de contagem
            cartCount++;
            cartButton.textContent = `Carrinho (${cartCount})`;

            // Feedback visual
            const gameName = event.target.closest('.product-card').dataset.jogo;
            alert(`${gameName} adicionado ao carrinho!`);

            // Desabilita o botão (opcional)
            button.textContent = 'Adicionado!';
            button.disabled = true;
            button.style.backgroundColor = '#4CAF50';
        });
    });

    // 2. Efeito de Destaque ao Clicar (Exemplo de Interação)
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Remove destaque de todos os outros
            productCards.forEach(c => c.classList.remove('highlight'));
            
            // Adiciona o destaque (classe CSS)
            card.classList.add('highlight');
        });
    });

    // 3. Efeito de Scroll Suave (Melhora a navegação)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

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
