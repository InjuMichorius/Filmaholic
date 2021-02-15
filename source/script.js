const movieContainer = document.getElementById('movie-template');

//Create movie detail page
function router() {
    routie('overview', function (id) {
        function getPopularMovies() {
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=6b14c4c8bcc5ae16e8216d9385a1b3a9")
                .then(response => {
                    if (!response.ok) {
                        throw Error("URL not working")
                    }
                    return response.json();
                })
                .then(movies => {
                    console.log(movies);
                    const html = movies.results.map(movie => {
                        return `
                        <article class="movie">
                            <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="Cover of ${movie.title}">
                            <p class="movie-title">${movie.title}</p>
                            <p>${movie.release_date}</p>
                            <p>${movie.vote_average}</p>
                            <a href="#${movie.id}">click me</a>
                        </article>`
                    })
                        .join('')

                    movieContainer.insertAdjacentHTML("afterbegin", html)

                })
                .catch(error => {
                    console.log(error);
                });
        }
        getPopularMovies()
    }),
        routie(':id', function (id) {
            console.log(id)
        });
}
router();