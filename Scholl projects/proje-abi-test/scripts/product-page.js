window.onload = () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        document.getElementById('product-image').src = `../products/images/${product.image}`;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₺${product.price.toFixed(2)}`;
        document.getElementById('product-brand').textContent = product.brand;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.body.innerHTML = "<p>Ürün bulunamadı.</p>";
    }
};
