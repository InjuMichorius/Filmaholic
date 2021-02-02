function fetchData() {
    fetch("http://api.themoviedb.org/3/movie/popular?api_key=6b14c4c8bcc5ae16e8216d9385a1b3a9")
        .then(response => {
            if (!response.ok) {
                throw Error("URL not working")
            }
            return response.json();
        })
        .then(movies => {
            console.log(movies);
            const html = movies.results.map(naam => {
                return `
                <div class="movie">
                    <p>Title: ${naam.title}</p>
                    <p>Realease Date: ${naam.release_date}</p>
                    <p>Rating: ${naam.vote_average}</p>
                    <p>Overview: ${naam.overview}</p>
                </div>`
            })
            .join('')

            document.querySelector('#app').insertAdjacentHTML("afterbegin", html)

        })
        .catch(error => {
            console.log(error);
        });
}

fetchData()