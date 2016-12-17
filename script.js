function passToTwitter() {document.getElementById("twitter").href = "https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerHTML + " - " + document.getElementById("author").innerHTML;}

passToTwitter();

function newQuote() {
  var nr = Math.floor(Math.random()*quoteList.length);
  
  document.getElementById("quote").innerHTML = quoteList[nr].quote;
  document.getElementById("author").innerHTML = quoteList[nr].author;
  
  passToTwitter();
}

var quoteList = [{"quote":"Are right and wrong convertible terms, dependant upon popular opinion?", "author":"William Lloyd Garrison"}, {"quote":"The more I think about it, the more I realize there is nothing more artistic than to love others.", "author":"Vincent Van Gogh"}, {"quote":"No heirloom of humankind captures the past as do art and language.", "author":"Theodore Bikel"}, {"quote":"Thinking is one thing no one has ever been able to tax.", "author":"Charles Kettering"}, {"quote":"It's always too early to quit.", "author":"Norman Vincent Peale"}, {"quote":"There is no prejudice that the work of art does not finally overcome.", "author":"Andre Gide"}, {"quote":"Love is not altogether a delirium, yet it has many points in common therewith.", "author":"Thomas Carlyle"}];

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

