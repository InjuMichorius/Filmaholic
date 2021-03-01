import { fetchData } from './api.js'

const input = document.getElementById('find-movies');

input.addEventListener('keyup', search);

export async function search(event) {
    const json = await fetchData('popular');
    const movies = json.results

    input.addEventListener('keyup', (event => {
        const searchString = event.target.value.toLowerCase();
        const filteredMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchString);
        })
        console.log(filteredMovies)
        const movieContainer = document.getElementById('movie-template');
        movieContainer.innerHTML = '';
        const html = filteredMovies.map(movie => {
        return `
        <article class="movie">
        <a href="#${movie.id}">
        <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="Cover of ${movie.title}">
        <p class="movie-title">${movie.title}</p>
        <p>${movie.release_date}</p>
        <p>${movie.vote_average}</p>
        </a>
        </article>`
        }).join('')
    
        movieContainer.insertAdjacentHTML("afterbegin", html)
        

    }));


};

// import { fetchData } from './api.js'

// const input = document.getElementById('find-movies');

// input.addEventListener('input', search);

// export async function search(event) {

//     const json = await fetchData('popular');
//     const movies = json.results
//     const movieContainer = document.getElementById('movie-template');
//     const html = movies.map(movie => {
//         let searchInput = event.target.value;

//         if (searchInput == movie.title) {
//             console.log(movie)

//             movieContainer.innerHTML = '';

//         }

//     });
// };