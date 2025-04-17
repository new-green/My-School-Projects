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
            <p>Puan: ${p.rating} ${getStars(p.rating)}</p>
            <p>Açıklama: ${p.desc}</p>
            <p>Yorumlar: ${p.comment}</p>
        `;

        container.appendChild(item);
    });
});
