window.onload = () => {
    const products = [
        { id: 1, name: 'GODFREY, FIRST ELDEN LORD - ART PRINT', price: 49.99 },
        { id: 2, name: 'GODSKIN APOSTLE - ART PRINT', price: 49.99 },
        { id: 3, name: 'OFFICIAL VINYL', price: 39.99 },
        { id: 4, name: 'FIGUARTS MINI RAGING WOLF', price: 24.99 },
        { id: 5, name: 'FIGUARTS FESTERING FINGERPRINT VYKE', price: 74.99 },
        { id: 6, name: 'FIGUARTS MINI MELINA', price: 24.99 },
        { id: 7, name: 'General Radahn Oversized Hoodie', price: 49.99 },
        { id: 8, name: 'General Radahn T-Shirt', price: 24.99 },
        { id: 9, name: 'Raging Wolf T-Shirt', price: 24.99 },
    ];

    let cartItems = [];

    function renderCartItems() {
        const cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = '';

        let total = 0;

        for (const item of cartItems) {
            const product = products.find((p) => p.id === item.id);

            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
        <figure><img src="img/product${item.id}.jpg" alt="Foto van product: ${product.name}"></figure>
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="button remove-from-cart" data-id="${item.id}">Remove</button>
      `;

            cartItemsElement.appendChild(cartItemElement);
            total += product.price * item.quantity;
        }

        const totalElement = document.querySelector('.total');
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }


    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.dataset.id);
            const item = cartItems.find((item) => item.id === productId);

            if (item) {
                item.quantity++;
            } else {
                cartItems.push({ id: productId, quantity: 1 });
            }

            renderCartItems();
        });
    });


    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(event.target.dataset.id);
            const itemIndex = cartItems.findIndex((item) => item.id === productId);

            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);
            }

            renderCartItems();
        }
    });


    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cartItems = [];
        renderCartItems();
    });
}
