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

// Initialize the total when the page loads
updateTotal();