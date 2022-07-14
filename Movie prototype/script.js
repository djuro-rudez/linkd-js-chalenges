class Movie {
  constructor(title, genre, director, releaseYear, rating) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  //this method can be extracted from class, and added to prototype (commented part)
  getOverview() {
    return `${this.title} is a ${this.genre} movie directed by ${this.director} released in ${this.releaseYear} with a rating of ${this.rating}`;
  }
}

/* Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} movie, directed by ${this.director} was released in ${this.releaseYear}.
    it has received rating of ${this.rating}`;
}; */

const Batman = new Movie("Batman", "action", "Christopher Nolan", 2008, 8.3);
const Spiderman = new Movie("Spiderman", "action", "Sam Raimi", 2010, 7.8);

console.log(Batman.getOverview());

// console.log(Batman.getOverview());
