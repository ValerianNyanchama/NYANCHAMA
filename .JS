let cart = [];

function addToCart(itemName, price) {
  cart.push({ itemName, price });
  renderCart();
}

function renderCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.itemName} - $${item.price}`;
    cartItemsElement.appendChild(li);
  });
}

function placeOrder() {
  // Here you can send the cart data to the server/database for processing
  // For this example, we will just log the cart items to the console
  console.log(cart);
  alert('Your order has been placed!');
  cart = []; // Clear the cart after placing order
  renderCart(); // Update the cart display
}
