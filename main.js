console.log("Welcome to BookHive! 🛒");
const SITE_NAME = "BookHive";
const FOUNDED_YEAR = 2026;
const PI = 3.14159;

let cartCount = 0;
let totalAmount = 0;
let currentUser = null;
// Print values
console.log(SITE_NAME);
console.log("Founded:", FOUNDED_YEAR);
console.log("Cart count:", cartCount);

cartCount = 3;
totalAmount = 1497;
console.log("New cart count:", cartCount);
console.log("Total amount: ₹" + totalAmount);
const bookTitle = "Wings of Fire";
const author = 'A.P.J. Abdul Kalam'; 
const description = `Bestseller since 1999`; 

const price = 299;
const discount = 0.20; 
const rating = 4.8;
const isInStock = true;
const isOnSale = false;

const couponCode = null;

let promoMessage; 

console.log(typeof bookTitle);
console.log(typeof price); 
console.log(typeof isInStock); 
console.log(typeof promoMessage); 
const message1 = "Hello, " + author + "! Your book '" + bookTitle + "' costs ₹" + 
price;

const message2 = `Hello, ${author}! Your book '${bookTitle}' costs ₹${price}`;
console.log(message1);
console.log(message2);

const productCard = `
 <div class="book-card">
 <h3>${bookTitle}</h3>
 <p>by ${author}</p>
 <p>₹${price}</p>
 </div>
`;
console.log(productCard);
const bookPrice = 299;
const quantity = 3;

const subtotal = bookPrice * quantity; 
const tax = subtotal * 0.05; 
const total = subtotal + tax; 
const discount = total * 0.10; 
const finalPrice = total - discount; 
console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);
console.log("After discount:", finalPrice);

console.log("Final:", finalPrice.toFixed(2)); 
// Math object functions
console.log(Math.round(4.7)); 
console.log(Math.ceil(4.2)); 
console.log(Math.floor(4.9)); 
console.log(Math.max(10, 20)); 
console.log(Math.min(10, 20)); 
console.log(Math.random());
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");
// 2. Read its current text
console.log("Current title:", heroTitle.textContent);
// 3. CHANGE the text
heroTitle.textContent = "Welcome to BookHive";
// Get current time and personalize
const currentHour = new Date().getHours();
let greeting;
if (currentHour < 12) {
 greeting = "Good Morning! 🛒";
} else if (currentHour < 17) {
 greeting = "Good Afternoon! 🛒";
} else {
 greeting = "Good Evening! 🛒";
}
heroSubtitle.textContent = `${greeting} Find your next great read.`;
const heroTitle = document.getElementById("hero-title");
// 2. By class (multiple)
const allBookCards = document.getElementsByClassName("book-card");
// 3. Modern way - querySelector (uses CSS selectors!)
const firstCard = document.querySelector(".book-card");
const titleByQuery = document.querySelector("#hero-title");
const allCardsQuery = document.querySelectorAll(".book-card");
console.log("Number of book cards:", allCardsQuery.length);
let cartCount = 0;
function updateCartCount() {
 const cartCountElement = document.getElementById("cart-count");
 if (cartCountElement) {
 cartCountElement.textContent = cartCount;
 }
}
// Test it - let's pretend the cart has 3 items
cartCount = 3;
updateCartCount();
function attachAddToCartListeners() {
 const buttons = document.querySelectorAll(".add-to-cart");
 buttons.forEach(button => {
 button.addEventListener("click", function() {
 // Get the book ID from the data-id attribute
 const bookId = parseInt(this.getAttribute("data-id"));
 addToCart(bookId);
 });
 });
}
// Call after rendering books
renderBooks(books);
attachAddToCartListeners();
function showLoader() {
 const container = document.getElementById("books-container");
 if (container) {
 container.innerHTML = '<div class="spinner"></div>';
 }
}
// Simulate loading delay (just for visual effect)
showLoader();
setTimeout(() => {
 renderBooks(books);
 attachAddToCartListeners();
}, 500);