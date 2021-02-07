import { articleList } from "./songList.js";

const type = document.getElementById("type").innerHTML;



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

