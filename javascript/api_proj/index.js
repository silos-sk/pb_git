const apiKeyImdb = "k_q5h4dh46";

fetch(`https://imdb-api.com/en/API/ComingSoon/${apiKeyImdb}`).then((res) => {
  const jsonRes = res.json();
  jsonRes
    .then((json) => {
      const movie = json.items;
      // console.log(movie);
      // console.log(movie[0].title);
      // console.log(movie[0].image);
      for (let i = 0; i < 10; i++) {
        displayMovie(movie[i].title, movie[i].image, movie[i].releaseState);
      }  
    })
    .catch(() => {
      //enter code here
      console.log("Error");
    });
});

function displayMovie(item1, item2, item3) {
  const section = document.querySelector("#movies");
  const card = document.createElement("div");
  section.appendChild(card);
  card.classList.add("card");
  card.innerHTML += `<h2>${item1}</h2><br><img src="${item2}" alt="${item2}"><p><h3>Release Date:</h3> ${item3}</p>`;
}

const funcCreateCards = () => {

  let tempMovieData = JSON.parse(localStorage.getItem("MoviedataStored"));

  tempMovieData.slice(0, 10).map((movies) => {

    let tempCard = document.createElement("div");

    tempCard.classList.add("movieCard");

    let movIMG = document.createElement("img");

    movIMG.src = movies.image;

    let movInfo = document.createElement("p");

    movInfo.textContent = `${movies.title}\nRated: ${movies.imDbRating}`;

    tempCard.appendChild(movIMG);

    tempCard.appendChild(movInfo);

    document.querySelector("#movie-sect").appendChild(tempCard);

  });

};