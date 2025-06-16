document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const cart = document.getElementById('cart');
    const totalPriceEl = document.getElementById('total-price');
    const singleItemTotalEl = document.getElementById('single-item-total');
    const creditPaymentEl = document.getElementById('credit-payment');
    const installmentPaymentEl = document.getElementById('installment-payment');
    const clearCartBtn = document.getElementById('clear-cart');
    const cartCounter = document.querySelector('.cart-counter');
    const checkoutButton = document.getElementById('checkout-button');

    function syncCounters() {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || {};
        if (cartCounter) cartCounter.textContent = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
        const favoriteCounter = document.querySelector('.favorite-counter');
        if (favoriteCounter) favoriteCounter.textContent = Object.keys(favoriteItems).length;
    }

    function updateCart() {
        cart.innerHTML = '';
        let totalPrice = 0;
        let totalItems = 0;

        if (Object.keys(cartItems).length === 0) {
            cart.innerHTML = "<p>Корзина пуста</p>";
            if (totalPriceEl) totalPriceEl.textContent = `0 ₸`;
            if (creditPaymentEl) creditPaymentEl.textContent = `0 ₸ x 60 мес`;
            if (installmentPaymentEl) installmentPaymentEl.textContent = `0 ₸ x 24 мес`;
            if (cartCounter) cartCounter.textContent = '0';
            syncCounters();
            return;
        }

        Object.values(cartItems).forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.classList.add('cart-item');
            const itemTotal = item.price * item.quantity;
            cartItemEl.innerHTML = `
            <div class="product-info">
                <img src="${item.image}" alt="${item.name}" class="product-image">
                <div class="product-info-2">
                    <h3>${item.name}</h3>
                    <p class="item-total">${itemTotal} ₸</p>
                </div>
            </div>
            <div class="actions">
                <div class="quantity-controls">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                </div>
                <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
            </div>
        `;
            cart.appendChild(cartItemEl);
            totalPrice += itemTotal;
            totalItems += item.quantity;
        });

        const totalCredit = totalPrice / 60;
        const totalInstallment = totalPrice / 24;

        if (totalPriceEl) totalPriceEl.textContent = `${totalPrice} ₸`;
        if (creditPaymentEl) creditPaymentEl.textContent = `${totalCredit.toFixed(2)} ₸ x 60 мес`;
        if (installmentPaymentEl) installmentPaymentEl.textContent = `${totalInstallment.toFixed(2)} ₸ x 24 мес`;
        if (cartCounter) cartCounter.textContent = totalItems;

        if (singleItemTotalEl) {
            singleItemTotalEl.innerHTML = `${totalItems} товара на сумму <span class="price">${totalPrice} ₸</span>`;
        }

        syncCounters();
    }

    function removeItemFromCart(id) {
        if (cartItems[id]) {
            delete cartItems[id];
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    }

    function changeQuantity(id, delta) {
        if (cartItems[id]) {
            cartItems[id].quantity += delta;
            if (cartItems[id].quantity <= 0) {
                removeItemFromCart(id);
            } else {
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            updateCart();
        }
    }

    cart.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('remove-from-cart')) {
            removeItemFromCart(id);
        } else if (e.target.classList.contains('increase')) {
            changeQuantity(id, 1);
        } else if (e.target.classList.contains('decrease')) {
            changeQuantity(id, -1);
        }
    });

    clearCartBtn.addEventListener('click', () => {
        localStorage.removeItem('cartItems');
        cartItems = {};
        updateCart();
    });

    checkoutButton.addEventListener('click', () => {
        if (Object.keys(cartItems).length === 0) {
            alert('Корзина пуста');
            return;
        }

        let printWindow = window.open('', '', 'width=800,height=600');
        let printContent = `
            <html>
            <head>
                <title>Заказ</title>
                <style>
                    body { font-family: sans-serif; padding: 20px; }
                    h2 { text-align: center; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
                    th { background-color: #f5f5f5; }
                    .total { text-align: right; font-weight: bold; }
                </style>
            </head>
            <body>
                <h2>Детали заказа</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Кол-во</th>
                            <th>Цена за шт.</th>
                            <th>Итого</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        let total = 0;

        Object.values(cartItems).forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            printContent += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price} ₸</td>
                    <td>${itemTotal} ₸</td>
                </tr>
            `;
        });

        printContent += `
                    <tr>
                        <td colspan="3" class="total">Общая сумма</td>
                        <td class="total">${total} ₸</td>
                    </tr>
                    </tbody>
                </table>
            </body>
            </html>
        `;

        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    });

    updateCart();
});
