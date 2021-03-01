import { fetchData } from './api.js'

const input = document.getElementById('find-movies');

input.addEventListener('input', search);

export async function search(event) {
    
    const json = await fetchData('popular');
    const movies = json.results
    const html = movies.map(movie => {
        return `${movie.title}`
    });

    console.log(html)


    let searchInput = event.target.value;
    console.log(searchInput);



};
