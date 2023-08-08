
let addBook = document.querySelector(".add-book");
let form = document.querySelector(".input-form");


let myLibrary = [];

function Book(title, author, pages, language, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.language = language
    this.read = read;
}

function render() {
    let addedBook = document.querySelector("#added-books");
    addedBook.innerHTML = ""

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookDetails = document.createElement("div");
        bookDetails.innerHTML = `
        <div class="book-card">

            <h3 class="book-title">Title : ${book.title}</h3>
            <div class="book-details">
                <h3 class="book-author">Author : ${book.author}</h3>
                <h4 class="book-pages">Pages : ${book.pages} Pages</h4>
                <h4 class="book-language">Languages : ${book.language}</h4>
                <h4 class="book-progress">Read : ${book.read ? 'Complete' : "Not Complete"}</h4>
            </div>
        </div>`;
        addedBook.appendChild(bookDetails);
        let bookProgress = document.querySelector(".book-progress")
        if (book.read == true) {
            bookProgress.style.backgroundColor = "green";
            
        } else {
            bookProgress.style.backgroundColor = "red";
           
        }

    }


}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let language = document.querySelector("#language").value;
    let read = document.querySelector(".tick").checked;
    let newBook = new Book(title, author, pages, language, read);
    myLibrary.push(newBook);
    render();
}

addBook.addEventListener("click", function () {
    let form = document.querySelector(".input-form");
    form.style.display = "flex";

})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary();
    form.style.display = "none";
    form.reset();


})