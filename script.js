let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(model, price) {
    cart.push({ model: model, price: price });
    alert(model + " telah ditambahkan ke keranjang.");
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.model} - Rp ${item.price.toLocaleString('id-ID')}</p>
                <button onclick="removeFromCart(${index})">Hapus</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price;
        });

        totalPriceContainer.innerHTML = `
            <h3>Total Harga: Rp ${total.toLocaleString('id-ID')}</h3>
        `;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function buyNow(model, price) {
    localStorage.setItem('buyNow', JSON.stringify({ model: model, price: price }));
    window.location.href = 'checkout.html';
}

window.onload = updateCart;
