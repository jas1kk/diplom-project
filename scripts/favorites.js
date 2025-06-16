document.addEventListener('DOMContentLoaded', () => {
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || {};
    const favorites = document.getElementById('favorites');
    const favoriteCounter = document.querySelector('.favorite-counter');

    // Функция для синхронизации счетчиков избранного и корзины
    function syncCounters() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        if (favoriteCounter) favoriteCounter.textContent = Object.keys(favoriteItems).length;
        const cartCounter = document.querySelector('.cart-counter');
        if (cartCounter) cartCounter.textContent = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
    }

    // Функция для обновления списка избранного
    function updateFavorites() {
        favorites.innerHTML = '';

        if (Object.keys(favoriteItems).length === 0) {
            favorites.innerHTML = "<p>Избранное пусто</p>";
            syncCounters();
            return;
        }

        Object.values(favoriteItems).forEach(item => {
            const favoriteItemEl = document.createElement('div');
            favoriteItemEl.classList.add('favorite-item');
            
            // Проверка изображения
            const imageUrl = item.image ? item.image : 'default-image.jpg';

            favoriteItemEl.innerHTML = `
                <div class="product-info">
                    <img src="${imageUrl}" alt="${item.name}" class="product-image"> 
                </div>
                <div class="product-info-2">
                    <h3>${item.name}</h3>
                    <p class="item-price">${item.price} ₸</p>
                </div>
                <button class="remove-from-favorites" data-id="${item.id}">Удалить</button>
            `;
            favorites.appendChild(favoriteItemEl);
        });

        syncCounters();
    }

    // Функция для удаления товара из избранного
    function removeItemFromFavorites(id) {
        if (favoriteItems[id]) {
            delete favoriteItems[id];
            localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
            updateFavorites();
        }
    }

    // Обработчик клика на кнопку удаления из избранного
    favorites.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('remove-from-favorites')) {
            removeItemFromFavorites(id);
        }
    });

    // Обновляем список избранного при загрузке страницы
    updateFavorites();
});

// Функция для удаления товара из избранного
function removeItemFromFavorites(id) {
    if (favoriteItems[id]) {
        delete favoriteItems[id];
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        updateFavorites();
        updateFavoriteCounter(); // Обновляем счетчик избранного
    }
}