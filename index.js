class book {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher
    }
}

const books = [];
const form = document.querySelector("#addBookForm")
const bookList = document.querySelector(".bookContainer")

form.addEventListener('submit', (event) => { 
    event.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const publisher = document.querySelector('.publisher').value;

    const newBook = new book(title, author, publisher);
    books.push(newBook); // Add the new book to the array

            // Create and display the new book element
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    
    bookElement.innerHTML = `
    <h3>${newBook.title}</h3>
    <p>Author: ${newBook.author}</p>
    <p>Publisher: ${newBook.publisher}</p>`;
    bookList.appendChild(bookElement);

            // Clear the form
    form.reset(); // Resets all form fields
        
});
