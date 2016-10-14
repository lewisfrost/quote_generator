
//create quotes

var quotes = [
	{
		quote: 'I have come to the conclusion that politics are too serious a matter to be left to the politicians.',
		source: 'Charles De Gaulle'
	},
	{
		quote: 'We are not interested in the possibilities of defeat; they do not exist.',
		source: 'Queen Victoria'
	},
	{
		quote: 'The revolution... is a dictatorship of the exploited against the exploiters.',
		source: 'Fidel Castro'
	},
	{
		quote: 'We shall defend our island, whatever the cost may be.',
		source: 'Sir Winston Churchill'
	},
	{
		quote: 'Those who refuse to learn from history are condemned to repeat it.',
		source: 'George Santayana'
	},
	{
		quote: 'Ask not what your country can do for you; ask what you can do for your country.',
		source: 'John Fitzgerald Kennedy'
	},

]

// blank array to create quote index
var availableQuotes = [];

// function to fill the availableQuotes with all the quote indexes
function retrieveQuotes(quote,index){
    availableQuotes.push(index);
}
quotes.forEach(retrieveQuotes);

// random quote function
var getRandomQuote = function getRandomQuote() {
    if (availableQuotes.length < 1){
        quotes.forEach(retrieveQuotes);
    }

    // generate a random number 
    var randomNumber = Math.floor(Math.random() * availableQuotes.length);

    // get index
    var quoteIndex = availableQuotes[randomNumber];

    // remove the index from the availableQuotes array as its going to be used
    availableQuotes.splice(randomNumber, 1);

    return quotes[quoteIndex];

};

// print random function
var printQuote = function printQuote(quoteObject) {

    var newQuote;

    if (quoteObject.source) {
        newQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source + '</span> </p>';
    } else {
        newQuote = '<p class="quote">' + quoteObject.quote  + '</p>';
    }

    document.getElementById('quote-box').innerHTML = newQuote;

};


// event listener to respond to clicks on the page
// when user clicks the loadQuote button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click",
    function() {
        printQuote(getRandomQuote());
    }, false);

