import { fetchData } from './api.js'

const input = document.getElementById('find-movies');

input.addEventListener('input', search);

export async function search(event) {

    const json = await fetchData('popular');
    const movies = json.results
    const movieContainer = document.getElementById('movie-template');
    const html = movies.map(movie => {
        let searchInput = event.target.value;

        if (searchInput == movie.title) {
            console.log(movie)
        }

    });
};
