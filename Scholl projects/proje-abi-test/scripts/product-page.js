window.onload = () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        document.getElementById('product-image').src = `../products/images/${product.image}`;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₺${product.price.toFixed(2)}`;
        document.getElementById('product-brand').textContent = product.brand;
        document.getElementById('product-description').textContent = product.desc;
        document.getElementById('product-comments').textContent = product.comment;
    } else {
        document.body.innerHTML = "<p>Ürün bulunamadı.</p>";
    }
};

document.getElementById("add-to-cart").addEventListener("click", () => {
    const product = {
        name: document.getElementById("product-name").textContent,
        price: document.getElementById("product-price").textContent,
        image: document.getElementById("product-image").src
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Ürün sepete eklendi!");
});
