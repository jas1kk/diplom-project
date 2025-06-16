document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена. Проверяем localStorage...');

    const cartCounter = document.querySelector('.cart-counter');
    const favoriteCounter = document.querySelector('.favorite-counter');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const favoriteIcons = document.querySelectorAll('.favorite-icon i');
    const favoriteSvgs = document.querySelectorAll('.favorite-svg');

    let notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    }

    // Загружаем данные из localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || {};

    console.log('Cart Items:', cartItems);
    console.log('Favorite Items:', favoriteItems);

    // Функция для обновления счетчика корзины
    function updateCartCounter() {
        const totalItems = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
        cartCounter.textContent = totalItems;
    }

    // Функция для обновления счетчика избранного
    function updateFavoriteCounter() {
        favoriteCounter.textContent = Object.keys(favoriteItems).length;
    }

    // Функция для показа уведомлений
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = ` 
            <i class="fas fa-check icon-check circle-icon"></i> 
            <span>${message}</span> 
            <button class="close-btn">
                <i class="fas fa-times"></i>
            </button> 
            <div class="progress-bar"></div>
        `;

        notificationContainer.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('visible');
        }, 100);

        notification.querySelector('.close-btn').addEventListener('click', () => {
            closeNotification(notification);
        });

        setTimeout(() => {
            closeNotification(notification);
        }, 3000);
    }

    // Функция для закрытия уведомления
    function closeNotification(notification) {
        notification.classList.remove('visible');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }

    // Функция для добавления товара в корзину
    function addToCart(button) {
        const product = button.closest('.product-card');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseInt(product.dataset.price, 10);
        const imageElement = product.querySelector('.product-img');
        const image = imageElement ? imageElement.src : 'default-image.jpg';

        if (!cartItems[id]) {
            cartItems[id] = { id, name, price, quantity: 0, image };
        }
        cartItems[id].quantity++;

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Товар добавлен в корзину. Cart Items:', cartItems); // Логирование

        updateCartCounter();

        button.innerHTML = `Перейти в корзину`;
        button.classList.add('go-to-cart-btn');
        button.onclick = () => window.location.href = 'cart.html';

        showNotification('Товар добавлен в корзину');
    }

    // Функция для добавления товара в избранное
    function addToFavorites(icon) {
        const product = icon.closest('.product-card');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseInt(product.dataset.price, 10);
        const imageElement = product.querySelector('.product-img');
        const image = imageElement ? imageElement.src : 'default-image.jpg';

        if (!favoriteItems[id]) {
            favoriteItems[id] = { id, name, price, image };
            icon.style.color = 'rgb(223, 6, 19)';
            showNotification('Товар добавлен в избранное');
        } else {
            delete favoriteItems[id];
            icon.style.color = '';
        }

        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        console.log('Товар добавлен в избранное. Favorite Items:', favoriteItems); // Логирование

        updateFavoriteCounter();
    }

    function toggleFavorite(svg) {
        const product = svg.closest('.product-card');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseInt(product.dataset.price, 10);
        const imageElement = product.querySelector('.product-img');
        const image = imageElement ? imageElement.src : 'default-image.jpg';
    
        const innerPath = svg.querySelector('path:nth-child(1)'); // Внутренний слой (заливка)
        const outerPath = svg.querySelector('path:nth-child(2)'); // Контур
    
        if (!favoriteItems[id]) {
            favoriteItems[id] = { id, name, price, image };
    
            // Заливаем сердечко красным
            innerPath.setAttribute('fill', '#DF0613');
            innerPath.setAttribute('opacity', '0.3');
    
            // Контур остается неизменным, как в исходном SVG
            outerPath.setAttribute('fill', '#DF0613'); // Серый цвет, как в исходном SVG
            outerPath.setAttribute('stroke', 'none'); // Убираем обводку, если она есть
            outerPath.setAttribute('stroke-width', '0'); // Убираем толщину обводки
            outerPath.setAttribute('clip-rule', 'evenodd'); // Возвращаем clip-rule
            outerPath.setAttribute('fill-rule', 'evenodd'); // Возвращаем fill-rule
    
            showNotification('Товар добавлен в избранное');
        } else {
            delete favoriteItems[id];
    
            // Возвращаем в исходное состояние
            innerPath.setAttribute('fill', 'none');
            innerPath.setAttribute('opacity', '0');
    
            // Контур возвращаем в исходное состояние, как в index.html
            outerPath.setAttribute('fill', '#8E979F'); // Серый цвет, как в исходном SVG
            outerPath.setAttribute('stroke', 'none'); // Убираем обводку, если она есть
            outerPath.setAttribute('stroke-width', '0'); // Убираем толщину обводки
            outerPath.setAttribute('clip-rule', 'evenodd'); // Возвращаем clip-rule
            outerPath.setAttribute('fill-rule', 'evenodd'); // Возвращаем fill-rule
    
            showNotification('Товар удален из избранного');
        }
    
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        updateFavoriteCounter();
    }

    function updateButtonStates() {
        console.log('Обновление состояния кнопок и сердечек...');
    
        // Обновляем состояние кнопок "Добавить в корзину"
        addToCartBtns.forEach(button => {
            const product = button.closest('.product-card');
            const id = product.dataset.id;
    
            if (cartItems[id]?.quantity > 0) {
                button.innerHTML = `Перейти в корзину`;
                button.classList.add('go-to-cart-btn');
                button.onclick = () => window.location.href = 'cart.html';
            } else {
                button.innerHTML = `Добавить в корзину`;
                button.classList.remove('go-to-cart-btn');
                button.onclick = () => addToCart(button);
            }
        });
    
        // Обновляем состояние сердечек
        favoriteIcons.forEach(icon => {
            const product = icon.closest('.product-card');
            const id = product.dataset.id;
    
            if (favoriteItems[id]) {
                icon.style.color = 'rgb(223, 6, 19)';
                console.log(`Сердечко для товара ${id} окрашено в красный.`);
            } else {
                icon.style.color = '';
                console.log(`Сердечко для товара ${id} сброшено.`);
            }
        });
    
        // Обновляем состояние SVG
        favoriteSvgs.forEach(svg => {
            const product = svg.closest('.product-card');
            const id = product.dataset.id;
    
            const innerPath = svg.querySelector('path:nth-child(1)');
            const outerPath = svg.querySelector('path:nth-child(2)');
    
            if (innerPath && outerPath) {
                if (favoriteItems[id]) {
                    // Состояние "в избранном"
                    innerPath.setAttribute('fill', '#DF0613');
                    innerPath.setAttribute('opacity', '0.3');
    
                    // Контур остается как в исходном SVG
                    outerPath.setAttribute('fill', '#DF0613');
                    outerPath.setAttribute('stroke', 'none');
                    outerPath.setAttribute('stroke-width', '0');
                    outerPath.setAttribute('clip-rule', 'evenodd');
                    outerPath.setAttribute('fill-rule', 'evenodd');
                } else {
                    // Состояние "не в избранном"
                    innerPath.setAttribute('fill', 'none');
                    innerPath.setAttribute('opacity', '0');
    
                    // Контур возвращаем в исходное состояние
                    outerPath.setAttribute('fill', '#8E979F');
                    outerPath.setAttribute('stroke', 'none');
                    outerPath.setAttribute('stroke-width', '0');
                    outerPath.setAttribute('clip-rule', 'evenodd');
                    outerPath.setAttribute('fill-rule', 'evenodd');
                }
            }
        });
    }

    // Обновляем состояние кнопок и счетчиков при загрузке страницы
    updateButtonStates();
    updateCartCounter();
    updateFavoriteCounter();

    // Добавляем обработчики событий для кнопок "Добавить в корзину"
    addToCartBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('go-to-cart-btn')) {
                addToCart(button);
            }
        });
    });

    // Добавляем обработчики событий для иконок избранного
    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            addToFavorites(icon);
        });
    });

    // Добавляем обработчики событий для SVG
    favoriteSvgs.forEach(svg => {
        svg.addEventListener('click', () => {
            toggleFavorite(svg);
        });
    });
});
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');
let index = 0;

