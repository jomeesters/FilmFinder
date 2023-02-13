const moviesUl = document.querySelector("#movieList");
const linkPart1 = ["https://www.imdb.com/title/"];

// Function to create new li's in ul in DOM

const addMoviesToDom = (array) => {
  array.map((movie) => {
    const newLi = document.createElement("li");
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    const aTag = document.createElement("a");
    const url = linkPart1.concat(movie.imdbID).join("");
    aTag.href = url;
    const divForLi = document.createElement("div");
    divForLi.className = "grid-item";
    newLi.appendChild(aTag);
    aTag.appendChild(moviePoster);
    moviesUl.appendChild(divForLi);
    divForLi.appendChild(newLi);
  });
};
addMoviesToDom(movies);


function clearUl() {
  while (moviesUl.firstChild) {
    moviesUl.removeChild(moviesUl.firstChild);
  }
}

//add eventlistener to radio buttons
const latestMovieButton = document.querySelector("#latestMoviesButton");
latestMovieButton.addEventListener("change", (e) => {
  const latestMovies = movies.filter((movie) => {
    return movie.year == "2014", movie.year > "2014";
  });
  clearUl();
  addMoviesToDom(latestMovies);
});

//Handle on change event with switch
const handleOnChangeEvent = (event) => {
  const choosenTitle = event.target.value;
  switch (choosenTitle) {
    case "avengers":
      const avengersMovies = movies.filter((movie) =>
        movie.title.includes("Avengers")
      );
      clearUl();
      addMoviesToDom(avengersMovies);
      break;
    case "xmen":
      const xmenMovies = movies.filter((movie) =>
        movie.title.includes("X-Men")
      );
      clearUl();
      addMoviesToDom(xmenMovies);
      break;
    case "princess":
      const princessMovies = movies.filter((movie) =>
        movie.title.includes("Princess")
      );
      clearUl();
      addMoviesToDom(princessMovies);
      break;
    case "batman":
      const batmanMovies = movies.filter((movie) =>
        movie.title.includes("Batman")
      );
      clearUl();
      addMoviesToDom(batmanMovies);
      break;
  }
};

// add eventlistener on buttons with same class and call handleOnChangeEvent 
document.addEventListener("DOMContentLoaded", function () {
  const titleButtons = document.querySelectorAll('input[class="titleButtons"]');
  const titleButton = titleButtons.forEach((titleButton) => {
    titleButton.addEventListener("change", handleOnChangeEvent);
  });
});

// search bar function
searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const searchedMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(value);
  });
  console.log(searchedMovies);
  clearUl();
  addMoviesToDom(searchedMovies);
});