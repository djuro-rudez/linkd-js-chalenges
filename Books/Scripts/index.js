import Book from "./books.js";

let bookInstance = new Book("The Hobbit", "J.R.R. Tolkien", "123456789", 12);

let bookHTML = `
    <h3 id="showTitle">Book title: <b>${bookInstance.title}</b></h3>
    <p id="showAuthor">Author: ${bookInstance.author}</p>
    <p id="showISBN">ISBN: ${bookInstance.isbn}</p>
    <p id="showNum">Number of copies available:<span>${bookInstance.numCopies}</span></p>
`;

$("div#book").append(bookHTML);

$("#sellBtn").click(function () {
  bookInstance.sell(parseInt($("#sellInput").val(), 10));
  $("#showNum span").text(bookInstance.numCopies);
});

$("#restockBtn").click(function () {
  bookInstance.addToStock(parseInt($("#restockInput").val(), 10));
  $("#showNum span").text(bookInstance.numCopies);
});
