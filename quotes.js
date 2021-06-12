const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
let realData = "";
let quotesData = "";


const tweetNow = () =>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
};

const getNewQuotes = () =>{
    let rNum = Math.floor(Math.random()*20);
    quotesData = realData[rNum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author === null
    ? (author.innerText= "Unknown")
    : (author.innerText = `${quotesData.author}`);
}
const getQuotes = async () =>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    }catch(error){}
}
newQ.addEventListener("click",getNewQuotes);
getQuotes();