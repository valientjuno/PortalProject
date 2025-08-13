let cardsList = document.querySelector(".cards");

let cards = [
  {
    title: "Jesse Doake Bio",
    url: "https://valientjuno.github.io/MY_FIRST_SITE",
  },
  {
    title: "Currents",
    url: " https://valientjuno.github.io/weather_news/",
  },
  {
    title: "JavaScript Game",
    url: "https://valientjuno.github.io/js_memoryGame/",
  },
];

function displayCards() {
  cardsList.innerHTML = "";

  cards.map((card) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="card-back">
          <a href="${card.url}" target="_blank">Website Project Link</a>
        </div>
      </div>
    `;

    cardsList.appendChild(cardElement);
  });
}
displayCards();

cards.push({
  title: "List Project ",
  url: "https://valientjuno.github.io/project_list/",
});
displayCards();
