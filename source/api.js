export async function fetchData() {
    // const base_url = 'https://api.themoviedb.org/3/movie';
    // const endpoint = '/popular?';
    // const api_key = 'api_key=6b14c4c8bcc5ae16e8216d9385a1b3a9';

    const dataset = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6b14c4c8bcc5ae16e8216d9385a1b3a9');
    const json = await dataset.json();
    
    return json
}