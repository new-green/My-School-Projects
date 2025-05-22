document.addEventListener("DOMContentLoaded", () => {
    function getStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        let starsHTML = '';
    
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '🌟';
        }
        if (halfStar) {
            starsHTML += '⭐';
        }
        return starsHTML;
    }

    const container = document.getElementById("product-list");
    if (!container || typeof products === "undefined") return;

    products.forEach(p => {
        const item = document.createElement("div");
        item.className = "product";

        item.innerHTML = `
            <img src="./products/images/${p.image}" alt="${p.name}" width="150">
            <h3>${p.name}</h3>
            <p>Fiyat: ₺${p.price.toFixed(2)}</p>
            <p>Marka: ${p.brand}</p>
            <p>Puan: ${getStars(p.rating)}</p>
            <button id="add-to-cart" class="cart-button">Sepete Ekle</button>
        `;

        // Tıklama event'i ekleyip ürünü localStorage'a kaydedip product.html'e yönlendir
        item.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(p));
            window.location.href = 'alt-site/product.html';
        });

        container.appendChild(item);
    });
});
