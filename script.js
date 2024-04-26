const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

let quotes = []; // Initialize an empty array to store quotes

async function fetchQuotes() {
    try {
        const response = await fetch('./quotes.json');
        if (!response.ok) {
            throw new Error('Failed to fetch quotes');
        }
        quotes = await response.json();
    } catch (error) {
        console.error(error);
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

// Load quotes using XMLHttpRequest
let http = new XMLHttpRequest();

http.open("GET", "./quotes.json", true);

http.onload = function () {
    if (http.status == 200) {
        quotes = JSON.parse(http.responseText);
        displayQuote(); // Display initial quote after loading
    } else {
        console.error('Failed to fetch quotes');
    }
};

http.send();
