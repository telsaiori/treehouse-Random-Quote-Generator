// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
/*
A quote property which contains a string: the text of the quote that will be displayed on the page.
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
*/


var color = ["pink", "blue", "orange", "grey","red"];
var usedquotes = [];
var quotes;

var quotes = [{
                quote: "You can get help from teachers, but you are going to have to learn a lot by yourself, sitting alone in a room.",
                source: "Dr. Seuss",
                year: 1954
              },{
                quote: "False friendship, like the ivy, decays and ruins the walls it embraces; but true friendship gives new life and animation to the object it supports.",
                source: "Richard Burton",
              },{
                quote: "Where there is love there is life.",
                source: "Mahatma Gandhi"
              },{
                quote: "Did you ever stop to think, and forget to start again?",
                source: "A. A. Milne",
                year: 1962
              },{
                quote: "Beauty provoketh thieves sooner than gold.",
                source: "W. William Shakespeare",
                citation: "As You Like It",
                year: 1599
}];

/*
selects a random quote object from the quotes array
returns the randomly selected quote object
*/

function changeColor(){
  var random_color = Math.floor(Math.random() * color.length);
  return color[random_color];
}

function getRandomQuote(){
  var pass = 1;
  
  if (usedquotes.length === -1){
    usedquotes.push(quote);
  }

  if (usedquotes.length === quotes.length){
    usedquotes = [];
  } 
  
  do{
    var random = Math.floor(Math.random() * quotes.length);
    quote = quotes[random]
    if (usedquotes.indexOf(quote) === -1){
      usedquotes.push(quote);
      pass = 0;
    }
  } while(pass === 1);
  
  return quote;
}

function printQuote(){
  var used;
  var quote = getRandomQuote();
  console.log(quote);
  var html = '<p class="quote">'+ quote["quote"]+ '</p><p class="source">'+ quote["source"]+'</p>';
  
  if (quote.citation != undefined) {
    html += '<span class="citation">'+ quote.citation +'</span>';
  }

  if (quote.year != undefined) {
    html += '<span class="year">'+ quote.year+' </span>';
  }
  document.body.style.backgroundColor = changeColor();
  return document.getElementById('quote-box').innerHTML = html;
}

setInterval(function(){
  printQuote();
},30000);

