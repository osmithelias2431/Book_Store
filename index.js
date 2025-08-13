// Add book to list
class Book {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher
    }
}

const books = [];
const form = document.querySelector("#addBookForm")
const bookList = document.querySelector(".bookContainer")

// Handle form submission
form.addEventListener('submit', (event) => { 
    event.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const publisher = document.querySelector('.publisher').value;

    const newBook = new Book(title, author, publisher);
    books.push(newBook); // Add the new book to the array

    // Create and display the new book element
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');

    bookElement.innerHTML = `
    <h3>${newBook.title}</h3>
    <p>By: ${newBook.author}</p>
    <p>Publisher: ${newBook.publisher}</p>`;

    // Create and append delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    bookElement.appendChild(deleteButton);
    
    bookList.prepend(bookElement);

    // Clear the form
    form.reset(); // Resets all form fields
        
});

// Display a single book in the list
function displayBook(book) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>By: ${book.author}</p>
        <p>Publisher: ${book.publisher}</p>`;

// Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    bookElement.appendChild(deleteButton);

    bookList.prepend(bookElement);
}

// Fetch and display all books from API
const api = 'https://bookstore-api-six.vercel.app/api/books?amount=100'; 

async function fetchBooks() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        bookList.innerHTML = ""; // Clear the list before displaying
        data.forEach(item => {
            const newBook = new Book(item.title, item.author, item.publisher);
            books.push(newBook);
            displayBook(newBook);
        });
    } catch (error) {
        console.log("Error fetching books:", error);
    }
}
// Call the function to fetch and display books
fetchBooks();

// Handle delete button click
const button = document.querySelector('.delete-button');
function handleDelete(event) {
    if (event.target.classList.contains('delete-button')) {
        const bookItem = event.target.parentElement;
        bookList.removeChild(bookItem);
    }
}
bookList.addEventListener('click', handleDelete);