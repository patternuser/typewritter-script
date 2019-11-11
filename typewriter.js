// Replace the placeholder values with your own (i.e. .yourClass)
// The markup this script uses should be formated like the below example
// <h1 data-typewriter="Your Headline."></h1>

window.addEventListener('load', function() {
	var i = 0;
  var txt = document.querySelector('.yourClass').dataset.typewriter;
	function speed(){
	 	return Math.floor(Math.random()*(200-50+1)+40);
	}
	function typeWriter(){
	  if (i < txt.length){
	    document.getElementById('typewriter').innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed());
	  }
	}
    typeWriter();
});
