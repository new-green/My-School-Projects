function filterProducts() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('#product-list .product-card');
    products.forEach(product => {
        const name = product.querySelector('.product-name')?.textContent.toLowerCase();
        product.style.display = name?.includes(searchValue) ? '' : 'none';
    });
}

document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('searchButton').addEventListener('click', filterProducts);
