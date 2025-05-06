const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const clearCartBtn = document.getElementById("clear-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Sepetiniz boş.</p>";
        totalPriceEl.textContent = "Toplam: ₺0";
        return;
    }

    cart.forEach((item, index) => {
        if (!item.quantity) item.quantity = 1;
        if (typeof item.price === "string") {
            item.price = parseFloat(item.price.replace(/[^\d.,]/g, "").replace(",", "."));
        }

        const card = document.createElement("div");
        card.className = "cart-item";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Birim Fiyat: ₺${item.price.toFixed(2)}</p>
                <p>Adet: 
                    <button class="decrease-qty" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-qty" data-index="${index}">+</button>
                </p>
                <button class="remove-item" data-index="${index}">Sil</button>
            </div>
        `;
        cartContainer.appendChild(card);

        total += item.price * item.quantity;
    });

    totalPriceEl.textContent = `Toplam: ₺${total.toFixed(2)}`;

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", e => {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        });
    });

    // Artır
    document.querySelectorAll(".increase-qty").forEach(button => {
        button.addEventListener("click", e => {
            const index = parseInt(e.target.dataset.index);
            cart[index].quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        });
    });

    document.querySelectorAll(".decrease-qty").forEach(button => {
        button.addEventListener("click", e => {
            const index = parseInt(e.target.dataset.index);
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        });
    });
}

clearCartBtn.addEventListener("click", () => {
    if (confirm("Sepeti tamamen silmek istiyor musunuz?")) {
        cart = [];
        localStorage.removeItem("cart");
        updateCartDisplay();
    }
});

updateCartDisplay();
