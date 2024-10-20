let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the display of items in the checkout
function updateCheckoutDisplay() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Clear previous content
    checkoutItemsContainer.innerHTML = '';
    totalPriceContainer.innerHTML = '';

    // Add cart items to the DOM
    if (cart.length > 0) {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
            itemElement.style.display = 'flex'; // Flexbox for better layout
            itemElement.style.justifyContent = 'space-between'; // Space between product and price
            itemElement.style.padding = '10px'; // Padding for touch targets
            itemElement.style.borderBottom = '1px solid #ddd'; // Separator for items
            checkoutItemsContainer.appendChild(itemElement);
        });

        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        totalPriceContainer.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
        totalPriceContainer.style.fontSize = '1.5em'; // Larger font for total price
    } else {
        checkoutItemsContainer.textContent = 'Seu carrinho está vazio.';
    }
}

// Update the checkout display when the page loads
updateCheckoutDisplay();
