// Função para buscar produtos
function searchProducts() {
    const query = document.getElementById('search-input').value.trim(); // Remove espaços em branco
    // Verifica se a consulta não está vazia
    if (query) {
        // Redireciona para a página de resultados de pesquisa
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
}

// Função para adicionar produtos ao carrinho
function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <p>${productName}</p>
        <p>${productPrice}</p>
    `;
    cartItems.appendChild(cartItem);
}

// Selecionar todos os botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = productCard.querySelector('.price').innerText;
        addToCart(productName, productPrice);
    });
});
