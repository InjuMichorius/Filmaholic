import { fetchData } from './api.js'
export async function movieOverview() {
    const json = await fetchData('popular');
    const movies = json.results
    const movieContainer = document.getElementById('movie-template');
    movieContainer.innerHTML = '';
    const html = movies.map(movie => {
    return `
    <article class="movie">
    <a href="#${movie.id}">
    <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="Cover of ${movie.title}">
    <p class="movie-title">${movie.title}</p>
    <p>${movie.release_date}</p>
    <p>${movie.vote_average}</p>
    </a>
    </article>`
    })
        .join('')

    movieContainer.insertAdjacentHTML("afterbegin", html)
}