const articleListAll = [];
let articleListDisplayed = [];

function addArticle(artist, title, album, _date, image, url, related) {
  const article = {
    artist,
    title,
    album,
    _date,
    image: ".." + image,
    url,
    alt: "album cover - " + album + " - by " + artist,
    related,

    get date() {
      let nth = "th";
      day = _date.getDate();
      if (day === 1 || day === 21 || day === 31) {
        nth = "st";
      } else if (day === 2 || day === 22) {
        nth = "nd";
      } else if (day === 3 || day === 23) {
        nth = "rd";
      }
      return `${day}${nth} ${_date.toLocaleString("en", {
        month: "long",
      })} ${_date.getFullYear()}`;
    },
  };
  articleListAll.push(article);
}

function addData() {
  addArticle(
    "Element of Crime",
    "Am Ende denk' ich immer nur an Dich",
    "Immer da wo Du bist, bin ich nie",
    new Date(2020, 2, 23),
    "/images/article_element_of_crime.png",
    "/articles/element_of_crime_01.html",
    ["AnnenMayKantereit", "Gisbert zu Knyphausen"]
  );

  addArticle(
    "AnnenMayKantereit",
    "Wohin Du gehst",
    "Alles nix Konkretes",
    new Date(2020, 2, 24),
    "/images/article_annenmaykantereit.png",
    "/articles/annenmaykantereit_01.html"
  );

  addArticle(
    "Gisbert zu Knyphausen",
    "Sommertag",
    "Gisbert zu Knyphausen",
    new Date(2020, 2, 25),
    "/images/article_gisbert_Sommertag.jpg",
    "/articles/knyphausen_01.html"
  );

  addArticle(
    "Sophie Hunger",
    "Spaghetti mit Spinat",
    "Supermoon",
    new Date(2020, 2, 26),
    "/images/article_sophie_spaghetti_cover.jpg",
    "/articles/sophie_hunger_01.html"
  );

  addArticle(
    "Faber",
    "Alles Gute",
    "Sei ein Faber im Wind",
    new Date(2020, 2, 30),
    "/images/article_faber_alles_gute.jpg",
    "/articles/faber_01.html"
  );

  addArticle(
    "Chuckamuck",
    "20.000 Meilen",
    "Chuckamuck",
    new Date(2020, 3, 8),
    "/images/article_chuckamuck_cover.png",
    "/articles/chuckamuck_01.html"
  );

  addArticle(
    "Max Prosa",
    "Flügel",
    "Die Phantasie wird siegen",
    new Date(2020, 5, 8),
    "/images/article_prosa_01.png",
    "/articles/prosa_01.html"
  );

  addArticle(
    "Seiler und Speer",
    "Ham kummst",
    "Ham kummst",
    new Date(2020, 7, 30),
    "/images/article_seiler_und_speer.png",
    "/articles/seilerspeer_01.html"
  );

  addArticle(
    "Gisbert zu Knyphausen",
    "Kräne",
    "Hurra! Hurra! So nicht.",
    new Date(2020, 10, 15),
    "/images/article_gisbert_kraene.jpg",
    "/articles/knyphausen-kraene.html"
  );
}

function handleSearchKey(event) {
  if (event.key === "Enter") handleSearch();
}

function handleSearch() {
  const searchString = inputElement.value.toLowerCase();
  articleListDisplayed = articleListAll.filter(
    (article) =>
      article.artist.toLowerCase().includes(searchString) ||
      article.title.toLowerCase().includes(searchString)
  );
  renderTeaserItems(articleListDisplayed, true);
  handleSort(null, sortElement.value);
}

function renderTeaserItems(searchResult, search) {
  teaserList.innerHTML = "";

  for (song of searchResult) {
    const newElement = document.createElement("div");
    newElement.className = "teaser-element";
    newElement.innerHTML = `<img src="${song.image}" alt="" class="teaser-img">
  <div class="teaser-content">
      <h2>${song.title} by ${song.artist}</h2>
      <p>published ${song.date}</p>
      <p>This is a Teaser-Text for the article, that will be displayed...</p>
  </div>`;
    teaserList.appendChild(newElement);
  }
  if (search) {
    const newElement = document.createElement("div");
    newElement.className = "search-summary";
    newElement.innerHTML = `<p>${searchResult.length} matches found</p>`;
    teaserList.prepend(newElement);
  }
}

function handleSort(event, sortMode) {
  if (event) sortMode = event.target.value;
  //console.log(`handleSort with ${sortMode}`)
  if (sortMode === "dateRecent") {
    articleListDisplayed.sort((a, b) => b._date - a._date);
  } else if (sortMode === "dateOldest") {
    articleListDisplayed.sort((a, b) => a._date - b._date);
  } else if (sortMode === "titleAZ") {
    articleListDisplayed.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortMode === "titleZA") {
    articleListDisplayed.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortMode === "artistAZ") {
    articleListDisplayed.sort((a, b) => {
      if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
      if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortMode === "artistZA") {
    articleListDisplayed.sort((a, b) => {
      if (a.artist.toLowerCase() > b.artist.toLowerCase()) return -1;
      if (a.artist.toLowerCase() < b.artist.toLowerCase()) return 1;
      return 0;
    });
  }

  renderTeaserItems(articleListDisplayed);
}

const teaserList = document.getElementById("teaser-list");
const inputElement = document.getElementById("search-input");
const buttonElement = document.getElementById("search-icon");
buttonElement.addEventListener("click", handleSearch);
inputElement.addEventListener("keyup", handleSearchKey);

const sortElement = document.getElementById("sort");
sortElement.addEventListener("change", handleSort);

addData();
articleListDisplayed = articleListAll;
handleSort(null, "dateRecent");
renderTeaserItems(articleListDisplayed);
