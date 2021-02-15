import { fetchData } from './api.js'
export async function movieOverview() {
    const json = await fetchData();
    const data = json.results[0];
    console.log(data)
}