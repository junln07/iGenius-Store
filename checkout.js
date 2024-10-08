let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para atualizar a exibição dos itens no checkout
function updateCheckoutDisplay() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Limpa o conteúdo anterior
    checkoutItemsContainer.innerHTML = '';
    totalPriceContainer.innerHTML = '';

    // Adiciona itens do carrinho ao DOM
    if (cart.length > 0) {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
            checkoutItemsContainer.appendChild(itemElement);
        });

        // Calcula o preço total
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        totalPriceContainer.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    } else {
        checkoutItemsContainer.textContent = 'Seu carrinho está vazio.';
    }
}

// Atualiza a exibição do checkout ao carregar a página
updateCheckoutDisplay();
