document.addEventListener('DOMContentLoaded', () => {
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
