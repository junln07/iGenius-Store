let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para atualizar a exibição dos itens no carrinho
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Limpa o conteúdo anterior
    cartItemsContainer.innerHTML = '';
    totalPriceContainer.innerHTML = '';

    // Adiciona itens do carrinho ao DOM
    if (cart.length > 0) {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemElement);
        });

        // Calcula o preço total
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        totalPriceContainer.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    } else {
        cartItemsContainer.textContent = 'Seu carrinho está vazio.';
    }
}

// Atualiza a exibição do carrinho ao carregar a página
updateCartDisplay();
