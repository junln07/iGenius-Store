// java.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.view-product');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            alert(`Viewing product: ${product}`);
            // Add functionality to view product details
        });
    });
});