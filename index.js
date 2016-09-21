// Generate the display title of the Astro Weight Calculator by reversing the string, 'rotaluclaC thgieW ortsA', 
// using JavaScript and binding the result to a span tag using getElementById() syntax










// function reverse(s) {
//   if (s.length < 2)
//     return s;
//   var halfIndex = Math.ceil(s.length / 2);
//   return reverse(s.substr(halfIndex)) +
//          reverse(s.substr(0, halfIndex));
// }

var planets = [
	  {planet: 'Sun', gravity: 27.9},
	  {planet: 'Mercury', gravity: 0.377},
	  {planet: 'Venus', gravity: 0.9032},
	  {planet: 'Earth', gravity: 1},
	  {planet: 'Moon', gravity: 0.1655},
	  {planet: 'Mars', gravity: 0.3895},
	  {planet: 'Jupiter', gravity: 2.640},
	  {planet: 'Saturn', gravity: 1.139},
	  {planet: 'Uranus', gravity: 0.917},
	  {planet: 'Neptune', gravity: 1.148},
	  {planet: 'Pluto', gravity: 0.06}
	];

function calculateWeight() {
	
	var myWeight = document.getElementById("myWeight").value;
	var myPlanet = document.getElementById("planet");
	var myPlanetSelection = document.getElementById("planet")[document.getElementById("planet").selectedIndex].text;

	var gravity=myPlanet.options[myPlanet.selectedIndex].value;

	var answer = myWeight * gravity;
	answer = Math.round(answer*100)/100;

	var myOutput = "If you were on " + myPlanetSelection + ", you would weigh " + answer + " lbs!"; 
	document.getElementById("myOutput").innerHTML=myOutput;
	

}

// - Create a function that will be called when the user clicks on the `button` element you added to your HTML.
// - This function should grab the values entered by the user from the `input` element and the `select` element.
// - The function should then calculate the weight of the user on the selected planet, 
// - and show the weight to the user in the `p` element you added to your HTML.