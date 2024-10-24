// Script for calculating the total price in the cart and removing items
const quantities = document.querySelectorAll('.quantity');
const totalPriceElement = document.getElementById('total-price');
const removeButtons = document.querySelectorAll('.remove-item');

// Function to update the total price
function updateTotal() {
    let total = 0;
    quantities.forEach(quantity => {
        const price = parseFloat(quantity.closest('.item-details').querySelector('.price').innerText.replace('R$ ', '').replace('.', '').replace(',', '.'));
        total += price * quantity.value;
    });
    totalPriceElement.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Event listeners for quantity changes
quantities.forEach(quantity => {
    quantity.addEventListener('change', updateTotal);
});

// Function to remove an item from the cart
function removeItem(event) {
    const cartItem = event.target.closest('.cart-item');
    if (cartItem) {
        cartItem.remove();
        updateTotal(); // Update total after removing item
    }
}

// Event listeners for remove buttons
removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
});

// Function to add an item to the cart
function addItemToCart(event) {
    const itemDetails = event.target.closest('.item-details');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <div class="item-details">${itemDetails.innerHTML}</div>
        <input type="number" class="quantity" value="1" min="1">
        <button class="remove-item">Remove</button>
    `;
    document.getElementById('cart').appendChild(cartItem); // Assuming there's a cart element
    updateTotal(); // Update total after adding item
}

// Event listeners for add buttons (assuming they have a class 'add-to-cart')
const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach(button => {
    button.addEventListener('click', addItemToCart);
});

// Initialize the total when the page loads
updateTotal();

// Responsive adjustments for mobile and desktop
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        // Adjust styles or functionality for mobile view
        totalPriceElement.style.fontSize = '1.5em'; // Example adjustment
    } else {
        // Adjust styles or functionality for desktop view
        totalPriceElement.style.fontSize = '2em'; // Example adjustment
    }
});