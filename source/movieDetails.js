import { fetchData } from './api.js'
export async function movieDetails() {
    const json = await fetchData();
    const movies = json.results
    console.log(movies);
    const movieContainer = document.getElementById('movie-template');
    movieContainer.innerHTML = '';
    const html = movies.map(movie => {
    return `
    <article class="movie">
    <h1>Detailpage almost works</h1>
    <a href="#${movie.id}"></a>
    </article>`
    })
        .join('')

    movieContainer.insertAdjacentHTML("afterbegin", html)
}