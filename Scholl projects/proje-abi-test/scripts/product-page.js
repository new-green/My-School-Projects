window.onload = () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        document.getElementById('product-image').src = `../products/images/${product.image}`;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₺${product.price.toFixed(2)}`;
        document.getElementById('product-brand').textContent = product.brand;
        document.getElementById('product-description').textContent = product.desc || "";
        document.getElementById('product-comments').textContent = product.comment || "";

        // Ürün türleri varsa select oluştur
        const typeContainer = document.getElementById("product-type-container");
        if (Array.isArray(product.types) && product.types.length > 0) {
            const select = document.createElement("select");
            select.id = "product-type-select";

            product.types.forEach(type => {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                select.appendChild(option);
            });

            typeContainer.innerHTML = ""; // Temizle
            typeContainer.appendChild(select);
        } else {
            typeContainer.innerHTML = ""; // Tür yoksa temizle
        }

    } else {
        document.body.innerHTML = "<p>Ürün bulunamadı.</p>";
    }
};

document.getElementById("add-to-cart").addEventListener("click", () => {
    const name = document.getElementById("product-name").textContent;
    const priceText = document.getElementById("product-price").textContent;
    const price = parseFloat(priceText.replace(/[^\d,]/g, "").replace(",", "."));
    const image = document.getElementById("product-image").src;
    const typeSelect = document.getElementById("product-type-select");
    const selectedType = typeSelect ? typeSelect.value : "Varsayılan";

    const product = { name, price, image, type: selectedType, quantity: 1 };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Aynı ürün ve tür varsa quantity arttır, yoksa ekle
    const existing = cart.find(i => i.name === name && i.type === selectedType);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Ürün (${selectedType}) sepete eklendi!`);
});
