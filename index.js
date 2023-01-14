AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");

let realData = "";
quotesData = "";
const tweetNow = ()=>{
  let  tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
  window.open(tweetPost)
}
const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 20);
  quotesData = realData[rnum];
  console.log(rnum);
  quotes.innerText = `${quotesData.text}`;
  quotesData.author === null
    ? (author.innertext = unknown)
    : (author.innerText = `${quotesData.author}`);
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();

    // console.log(realData[0]);
  } catch (error) {}
};
tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);

getQuotes();