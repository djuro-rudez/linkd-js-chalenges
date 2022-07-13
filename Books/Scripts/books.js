class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  //   get the number of copies of the book, from the excersise, but is't stupid and unnecessary :)
  /*     getAvailability() {
      if (this.numCopies === 0) {
        return "Out of stock";
      } else if (this.numCopies < 10) {
        return "Low stock";
      } else {
        return "In stock";
      }
    } */

  //sell the book(s)
  sell(numSold) {
    numSold = Math.abs(numSold);
    if (numSold <= this.numCopies) {
      this.numCopies -= numSold;
      console.log(`${numSold} copies sold`);
    } else {
      console.log(`Not enough copies available`);
      return;
    }
  }

  //add copies of the book to the inventory
  addToStock(numAdd) {
    numAdd = Math.abs(numAdd);
    this.numCopies += numAdd;
    console.log(`${numAdd} copies restocked`);
  }
}
export default Book;
