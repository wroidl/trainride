const type = document.getElementById("type").innerHTML;
//document.body.innerHTML = type;
const articleList = [];

function addArticle(artist, title, album, _date, _image, _url) {
  const article = {
    artist,
    title,
    album,
    _date,
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
  articleList.push(article);
}

addArticle(
  "Element of Crime",
  "Am Ende denk' ich immer nur an Dich",
  "Immer da wo Du bist, bin ich nie",
  new Date(2020, 2, 23),
  "/images/article_element_of_crime.jpg",
  "/articles/element-of-crime-am-ende-denk-ich-immer-nur-an-dich.html"
);

addArticle(
  "AnnenMayKantereit",
  "Wohin Du gehst",
  "Alles nix Konkretes",
  new Date(2020, 2, 24),
  "/images/article_annenmaykantereit.jpg",
  "/articles/annenmaykantereit-wohin-du-gehst.html"
);

addArticle(
  "Gisbert zu Knyphausen",
  "Sommertag",
  "Gisbert zu Knyphausen",
  new Date(2020, 2, 25),
  "/images/article_gisbert_Sommertag.jpg",
  "/articles/gisbert-zu-knyphausen-sommertag.html"
);

addArticle(
  "Sophie Hunger",
  "Spaghetti mit Spinat",
  "Supermoon",
  new Date(2020, 2, 26),
  "/images/article_sophie_spaghetti_cover.jpg",
  "/articles/sophie-hunger-spaghetti-mit-spinat.html"
);

addArticle(
  "Faber",
  "Alles Gute",
  "Sei ein Faber im Wind",
  new Date(2020, 2, 30),
  "/images/article_faber_alles_gute.jpg",
  "/articles/faber-alles-gute.html"
);

addArticle(
  "Chuckamuck",
  "20.000 Meilen",
  "Chuckamuck",
  new Date(2020, 3, 8),
  "/images/article_chuckamuck_cover.jpg",
  "/articles/chuckamuck-20000-meilen.html"
);

addArticle(
  "Max Prosa",
  "Flügel",
  "Die Phantasie wird siegen",
  new Date(2020, 5, 8),
  "/images/article_prosa_01.jpg",
  "/articles/max-prosa-fluegel.html"
);

addArticle(
  "Seiler und Speer",
  "Ham kummst",
  "Ham kummst",
  new Date(2020, 7, 30),
  "/images/article_seiler_und_speer.png",
  "/articles/seiler-und-speer-ham-kummst.html"
);

addArticle(
  "Gisbert zu Knyphausen",
  "Kräne",
  "Hurra! Hurra! So nicht.",
  new Date(2020, 10, 15),
  "/images/article_gisbert_kraene.jpg",
  "/articles/gisbert-zu-knyphausen-kraene.html"
);

addArticle(
  "Isolation Berlin",
  "Alles grau",
  "Berliner Schule/Protopop",
  new Date(2021, 0, 9),
  "/images/article_isolation_berlin_alles_grau.jpg",
  "/articles/isolation-berlin-alles-grau.html"
);

const cardListElement = document.getElementById("card-list");
const reversedArticleList = articleList.reverse();

for (song of reversedArticleList) {
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
