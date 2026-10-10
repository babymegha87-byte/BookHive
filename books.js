const books = [
 {
 id: 1,
 title: "Wings of Fire",
 author: "A.P.J. Abdul Kalam",
 category: "biography",
 price: 299,
 originalPrice: 499,
 rating: 4.8,
 reviews: 2341,
 image: "images/books/wings-of-fire.jpg",
 description: "Autobiography of India's beloved former president.",
 inStock: true
 },
 {
 id: 2,
 title: "The Alchemist",
 author: "Paulo Coelho",
 category: "fiction",
 price: 349,
 originalPrice: 499,
 rating: 4.7,
 reviews: 5012,
 image: "images/books/the-alchemist.jpg",
 description: "A magical story about pursuing your dreams.",
 inStock: true
 },
 {

 id: 3,
 title: "Atomic Habits",
 author: "James Clear",
 category: "self-help",
 price: 499,
 originalPrice: 799,
 rating: 4.9,
 reviews: 8420,
 image: "images/books/atomic-habits.jpg",
 description: "Tiny changes, remarkable results.",
 inStock: true
 },
 {
 id: 4,
 title: "Sapiens",
 author: "Yuval Noah Harari",
 category: "history",
 price: 599,
 originalPrice: 899,
 rating: 4.6,
 reviews: 12450,
 image: "images/books/sapiens.jpg",
 description: "A brief history of humankind.",
 inStock: true
 },
 {
 id: 5,
 title: "Rich Dad Poor Dad",
 author: "Robert Kiyosaki",
 category: "business",
 price: 350,
 originalPrice: 499,
 rating: 4.5,
 reviews: 6800,
 image: "images/books/rich-dad.jpg",
 description: "What the rich teach their kids about money.",
 inStock: true
 },
 {
 id: 6,
 title: "Five Point Someone",
 author: "Chetan Bhagat",
 category: "fiction",
 price: 199,
 originalPrice: 299,
 rating: 4.3,
 reviews: 9200,
 image: "images/books/five-point.jpg",
 description: "What not to do at IIT.",
 inStock: false
 },
 {
 id: 7,
 title: "The Power of Subconscious Mind",
 author: "Joseph Murphy",
 category: "self-help",
 price: 249,
 originalPrice: 399,
 rating: 4.6,
 reviews: 4100,
 image: "images/books/subconscious.jpg",
 description: "Unlock the power within you.",
 inStock: true
 },
 {
 id: 8,
 title: "Think and Grow Rich",
 author: "Napoleon Hill",
 category: "business",
 price: 299,
 originalPrice: 499,
 rating: 4.7,
 reviews: 7300,
 image: "images/books/think-grow.jpg",
 description: "The classic guide to success.",
 inStock: true
 }
];
console.log(`Loaded ${books.length} books`);
const titles = books.map(book => book.title);
console.log(titles);

const titlesWithPrices = books.map(book =>
 `${book.title} - ₹${book.price}`
);
console.log(titlesWithPrices);

const booksWithDiscount = books.map(book => ({
 ...book,
 discount: Math.round(((book.originalPrice - book.price) / book.originalPrice) 
* 100)
}));
const availableBooks = books.filter(book => book.inStock);
console.log(`${availableBooks.length} books in stock`);

const fictionBooks = books.filter(book => book.category === "fiction");

const cheapBooks = books.filter(book => book.price < 300);

const topRated = books.filter(book => book.rating >= 4.7);

const searchTerm = "atom";
const matching = books.filter(book =>
 book.title.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log("Search results:", matching);
const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
console.log("Total catalog value: ₹" + totalPrice);

const totalRating = books.reduce((sum, book) => sum + book.rating, 0);
const averageRating = totalRating / books.length;
console.log("Average rating:", averageRating.toFixed(1));
// Group by category
const byCategory = books.reduce((groups, book) => {
 if (!groups[book.category]) {
 groups[book.category] = [];
 }
 groups[book.category].push(book);
 return groups;
}, {});
console.log(byCategory);
const sortedByPriceHigh = [...books].sort((a, b) => b.price - a.price);

const sortedByRating = [...books].sort((a, b) => b.rating - a.rating);

const sortedByTitle = [...books].sort((a, b) =>
 a.title.localeCompare(b.title)
);
const wingsOfFire = books.find(book => book.id === 1);
console.log(wingsOfFire);

const index = books.findIndex(book => book.id === 5);
console.log("Found at index:", index);

const hasAtomicHabits = books.some(book => book.title === "Atomic Habits");
console.log(hasAtomicHabits); 

const allWellRated = books.every(book => book.rating > 4);
console.log(allWellRated);