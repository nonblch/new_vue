const vue = Vue.createApp({});

const finderTemp = `<form class="header-form" action="#">

                    <input class="form-search" type="search" placeholder="Search for Item..." aria-label="Search">
                    <button type="button" class="but-search">
                        <span class="fas fa-search"></span>
                    </button>
                </form>`;

vue.component ('finder-comp', {
    template: finderTemp
});

vue.mount('#app');

const vue2 = Vue.createApp({});

const basketTemp = `<div class="basket-container" >
                <a class="basket-a" href="shopping_cart.html">
                    <img src="img/Forma_1.svg" alt="card">
                </a>
                <div class="basket-dropdown">

                    <p class="basket-total">
                        <span class="total-text">total</span>
                        <span class="total-text total-price">&#36;0</span>
                    </p>
                    <button class="basket-check" onclick="window.location.href = 'checkout.html';">Checkout</button>
                    <button class="basket-go" onclick="window.location.href = 'shopping_cart.html'">Go to cart</button>
                </div>
            </div>`;

vue2.component ('basket-comp', {
    template: basketTemp
});

vue2.mount('#app2');