import { articleList } from "./songList.js";

const type = document.getElementById("type").innerHTML;

const cardListElement = document.getElementById("card-list");
const reversedArticleList = articleList.reverse();

for (let song of reversedArticleList) {
  const newElement = document.createElement("div");
  newElement.className = "card card-bc-home m-5 col-sm-4 col-xl-3 m-sm-3";
  newElement.innerHTML = `<a class="link-unstyled" href="${song.url}">
  <img class="card-img-top" src="${song.image}"
    alt="Card image cap">
  <div class="card-body">
    <p class="card-text font-weight-bold text-center">${song.title}</p>
    <p class="card-text text-center">${song.artist}</p>
  </div>
</a>`;
  cardListElement.appendChild(newElement);
}
