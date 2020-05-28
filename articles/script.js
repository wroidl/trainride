
 const articleList = []

function addArticle(artist, title, album, date, image, url){
    const article = {
        artist,
        title,
        date,
        image,
        url,
        album,
        teaser_image: "url("+image+")",
        alt: "album cover - "+album+" - by "+artist,
    };
    articleList.push(article);
};

addArticle("Element of Crime", 
            "Am Ende denk' ich immer nur an Dich",
            "Immer da wo Du bist, bin ich nie", 
            "March 25th 2020", 
            "../images/article_element_of_crime.png",
            "../articles/element_of_crime_01.html");

addArticle("AnnenMayKantereit", 
            "Wohin Du gehst", 
            "Alles nix Konkretes",
            "March 25th 2020", 
            "../images/article_annenmaykantereit.png",
            "../articles/annenmaykantereit_01.html");

addArticle("Gisbert zu Knyphausen", 
            "Sommertag", 
            "Gisbert zu Knyphausen",
            "March 25th 2020", 
            "../images/article_gisbert_Sommertag.jpg",
            "../articles/knyphausen_01.html");

addArticle("Sophie Hunger", 
            "Spaghetti mit Spinat", 
            "Supermoon",
            "March 26th 2020", 
            "../images/article_sophie_spaghetti_cover.jpg",
            "../articles/sophie_hunger_01.html");

addArticle("Faber", 
            "Alles Gute", 
            "Sei ein Faber im Wind",
            "March 30th 2020", 
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/Faber_live-Konzert_in_Cottbus_2017.jpg",
            "../articles/faber_01.html");

addArticle("Chuckamuck", 
            "20.000 Meilen", 
            "Chuckamuck",
            "April 8th 2020", 
            "../images/article_chuckamuck_cover.png",
            "../articles/chuckamuck_01.html");


let currentTitle = document.getElementById("title").innerHTML;
//document.body.innerHTML=currentTitle;
let currentArticle;
let currentArticleIndex;

articleList.forEach((item, index) => {
    if (item.title === currentTitle){
        currentArticleIndex = index;
        currentArticle = item;
    };
});
//document.body.innerHTML = currentArticle.artist;

let teaserArticleIndex_01;
let teaserArticleIndex_02;
let teaserArticleIndex_03;

if (currentArticleIndex == articleList.length-3){
    teaserArticleIndex_01 = articleList.length-1;
    teaserArticleIndex_02 = articleList.length-2;
    teaserArticleIndex_03 = articleList.length-4;
} else if (currentArticleIndex == articleList.length-2){
    teaserArticleIndex_01 = articleList.length-1;
    teaserArticleIndex_02 = articleList.length-3;
    teaserArticleIndex_03 = articleList.length-4;
}else if (currentArticleIndex == articleList.length-1){
    teaserArticleIndex_01 = articleList.length-2;
    teaserArticleIndex_02 = articleList.length-3;
    teaserArticleIndex_03 = articleList.length-4;
}else{
    teaserArticleIndex_01 = articleList.length-1;
    teaserArticleIndex_02 = articleList.length-2;
    teaserArticleIndex_03 = articleList.length-3;
};

//let debugString = "Index des Artikels: " +currentArticleIndex+"  -  " + teaserArticleIndex_01+"  -  " + teaserArticleIndex_02+"  -  " + teaserArticleIndex_03;
 //document.body.innerHTML = debugString;

let teaser_img_01 = document.getElementById("teaser-img-01");
teaser_img_01.style.backgroundImage = articleList[teaserArticleIndex_01].teaser_image;
let teaser_link_01 = document.getElementById("teaser-link-01");
teaser_link_01.href = articleList[teaserArticleIndex_01].url;

let teaser_img_02 = document.getElementById("teaser-img-02");
teaser_img_02.style.backgroundImage = articleList[teaserArticleIndex_02].teaser_image;
let teaser_link_02 = document.getElementById("teaser-link-02");
teaser_link_02.href = articleList[teaserArticleIndex_02].url;

let teaser_img_03 = document.getElementById("teaser-img-03");
teaser_img_03.style.backgroundImage = articleList[teaserArticleIndex_03].teaser_image;
let teaser_link_03 = document.getElementById("teaser-link-03");
teaser_link_03.href = articleList[teaserArticleIndex_03].url;

let header_img = document.getElementById("header-img");
header_img.src = articleList[currentArticleIndex].image;
header_img.alt = articleList[currentArticleIndex].alt;