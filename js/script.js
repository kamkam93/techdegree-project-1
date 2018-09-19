// FSJS - Random Quote Generator
var html= "" ;
// Create the array of quote objects and name it quotes
var quotes = [
  {
"quoteText": "Decision is a risk rooted in the courage of being free.",
"quoteAuthor": "Paul Tillich"
}, {
"quoteText": "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
"quoteAuthor": "Mark Twain"
}, {
"quoteText": "The things that one most wants to do are the things that are probably most worth doing.",
"quoteAuthor": "Winifred Holtby"
}, {
"quoteText": "Always bear in mind that your own resolution to succeed is more important than any one thing.",
"quoteAuthor": "Abraham Lincoln"
}, {
"quoteText": "Think as a wise man but communicate in the language of the people.",
"quoteAuthor": "William Yeats"
}, {
"quoteText": "He who obtains has little. He who scatters has much.",
"quoteAuthor": "Lao Tzu"
}, {
"quoteText": "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
"quoteAuthor": "Edward Young"
}, {
"quoteText": "Life is like a sewer. What you get out of it depends on what you put into it.",
"quoteAuthor": "Tom Lehrer"
}
];



// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(arr) {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (randomQuote);
}

// Create the printQuote funtion and name it printQuote

function printQuote() {
  var selectedQuote = getRandomQuote(quotes);
  var html =  `<p class="quote"> ${selectedQuote.quoteText}</p>
<p class="source">${selectedQuote.quoteAuthor}</p>`;
document.getElementById('quote-box').innerHTML = html;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// FSJS - Random Quote Generator
