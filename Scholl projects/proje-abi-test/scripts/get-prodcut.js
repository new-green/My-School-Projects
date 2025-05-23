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
        `;

        if (Array.isArray(p.types) && p.types.length > 0) {
            const select = document.createElement("select");
            select.className = "product-type-select";

            p.types.forEach(type => {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                select.appendChild(option);
            });

            item.appendChild(select);
        }

        const btn = document.createElement("button");
        btn.textContent = "Sepete Ekle";
        btn.className = "add-to-cart-btn";
        item.appendChild(btn);

        // Sepete Ekle
        btn.addEventListener("click", e => {
            e.stopPropagation(); // yönlenmeyi engelle
            const selectedType = item.querySelector(".product-type-select")?.value || "Varsayılan";
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(i => i.name === p.name && i.type === selectedType);
            if (existing) {
                existing.quantity = (existing.quantity || 1) + 1;
            } else {
                cart.push({ ...p, quantity: 1, type: selectedType });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`Ürün (${selectedType}) sepete eklendi!`);
        });

        // Sadece çekmeceye tıklanırsa yönlendir
        item.addEventListener("click", (e) => {
            if (e.target.classList.contains("add-to-cart-btn") || e.target.classList.contains("product-type-select")) {
                return; // butona veya select'e tıklanıyorsa yönlendirme yapma
            }

            localStorage.setItem('selectedProduct', JSON.stringify(p));
            window.location.href = 'alt-site/product.html';
        });

        container.appendChild(item);
    });
});
