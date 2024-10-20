// Inicializa um array para armazenar os itens do carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para adicionar itens ao carrinho
function addToCart(product, price) {
    const item = { product, price: parseFloat(price) }; // Certifique-se de que o preço seja um número
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Armazena o carrinho no localStorage
    alert(`${product} foi adicionado ao carrinho!`);
}

// Adiciona eventos de clique aos botões de compra
const buyButtons = document.querySelectorAll('.buy-now');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        addToCart(product, price);
    });
});

// Ajusta a responsividade para celular e PC
const style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        padding: 20px;
    }
    .product-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
        text-align: center;
    }
    .banner-image {
        max-width: 100%;
        height: auto;
    }
`;
document.head.appendChild(style);
