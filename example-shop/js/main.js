// Symbol to store hidden product details
const productDetailsSymbol = Symbol('productDetails');

// List of products
const products = [
  { name: 'Laptop', price: 1200, [productDetailsSymbol]: { stock: 5, supplier: 'Tech Corp' } },
  { name: 'Smartphone', price: 800, [productDetailsSymbol]: { stock: 10, supplier: 'Mobile Ltd' } },
  { name: 'Headphones', price: 150, [productDetailsSymbol]: { stock: 25, supplier: 'AudioWorld' } },
];

// Reference to the product list in the DOM
const productList = document.getElementById('product-list');

// Render products in the UI
products.forEach((product) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button>Buy</button>
  `;

  // Attach an event listener to handle purchases
  const button = li.querySelector('button');
  button.addEventListener('click', () => handlePurchase(product));

  productList.appendChild(li);
});

// Handle product purchase
function handlePurchase(product) {
  const details = product[productDetailsSymbol];

  if (details.stock > 0) {
    details.stock -= 1;
    alert(`You bought a ${product.name}. Remaining stock: ${details.stock}`);
  } else {
    alert(`Sorry, ${product.name} is out of stock.`);
  }

  console.log(`Supplier: ${details.supplier}`);
}

// Display all products and their hidden details in the console
console.log('Product list with hidden details:');
products.forEach((product) => {
  console.log({
    name: product.name,
    price: product.price,
    stock: product[productDetailsSymbol].stock,
    supplier: product[productDetailsSymbol].supplier,
  });
});
