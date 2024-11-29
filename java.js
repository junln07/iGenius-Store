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
// Selecionar todos os botões "Ver Produto"
document.querySelectorAll('.view-product-button').forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://wa.me/message/Q5IDCLX3TDGLI1', '_blank');
    });
});
