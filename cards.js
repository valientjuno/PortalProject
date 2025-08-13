let cardsList = document.querySelector(".cards");

let cards = [
  { title: "Bio", url: "https://valientjuno.github.io/MY_FIRST_SITE" },
  { title: "HTML Project", url: "https://example.com/html" },
  { title: "JavaScript Game", url: "https://example.com/game" },
];

function displayCards() {
  cardsList.innerHTML = "";

  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="card-back">
          <a href="${card.url}" target="_blank">Project Link</a>
        </div>
      </div>
    `;

    cardsList.appendChild(cardElement);
  });
}
isplayCards();

cards.push({
  title: "New Cool Project",
  url: "https://example.com/new-project",
});
displayCards();
