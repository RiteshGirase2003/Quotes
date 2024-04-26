const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

let quotes = []; 

async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
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

// Load quotes and display initial quote
fetchQuotes().then(() => {
    displayQuote();
});
