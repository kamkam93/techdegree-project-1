// FSJS - Random Quote Generator
// Create the array of quote objects and name it quotes

var quotes = [ /* Five quotes stored in a function */
  {
    quote: "Theatricality and deception, powerful agents to the uninitiated.",
    source: 'Bane',
    year: 2012
  },
  {
    quote: "No, I am your father.",
    source: 'Darth Vader',
    year: 1980
  },
  {
    quote: "Yes we can.",
    source: 'Barack Obama',
    year: 2008
  },
  {
    quote: "Dude, what do you know about Romona Flowers?",
    source: 'Scott Pilgrim',
    year: 2010
  },
  {
    quote: "Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.",
    source: 'Dory',
    year: 2003
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    source: 'The Godfather',
    year: 1972
  }
];

// getRandomQuuote function

function getRandomQuote(array) {
  var RandomQuote = quotes[Math.floor(Math.random()*quotes.length)]; /* Selects random quote from the quotes array.*/
  return (RandomQuote); /* Returns the randomly selected quote object. */
}

// printQuote funtion

function printQuote() {
  var actualQuote = getRandomQuote(quotes); /* printQuote function calls getRandomQuote */
  var stringOfQuoteProperties = "";
    stringOfQuoteProperties += "<p class="quote"> actualQuote.quote </p> + <p class="source"> actualQuote.source + actualQuote.year </p>"
  if (actualQuote.year.hasOwnProperty()) {
    stringOfQuoteProperties += "<span class="year"> actualQuote.year </span>";
  } else {} /* adds year property of quote, if there is one */
}

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties; /* printQuote function should display the completed HTML */

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote(), false);
