const type = document.getElementById("type").innerHTML;

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

    //damit die relativen Pfade funktionieren... müsste eigentlich irgendwie anders auch besser gehen...
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
  "/images/article_element_of_crime.png",
  "/articles/element_of_crime_01.html"
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

/*  //Test entry 
 addArticle("Artist",
 "Title",
 "Album",
 "April 8th 2020",
 "/images/about.jpg",
 "/index.html");  */

//document.body.innerHTML = "test"
const teaserList = articleList.slice(0); //copy of articleList

if (type === "article") {
  let currentTitle = document.getElementById("title").innerHTML;
  //document.body.innerHTML=currentTitle;
  let currentArticle;
  let currentArticleIndex;

  //find current article in articleList
  articleList.forEach((item, index) => {
    if (item.title === currentTitle) {
      currentArticleIndex = index;
      currentArticle = item;
    }
  });
  //set header images
  let header_img_top = document.getElementById("header-img-top");
  if (header_img_top) {
    header_img_top.src = articleList[currentArticleIndex].image;
    header_img_top.alt = articleList[currentArticleIndex].alt;
  }
  let header_img_inline = document.getElementById("header-img-inline");
  if (header_img_inline) {
    header_img_inline.src = articleList[currentArticleIndex].image;
    header_img_inline.alt = articleList[currentArticleIndex].alt;
  }

  //set header info
  let article_title = document.getElementById("article-title");
  if (article_title) {
    article_title.innerHTML = articleList[currentArticleIndex].title;
  }
  let article_artist = document.getElementById("article-artist");
  if (article_artist) {
    article_artist.innerHTML = "by " + articleList[currentArticleIndex].artist;
  }
  let article_published = document.getElementById("article-published");
  if (article_published) {
    article_published.innerHTML =
      "published " + articleList[currentArticleIndex].date;
  }

  //remove current article from teaserList
  teaserList.splice(currentArticleIndex, 1);
}

//set inital teasers (last 3 items in the array)
let teaserArticleIndex_01 = teaserList.length - 1;
let teaserArticleIndex_02 = teaserList.length - 2;
let teaserArticleIndex_03 = teaserList.length - 3;

const teaser_img_01 = document.getElementById("teaser-img-01");
const teaser_link_01 = document.getElementById("teaser-link-01");
const teaser_title_01 = document.getElementById("teaser-title-01");
const teaser_artist_01 = document.getElementById("teaser-artist-01");
const teaser_img_02 = document.getElementById("teaser-img-02");
const teaser_link_02 = document.getElementById("teaser-link-02");
const teaser_title_02 = document.getElementById("teaser-title-02");
const teaser_artist_02 = document.getElementById("teaser-artist-02");
const teaser_img_03 = document.getElementById("teaser-img-03");
const teaser_link_03 = document.getElementById("teaser-link-03");
const teaser_title_03 = document.getElementById("teaser-title-03");
const teaser_artist_03 = document.getElementById("teaser-artist-03");
//const button_left = document.getElementById("buttonLeft");
//const button_right = document.getElementById("buttonRight");

function updateTeaser() {
  teaser_img_01.src = teaserList[teaserArticleIndex_01].image;
  teaser_link_01.href = teaserList[teaserArticleIndex_01].url;
  teaser_title_01.innerHTML = teaserList[teaserArticleIndex_01].title;
  teaser_artist_01.innerHTML = teaserList[teaserArticleIndex_01].artist;
  teaser_img_02.src = teaserList[teaserArticleIndex_02].image;
  teaser_link_02.href = teaserList[teaserArticleIndex_02].url;
  teaser_title_02.innerHTML = teaserList[teaserArticleIndex_02].title;
  teaser_artist_02.innerHTML = teaserList[teaserArticleIndex_02].artist;
  teaser_img_03.src = teaserList[teaserArticleIndex_03].image;
  teaser_link_03.href = teaserList[teaserArticleIndex_03].url;
  teaser_title_03.innerHTML = teaserList[teaserArticleIndex_03].title;
  teaser_artist_03.innerHTML = teaserList[teaserArticleIndex_03].artist;
  /* if (teaserArticleIndex_01 == teaserList.length - 1) {
    button_left.style.visibility = "hidden";
  } else {
    button_left.style.visibility = "";
  }

  if (teaserArticleIndex_03 == 0) {
    button_right.style.visibility = "hidden";
  } else {
    button_right.style.visibility = "";
  } */
}

function teaserShiftLeft() {
  if (teaserArticleIndex_01 < teaserList.length - 1) {
    teaserArticleIndex_01++;
    teaserArticleIndex_02++;
    teaserArticleIndex_03++;
    updateTeaser();
  }
}

function teaserShiftRight() {
  if (teaserArticleIndex_03 > 0) {
    teaserArticleIndex_03--;
    teaserArticleIndex_02--;
    teaserArticleIndex_01--;
    updateTeaser();
  }
}

updateTeaser();
//button_left.onclick = teaserShiftLeft;
//button_right.onclick = teaserShiftRight;

//document.body.innerHTML = type;
