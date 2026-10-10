const booksContainer = document.getElementById("books-container");
// Function to create HTML for one book
function createBookCard(book) {
 return `
 <article class="book-card" data-id="${book.id}">
 <img src="${book.image}" alt="${book.title}" loading="lazy">
 <h3>${book.title}</h3>
 <p class="author">${book.author}</p>
 <p class="rating">⭐ ${book.rating} (${book.reviews} reviews)</p>
 <p class="price">
 ₹${book.price}
 <small><s>₹${book.originalPrice}</s></small>
 </p>
 <button
 class="add-to-cart"
 data-id="${book.id}"
 ${!book.inStock ? "disabled" : ""}
 >
 ${book.inStock ? "Add to Cart" : "Out of Stock"}
 </button>
 </article>
 `;
}
// Function to render all books to the page
function renderBooks(bookList) {
 if (!booksContainer) return;
 // map() each book to its HTML, then join all into one string
 const allHTML = bookList.map(book => createBookCard(book)).join("");
 // Replace the container's content
 booksContainer.innerHTML = allHTML;
}
renderBooks(books);
