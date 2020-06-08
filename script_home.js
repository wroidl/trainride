
const type = document.getElementById("type").innerHTML;
//document.body.innerHTML = type;
const articleList = []

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
                return "url("+this._image + ")";
            } else if (type === "home") {
                return "url(." + this._image + ")";
            } else if (type === "article") {
                return "url(.." + this._image + ")";
            }
        },

        get image() {
            if (this._image.startsWith("http")) {
                return this._image;
            } else if (type === "home") {
                return "." + this._image;
            } else if (type === "article") {
                return ".." + this._image;
            }
        },

        get url() {
            if (type === "home") {
                return "." + this._url;
            } else if (type === "article") {
                return ".." + this._url
            }
        },
    };
    articleList.push(article);
};


addArticle("Element of Crime",
    "Am Ende denk' ich immer nur an Dich",
    "Immer da wo Du bist, bin ich nie",
    "March 25th 2020",
    "/images/article_element_of_crime.png",
    "/articles/element_of_crime_01.html");

addArticle("AnnenMayKantereit",
    "Wohin Du gehst",
    "Alles nix Konkretes",
    "March 25th 2020",
    "/images/article_annenmaykantereit.png",
    "/articles/annenmaykantereit_01.html");

addArticle("Gisbert zu Knyphausen",
    "Sommertag",
    "Gisbert zu Knyphausen",
    "March 25th 2020",
    "/images/article_gisbert_Sommertag.jpg",
    "/articles/knyphausen_01.html");

addArticle("Sophie Hunger",
    "Spaghetti mit Spinat",
    "Supermoon",
    "March 26th 2020",
    "/images/article_sophie_spaghetti_cover.jpg",
    "/articles/sophie_hunger_01.html");

addArticle("Faber",
    "Alles Gute",
    "Sei ein Faber im Wind",
    "March 30th 2020",
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Faber_live-Konzert_in_Cottbus_2017.jpg",
    "/articles/faber_01.html");

addArticle("Chuckamuck",
    "20.000 Meilen",
    "Chuckamuck",
    "April 8th 2020",
    "/images/article_chuckamuck_cover.png",
    "/articles/chuckamuck_01.html");

    addArticle("Max Prosa",
    "Flügel",
    "Die Phantasie wird siegen",
    "June 8th 2020",
    "/images/article_prosa_01.png",
    "/articles/prosa_01.html");

    /*//Test entry 
    addArticle("Artist",
    "Title",
    "Album",
    "April 8th 2020",
    "/images/about.jpg",
    "/index.html"); */


const teaser_link_01 = document.getElementById("teaser-link-01");
const teaser_img_01 = document.getElementById("teaser-img-01");
const teaser_title_01 = document.getElementById("teaser-title-01");
const teaser_artist_01 = document.getElementById("teaser-artist-01");
teaser_link_01.href = articleList[articleList.length-1].url
teaser_img_01.style.backgroundImage = articleList[articleList.length-1].backgroundImage;
teaser_title_01.innerHTML = articleList[articleList.length-1].title;
teaser_artist_01.innerHTML = articleList[articleList.length-1].artist;

const teaser_link_02 = document.getElementById("teaser-link-02");
const teaser_img_02 = document.getElementById("teaser-img-02");
const teaser_title_02 = document.getElementById("teaser-title-02");
const teaser_artist_02 = document.getElementById("teaser-artist-02");
teaser_link_02.href = articleList[articleList.length-2].url
teaser_img_02.style.backgroundImage = articleList[articleList.length-2].backgroundImage;
teaser_title_02.innerHTML = articleList[articleList.length-2].title;
teaser_artist_02.innerHTML = articleList[articleList.length-2].artist;

const teaser_link_03 = document.getElementById("teaser-link-03");
const teaser_img_03 = document.getElementById("teaser-img-03");
const teaser_title_03 = document.getElementById("teaser-title-03");
const teaser_artist_03 = document.getElementById("teaser-artist-03");
teaser_link_03.href = articleList[articleList.length-3].url
teaser_img_03.style.backgroundImage = articleList[articleList.length-3].backgroundImage;
teaser_title_03.innerHTML = articleList[articleList.length-3].title;
teaser_artist_03.innerHTML = articleList[articleList.length-3].artist;

const teaser_link_04 = document.getElementById("teaser-link-04");
const teaser_img_04 = document.getElementById("teaser-img-04");
const teaser_title_04 = document.getElementById("teaser-title-04");
const teaser_artist_04 = document.getElementById("teaser-artist-04");
teaser_link_04.href = articleList[articleList.length-4].url
teaser_img_04.style.backgroundImage = articleList[articleList.length-4].backgroundImage;
teaser_title_04.innerHTML = articleList[articleList.length-4].title;
teaser_artist_04.innerHTML = articleList[articleList.length-4].artist;

const teaser_link_05 = document.getElementById("teaser-link-05");
const teaser_img_05 = document.getElementById("teaser-img-05");
const teaser_title_05 = document.getElementById("teaser-title-05");
const teaser_artist_05 = document.getElementById("teaser-artist-05");
teaser_link_05.href = articleList[articleList.length-5].url
teaser_img_05.style.backgroundImage = articleList[articleList.length-5].backgroundImage;
teaser_title_05.innerHTML = articleList[articleList.length-5].title;
teaser_artist_05.innerHTML = articleList[articleList.length-5].artist;

const teaser_link_06 = document.getElementById("teaser-link-06");
const teaser_img_06 = document.getElementById("teaser-img-06");
const teaser_title_06 = document.getElementById("teaser-title-06");
const teaser_artist_06 = document.getElementById("teaser-artist-06");
teaser_link_06.href = articleList[articleList.length-6].url
teaser_img_06.style.backgroundImage = articleList[articleList.length-6].backgroundImage;
teaser_title_06.innerHTML = articleList[articleList.length-6].title;
teaser_artist_06.innerHTML = articleList[articleList.length-6].artist;

const teaser_link_07 = document.getElementById("teaser-link-07");
const teaser_img_07 = document.getElementById("teaser-img-07");
const teaser_title_07 = document.getElementById("teaser-title-07");
const teaser_artist_07 = document.getElementById("teaser-artist-07");
teaser_link_07.href = articleList[articleList.length-7].url
teaser_img_07.style.backgroundImage = articleList[articleList.length-7].backgroundImage;
teaser_title_07.innerHTML = articleList[articleList.length-7].title;
teaser_artist_07.innerHTML = articleList[articleList.length-7].artist;