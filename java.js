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