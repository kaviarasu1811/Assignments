const moviesURL = "http://localhost:3000/movies";
const favouritesURL = "http://localhost:3000/favourites";

// Fetch Movies
function getMovies() {
    return fetch(moviesURL)
        .then(res => res.json())
        .then(data => {
            const moviesList = document.getElementById("moviesList");
            moviesList.innerHTML = "";
            data.forEach(movie => {
                const li = document.createElement("li");
                li.className = "list-group-item d-flex align-items-center movie-item";
                li.innerHTML = `
                    <img src="${movie.posterPath}" alt="${movie.title}">
                    <span class="flex-grow-1">${movie.title}</span>
                    <button class="btn btn-primary btn-sm" onclick="addFavourite(${movie.id})">Add to Favourites</button>
                `;
                moviesList.appendChild(li);
            });
            return data;
        })
        .catch(err => console.error("Error fetching movies:", err));
}

// Fetch Favourites
function getFavourites() {
    return fetch(favouritesURL)
        .then(res => res.json())
        .then(data => {
            const favList = document.getElementById("favouritesList");
            favList.innerHTML = "";
            data.forEach(movie => {
                const li = document.createElement("li");
                li.className = "list-group-item d-flex align-items-center movie-item";
                li.innerHTML = `
                    <img src="${movie.posterPath}" alt="${movie.title}">
                    <span>${movie.title}</span>
                `;
                favList.appendChild(li);
            });
            return data;
        })
        .catch(err => console.error("Error fetching favourites:", err));
}

// Add to Favourites
function addFavourite(id) {
    fetch(`${moviesURL}/${id}`)
        .then(res => res.json())
        .then(movie => {
            return fetch(favouritesURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(movie)
            });
        })
        .then(() => getFavourites())
        .catch(err => console.error("Error adding favourite:", err));
}

// Initial load
getMovies();
getFavourites();
