class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (typeof this.rating == 'undefined') {
            this.rating = 'pg'
        } }
    getPg(movies, rating) {
        let filteredMovies = []
        movies.forEach(Movie => {
            if (Movie.rating === rating) {
                filteredMovies.push(Movie)
            }
        });
        return filteredMovies;
    }
}
const movies = []
movies.push(new Movie('Master', '7green'),
    new Movie('Beast', '7green', '7'),
    new Movie('Beast', '7green', '7'),
    new Movie('Thuppaki', '7green'))
let movie1 = new Movie('Good will hunting', 'warner bros', '8')
console.log(movie1.getPg(movies, 'pg'));
let movie5 = new Movie('Casino Royale', 'Eon Productions', 'PG­13')
console.log(movie5);