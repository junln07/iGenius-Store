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

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
        productList.removeChild(li);
    };

    li.appendChild(removeButton);
    productList.appendChild(li);
}