// Create dots
images.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function goToSlide(i) {
  index = i;
  slides.style.transform = `translateX(${-960 * index}px)`;
  updateDots();
}

function nextSlide() {
  index = (index + 1) % images.length;
  goToSlide(index);
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  goToSlide(index);
}

document.querySelector('.arrow-right').addEventListener('click', nextSlide);
document.querySelector('.arrow-left').addEventListener('click', prevSlide);

// Auto-slide
setInterval(nextSlide, 15000);

document.addEventListener('DOMContentLoaded', () => {
    const dealSlides = document.querySelector('.deal-slides');
    const dealCards = document.querySelectorAll('.deal-card');
    const dealDotsContainer = document.querySelector('.deal-dots');
    const dealArrowLeft = document.querySelector('.deal-arrow-left');
    const dealArrowRight = document.querySelector('.deal-arrow-right');

    let dealIndex = 0;

    // Создаем точки для слайдера
    dealCards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('deal-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToDealSlide(i));
        dealDotsContainer.appendChild(dot);
    });

    const dealDots = document.querySelectorAll('.deal-dot');

    function updateDealDots() {
        dealDots.forEach(dot => dot.classList.remove('active'));
        dealDots[dealIndex].classList.add('active');
    }

    function goToDealSlide(i) {
        dealIndex = i;
        dealSlides.style.transform = `translateX(${-100 * dealIndex}%)`;
        updateDealDots();
    }

    function nextDealSlide() {
        dealIndex = (dealIndex + 1) % dealCards.length;
        goToDealSlide(dealIndex);
    }

    function prevDealSlide() {
        dealIndex = (dealIndex - 1 + dealCards.length) % dealCards.length;
        goToDealSlide(dealIndex);
    }

    dealArrowLeft.addEventListener('click', prevDealSlide);
    dealArrowRight.addEventListener('click', nextDealSlide);

    // Автоматическое перелистывание слайдов
    setInterval(nextDealSlide, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    // Получаем все карточки товаров в слайдере
    const dealCards = document.querySelectorAll('.deal-card');

    // Получаем данные корзины и избранного из localStorage или создаем пустые объекты, если их нет
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || {};

    // Функция для обновления состояния иконки избранного при загрузке страницы
    function updateFavoriteIconState(card) {
        const favoriteIcon = card.querySelector('.deal-favorite-icon');
        const id = card.dataset.id;

        if (favoriteItems[id]) {
            // Если товар в избранном, меняем цвет сердечка на красный
            const innerPath = favoriteIcon.querySelector('path:nth-child(1)');
            const outerPath = favoriteIcon.querySelector('path:nth-child(2)');
            innerPath.setAttribute('fill', '#DF0613');
            innerPath.setAttribute('opacity', '0.3');
            outerPath.setAttribute('fill', '#DF0613');
        }
    }

    // Функция для обновления состояния кнопки "В корзину" при загрузке страницы
    function updateCartButtonState(card) {
        const addToCartBtn = card.querySelector('.add-to-cart-btn-deal');
        const id = card.dataset.id;

        if (cartItems[id]) {
            // Если товар уже в корзине, меняем текст кнопки на "Перейти в корзину"
            addToCartBtn.innerHTML = `Перейти в корзину`;
            addToCartBtn.classList.add('go-to-cart-btn');

            // Удаляем все старые обработчики события
            addToCartBtn.replaceWith(addToCartBtn.cloneNode(true));

            // Получаем обновленную кнопку
            const newAddToCartBtn = card.querySelector('.add-to-cart-btn-deal');

            // Добавляем новый обработчик для перехода в корзину
            newAddToCartBtn.addEventListener('click', () => {
                window.location.href = 'cart.html';
            });
        }
    }

    // Функция для добавления товара в корзину
    function addToCartHandler(card) {
        const addToCartBtn = card.querySelector('.add-to-cart-btn-deal');

        // Получаем данные товара
        const id = card.dataset.id; // ID товара
        const name = card.dataset.name; // Название товара
        const price = parseInt(card.dataset.price, 10); // Цена товара
        const imageElement = card.querySelector('.deal-img'); // Изображение товара
        const image = imageElement ? imageElement.src : 'default-image.jpg'; // URL изображения

        // Проверяем, есть ли товар уже в корзине
        if (!cartItems[id]) {
            // Если товара нет в корзине, добавляем его
            cartItems[id] = { id, name, price, quantity: 1, image };
        } else {
            // Если товар уже в корзине, увеличиваем количество
            cartItems[id].quantity++;
        }

        // Сохраняем обновленные данные в localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Обновляем счетчик корзины (если он есть на странице)
        const cartCounter = document.querySelector('.cart-counter');
        if (cartCounter) {
            const totalItems = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
            cartCounter.textContent = totalItems;
        }

        // Меняем текст кнопки на "Перейти в корзину"
        addToCartBtn.innerHTML = `Перейти в корзину`;
        addToCartBtn.classList.add('go-to-cart-btn');

        // Удаляем все старые обработчики события
        addToCartBtn.replaceWith(addToCartBtn.cloneNode(true));

        // Получаем обновленную кнопку
        const newAddToCartBtn = card.querySelector('.add-to-cart-btn-deal');

        // Добавляем новый обработчик для перехода в корзину
        newAddToCartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });

        // Показываем уведомление
        showNotification('Товар добавлен в корзину');
    }

    // Функция для добавления товара в избранное
    function addToFavoritesHandler(card) {
        const favoriteIcon = card.querySelector('.deal-favorite-icon');

        // Получаем данные товара
        const id = card.dataset.id; // ID товара
        const name = card.dataset.name; // Название товара
        const price = parseInt(card.dataset.price, 10); // Цена товара
        const imageElement = card.querySelector('.deal-img'); // Изображение товара
        const image = imageElement ? imageElement.src : 'default-image.jpg'; // URL изображения

        // Проверяем, есть ли товар уже в избранном
        if (!favoriteItems[id]) {
            // Если товара нет в избранном, добавляем его
            favoriteItems[id] = { id, name, price, image };

            // Изменяем цвет сердечка на красный
            const innerPath = favoriteIcon.querySelector('path:nth-child(1)');
            const outerPath = favoriteIcon.querySelector('path:nth-child(2)');
            innerPath.setAttribute('fill', '#DF0613');
            innerPath.setAttribute('opacity', '0.3');
            outerPath.setAttribute('fill', '#DF0613');

            // Показываем уведомление
            showNotification('Товар добавлен в избранное');
        } else {
            // Если товар уже в избранном, удаляем его
            delete favoriteItems[id];

            // Возвращаем цвет сердечка в исходное состояние
            const innerPath = favoriteIcon.querySelector('path:nth-child(1)');
            const outerPath = favoriteIcon.querySelector('path:nth-child(2)');
            innerPath.setAttribute('fill', 'none');
            innerPath.setAttribute('opacity', '0');
            outerPath.setAttribute('fill', '#8E979F');

            // Показываем уведомление
            showNotification('Товар удален из избранного');
        }

        // Сохраняем обновленные данные в localStorage
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

        // Обновляем счетчик избранного (если он есть на странице)
        const favoriteCounter = document.querySelector('.favorite-counter');
        if (favoriteCounter) {
            favoriteCounter.textContent = Object.keys(favoriteItems).length;
        }
    }

    // Добавляем обработчики для всех карточек товаров
    dealCards.forEach((card) => {
        const addToCartBtn = card.querySelector('.add-to-cart-btn-deal');
        const favoriteIcon = card.querySelector('.deal-favorite-icon');

        // Обновляем состояние кнопки и иконки избранного при загрузке страницы
        updateCartButtonState(card);
        updateFavoriteIconState(card);

        // Добавляем обработчик для кнопки "В корзину"
        addToCartBtn.addEventListener('click', () => addToCartHandler(card));

        // Добавляем обработчик для иконки избранного
        favoriteIcon.addEventListener('click', () => addToFavoritesHandler(card));
    });

    // Функция для показа уведомлений
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `
            <i class="fas fa-check icon-check circle-icon"></i>
            <span>${message}</span>
            <button class="close-btn">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Делает уведомление видимым
        setTimeout(() => {
            notification.classList.add('visible');
        }, 10);

        // Автоматическое скрытие уведомления через 3 секунды
        setTimeout(() => {
            notification.classList.add('closing');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);

        // Обработчик для кнопки закрытия уведомления
        const closeBtn = notification.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            notification.classList.add('closing');
            setTimeout(() => {
                notification.remove();
            }, 500);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const catalogItems = document.querySelectorAll('.catalog-item');
    const productCards = document.querySelectorAll('.product-card');

    catalogItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Сброс активных классов
            catalogItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const category = item.querySelector('span')?.innerText.trim();

            if (category === "Популярные") {
                // Показываем все карточки
                productCards.forEach(card => {
                    card.hidden = false;
                });
            } else if (category === "Смартфоны") {
                // Показываем только смартфоны
                productCards.forEach(card => {
                    if (card.dataset.category === "smartphones") {
                        card.hidden = false;
                    }
                });
            } else if (category === "Телевизоры") {
                productCards.forEach(card => {
                    if (card.dataset.category === "tv") {
                        card.hidden = false;
                    }
                });
                } else if (category === "Компьютеры") {
                productCards.forEach(card => {
                    if (card.dataset.category === "pc") {
                        card.hidden = false;
                    }
                });
                } else if (category === "Стиральные машины") {
                productCards.forEach(card => {
                    if (card.dataset.category === "stiralki") {
                        card.hidden = false;
                    }
                });
                } else if (category === "Холодильники") {
                productCards.forEach(card => {
                    if (card.dataset.category === "xolodelniki") {
                        card.hidden = false;
                    } else {
                        card.hidden = true;
                    }
                });
                // Прячем все (если нужно для других категорий)
                productCards.forEach(card => card.hidden = true);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.catalog-item[data-category]');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts(category) {
        productCards.forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Добавим активный класс на выбранную категорию
        categoryButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
    }

    // Обработчики клика по категориям
    categoryButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.dataset.category;
            filterProducts(category);
        });
    });

    // Запускаем показ "популярных" при загрузке страницы
    filterProducts('popular');
});
