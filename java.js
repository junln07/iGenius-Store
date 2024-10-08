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
