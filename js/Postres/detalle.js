
document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.querySelector('.product-detail-info .buy-button');

    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('¡Producto añadido al carrito!');
            console.log('Botón "Añadir al Carrito" clicado.');
        });
    }

});