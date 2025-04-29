class Cart {
    constructor() {
        this.items = [];
        this.loadCart();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartUI();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
            this.updateCartUI();
        }
    }

    updateCartUI() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartCountElement = document.getElementById('cartCount');
        const cartTotalElement = document.getElementById('cartTotal');
        
        cartCountElement.textContent = `(${this.getTotalItems()})`;
        
        cartTotalElement.textContent = this.getTotalPrice();
        
        cartItemsContainer.innerHTML = '';
        
        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Sepetiniz boş</p>';
            return;
        }

        this.items.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price} TL</div>
                    <div class="cart-total">
                </div>
                <button class="cart-item-remove" onclick="cart.removeItem(${item.id})">×</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
}

const cart = new Cart();