var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";


function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}
function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = "Unknown author";
	}
	var tweetText = "Quote of the day - " + input.quoteText + " ~ " + input.quoteAuthor;
	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote-start').text("Quote of the day - ");
		$('.quote-content').text(input.quoteText);
		$('.author').text(" ~ " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
	$('.quote-content').css('font-family', 'Courgette');
}
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});