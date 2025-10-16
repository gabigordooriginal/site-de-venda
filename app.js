document.addEventListener('DOMContentLoaded', () => {
    let itemCount = 0;
    const cartButton = document.querySelector('.cart-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Função para atualizar o texto do botão do carrinho
    function updateCartDisplay() {
        cartButton.textContent = `🛒 Carrinho (${itemCount})`;
    }

    // Adiciona um evento de clique a cada botão "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            itemCount++; // Incrementa a contagem de itens
            updateCartDisplay(); // Atualiza o display
            alert('Produto adicionado ao carrinho!'); 
            // Em um site real, você adicionaria o produto a uma lista ou array
        });
    });

    // Inicializa o display do carrinho
    updateCartDisplay();
});
