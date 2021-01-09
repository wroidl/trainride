const type = document.getElementById("type").innerHTML;
//document.body.innerHTML = type;
const articleList = [];

function addArticle(artist, title, album, date, _image, _url) {
  const article = {
    artist,
    title,
    album,
    date,
    _image,
    _url,
    alt: "album cover - " + album + " - by " + artist,
    get backgroundImage() {
      if (this._image.startsWith("http")) {
        return "url(" + this._image + ")";
      } else if (type === "root") {
        return "url(." + this._image + ")";
      } else if (type === "article") {
        return "url(.." + this._image + ")";
      }
    },

    get image() {
      if (this._image.startsWith("http")) {
        return this._image;
      } else if (type === "root") {
        return "." + this._image;
      } else if (type === "article") {
        return ".." + this._image;
      }
    },

    get url() {
      if (type === "root") {
        return "." + this._url;
      } else if (type === "article") {
        return ".." + this._url;
      }
    },
  };
  articleList.push(article);
}

addArticle(
  "Element of Crime",
  "Am Ende denk' ich immer nur an Dich",
  "Immer da wo Du bist, bin ich nie",
  "March 25th 2020",
  "/images/article_element_of_crime.jpg",
  "/articles/element_of_crime_01.html"
);

addArticle(
  "AnnenMayKantereit",
  "Wohin Du gehst",
  "Alles nix Konkretes",
  "March 25th 2020",
  "/images/article_annenmaykantereit.jpg",
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
  "/images/article_chuckamuck_cover.jpg",
  "/articles/chuckamuck_01.html"
);

addArticle(
  "Max Prosa",
  "Flügel",
  "Die Phantasie wird siegen",
  "June 8th 2020",
  "/images/article_prosa_01.jpg",
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

addArticle(
  "Isolation Berlin",
  "Alles grau",
  "Berliner Schule/Protopop",
  "January 9th 2021",
  "/images/article_isolation_berlin_alles_grau.jpg",
  "/articles/isolation-berlin-alles-grau.html"
);    





 const cardListElement = document.getElementById("card-list");
const reversedArticleList = articleList.reverse();


for (song of reversedArticleList){
  const newElement = document.createElement('div');
  newElement.className = 'card card-bc-home m-5 col-sm-4 col-xl-3 m-sm-3';
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