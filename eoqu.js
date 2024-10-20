document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('product-name').value;
    const quantity = document.getElementById('product-quantity').value;

    addProduct(name, quantity);
    this.reset();
});

function addProduct(name, quantity) {
    const productList = document.getElementById('product-list');
    
    const li = document.createElement('li');
    li.textContent = `${name} - ${quantity}`;
    li.style.display = 'flex'; // Flexbox for better layout
    li.style.justifyContent = 'space-between'; // Space between product and quantity
    li.style.alignItems = 'center'; // Center items vertically
    li.style.padding = '10px'; // Padding for touch targets
    li.style.borderBottom = '1px solid #ddd'; // Separator for items

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remove-btn');
    removeButton.style.marginLeft = '10px'; // Space between text and button
    removeButton.onclick = function() {
        productList.removeChild(li);
    };

    li.appendChild(removeButton);
    productList.appendChild(li);
}
