import { fetchData } from './api.js'
export async function movieDetails(id) {
    const json = await fetchData(id);
    console.log(id);
    const movie = json
    const movieContainer = document.getElementById('movie-template');
    movieContainer.innerHTML = '';
    const html = `
    <article class="movieDetails">
    <a href="#${movie.id}">${movie.id}</a>
    </article>`

    movieContainer.insertAdjacentHTML("afterbegin", html)
}