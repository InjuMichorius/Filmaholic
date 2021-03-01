import { fetchData } from './api.js'
import { sort } from './sort.js';
const loader = document.getElementById('lds-spinner')

const alphabetical = document.querySelector('.sort');

    alphabetical.addEventListener('click', ()=> {
        movieOverview('Alpha')
    });

export async function movieOverview(sorting) {
    const json = await fetchData('popular');
    const movies = json.results

    const sortedMovies = sortMovies(sorting, movies);

    function sortMovies(sorting, movies) {
        if (sorting == 'none') {
            return movies
        } else if (sorting == 'Alpha') {
            return movies.sort((a, b) => {
                const nameA = a.title.toLowerCase()
                const nameB = b.title.toLowerCase()
                if(nameA < nameB) {
                    return -1
                } if(nameA > nameB) {
                    return 1
                }
                return 0

            })
        }
    }
    console.log(sortedMovies)
    const movieContainer = document.getElementById('movie-template');
    movieContainer.innerHTML = '';
    const html = sortedMovies.map(movie => {
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

    // loader.classList.toggle('hide');

    movieContainer.insertAdjacentHTML("afterbegin", html)
}