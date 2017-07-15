
/// Fade-in on index page & quotes fade loop

$(document).ready(function() {
	$('.centered').fadeIn(2000);

	var allQuotes = $('blockquote');
	var currentQuote = 0;

	function changeQuote() {
			$(allQuotes[currentQuote]).fadeOut(200, function() {

				if(currentQuote == allQuotes.length -1) {
					currentQuote = 0;
				}	else {
					currentQuote++;
				}

				$(allQuotes[currentQuote]).fadeIn(200);
		});
	}
			var quoteTimer = setInterval(changeQuote, 6000);	
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
