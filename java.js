// Function to search products
function searchProducts() {
    const query = document.getElementById('search-input').value.trim(); // Remove whitespace
    // Check if the query is not empty
    if (query) {
        // Redirect to the search results page
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
}

// Function to add products to the cart
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

// Select all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = productCard.querySelector('.price').innerText;
        addToCart(productName, productPrice);
    });
});
