
const accessKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgwZmRkMjExNDBmYjI5YTA5ZTk5NTMxYzMwZDQ0YiIsInN1YiI6IjY1Y2E1MzcxYjZjZmYxMDE4NWE4OGRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJWG2rwuCA2FzycBlXtW8HD-_ILid8Hdsc3aAjVzkGw";
// const apiBaseUrl = "https://api.themoviedb.org/3";
const apiBaseUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${accessKey}`
const moviesContainer = document.getElementById("movies");


async function fetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessKey}`
        }
    };


    fetch(`${apiBaseUrl}/discover/movie`, options)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(media => {
                console.log(media);
                const movieCard = createMovieCard(media);
                moviesContainer.appendChild(movieCard);
            });
        })
        .catch(err => console.error(err));
}

function createMovieCard(media) {
    const { title, name, backdrop_path } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
    <div class = "title">${title || name}</div>
    
    `;
    return movieCard;

}

fetchMovies();