const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
let quotes =[]



let http = new XMLHttpRequest();

http.open("get", "json.json", true);

http.send();

http.onload = function () {


    if (this.readyState == 4 && this.status == 200) 
    {
        quotes = JSON.parse(this.responseText);
        shuffleArray(quotes);
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } 
}


function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent = `- ${author}`;
}

newQuoteBtn.addEventListener('click', displayQuote);

// Initial quote display
displayQuote();
