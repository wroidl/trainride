const articleList = [];

function addArticle(artist, title, album, date, image, url, related) {
  const article = {
    artist,
    title,
    album,
    date,
    image: ".." + image,
    url,
    alt: "album cover - " + album + " - by " + artist,
    related,
  };
  articleList.push(article);
}
function addData() {
  addArticle(
    "Element of Crime",
    "Am Ende denk' ich immer nur an Dich",
    "Immer da wo Du bist, bin ich nie",
    "March 25th 2020",
    "/images/article_element_of_crime.png",
    "/articles/element_of_crime_01.html",
    ["AnnenMayKantereit", "Gisbert zu Knyphausen"]
  );

  addArticle(
    "AnnenMayKantereit",
    "Wohin Du gehst",
    "Alles nix Konkretes",
    "March 25th 2020",
    "/images/article_annenmaykantereit.png",
    "/articles/annenmaykantereit_01.html"
  );

  addArticle(
    "Gisbert zu Knyphausen",
    "Sommertag",
    "Gisbert zu Knyphausen",
    "March 25th 2020",
    "/images/article_gisbert_Sommertag.jpg",
    "/articles/knyphausen_01.html"
  );

  addArticle(
    "Sophie Hunger",
    "Spaghetti mit Spinat",
    "Supermoon",
    "March 26th 2020",
    "/images/article_sophie_spaghetti_cover.jpg",
    "/articles/sophie_hunger_01.html"
  );

  addArticle(
    "Faber",
    "Alles Gute",
    "Sei ein Faber im Wind",
    "March 30th 2020",
    "/images/article_faber_alles_gute.jpg",
    "/articles/faber_01.html"
  );

  addArticle(
    "Chuckamuck",
    "20.000 Meilen",
    "Chuckamuck",
    "April 8th 2020",
    "/images/article_chuckamuck_cover.png",
    "/articles/chuckamuck_01.html"
  );

  addArticle(
    "Max Prosa",
    "Flügel",
    "Die Phantasie wird siegen",
    "June 8th 2020",
    "/images/article_prosa_01.png",
    "/articles/prosa_01.html"
  );

  addArticle(
    "Seiler und Speer",
    "Ham kummst",
    "Ham kummst",
    "August 30th 2020",
    "/images/article_seiler_und_speer.png",
    "/articles/seilerspeer_01.html"
  );

  addArticle(
    "Gisbert zu Knyphausen",
    "Kräne",
    "Hurra! Hurra! So nicht.",
    "November 15th 2020",
    "/images/article_gisbert_kraene.jpg",
    "/articles/knyphausen-kraene.html"
  );
}
addData();

const teaserList = document.getElementById("teaser-list");
const inputElement = document.getElementById("input-search");
const buttonElement = document.getElementById("btn-search");
buttonElement.addEventListener("click", handleSearch);

function handleSearch() {
  const searchString = inputElement.value.toLowerCase();
  const resultArray = articleList.filter(
    (article) =>
      article.artist.toLowerCase().includes(searchString) ||
      article.title.toLowerCase().includes(searchString)
  );
  renderTeaserItems(resultArray);
}

function renderTeaserItems(searchResult) {
  teaserList.innerHTML = "";

  for (song of searchResult) {
    const newElement = document.createElement("div");
    newElement.className = "teaser-element";
    newElement.innerHTML = `<img src="${song.image}" alt="" class="teaser-img">
  <div class="teaser-content">
      <h2>${song.title} by ${song.artist}</h2>
      <p>This is a Teaser-Text for the article, that will be displayed...</p>
  </div>`;
    teaserList.appendChild(newElement);
  }
}

renderTeaserItems(articleList);
