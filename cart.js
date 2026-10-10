let cart = []; // Empty cart to start
// Load cart from localStorage if exists
const savedCart = localStorage.getItem("bookhive-cart");
if (savedCart) {
 cart = JSON.parse(savedCart);
}

function addToCart(bookId) {
 // Find the book in our database
 const book = books.find(b => b.id === bookId);
 if (!book) {
 alert("Book not found!");
 return;
 }
 if (!book.inStock) {
 alert("Sorry, this book is out of stock!");
 return;
 }
 // Check if already in cart
 const existingItem = cart.find(item => item.id === bookId);
 if (existingItem) {

 existingItem.quantity += 1;
 } else {
 // Add new item
 cart.push({
 id: book.id,
 title: book.title,
 author: book.author,
 price: book.price,
 image: book.image,
 quantity: 1
 });
 }
 // Save to localStorage
 saveCart();
 // Update the cart count in navbar
 updateCartCount();
 // Show feedback to user
 showNotification(`Added "${book.title}" to cart! 🛒`);
}
// ====================
// SAVE CART TO LOCALSTORAGE
// ====================
function saveCart() {
 localStorage.setItem("bookhive-cart", JSON.stringify(cart));
}
// ====================
// UPDATE CART COUNT IN NAVBAR
// ====================
function updateCartCount() {
 const cartCountElement = document.getElementById("cart-count");
 if (cartCountElement) {
 const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
 cartCountElement.textContent = totalQuantity;
 }
}
// ====================
// SHOW NOTIFICATION
// ====================
function showNotification(message) {
 // Create notification element
 const notification = document.createElement("div");
 notification.className = "notification";
 notification.textContent = message;
 document.body.appendChild(notification);
 // Remove after 3 seconds
 setTimeout(() => {
 notification.remove();
 }, 3000);
}
// Call on page load
updateCartCount();