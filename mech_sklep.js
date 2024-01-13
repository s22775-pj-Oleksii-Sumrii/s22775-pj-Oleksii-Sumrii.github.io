const cart = [];

    function addToCart(productId) {
        const product = {
            id: productId,
            name: `Product ${productId}`,
            price: getProductPrice(productId),
        };

        cart.push(product);
        updateCart();
    }

    function getProductPrice(productId) {
        switch (productId) {
            case 1:
                return 100.00;
            case 2:
                return 150.00;
            case 3:
                return 200.00;
            case 4:
                return 250.00;
            case 5:
                return 199.99;
            case 6:
                return 224.90;
            case 7:
                return 500.00;
            case 8:
                return 549.00;
            case 9:
                return 459.00;
            case 10:
                return 511.00;
            case 11:
                return 532.99;
            case 12:
                return 544.90;
            case 13:
                return 100.00;
            case 14:
                return 50.00;
            case 15:
                return 70.00;
            case 16:
                return 95.00;
            case 17:
                return 75.99;
            case 18:
                return 63.90;
            default:
                return 0.00;
        }
    }

    function updateCart() {
        const cartElement = document.getElementById('cart');
        cartElement.innerHTML = '';

        for (const product of cart) {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `<p>${product.name}</p><p>${product.price.toFixed(2)}</p>`;
            cartElement.appendChild(productElement);
        }

        updateTotal();
    }

    function updateTotal() {
        const totalElement = document.getElementById('total');
        const total = cart.reduce((sum, product) => sum + product.price, 0);
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    function buy() {
        alert('Dziekuję za zakupy ;)');
        clearCart();
    }

    function cancel() {
        alert('Szkoda że nie dopasowaliśmy do smaku');
        clearCart();
    }

    function clearCart() {
        cart.length = 0;
        updateCart();
    }