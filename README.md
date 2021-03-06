# astro-weight

For this assignment, you've been hired by the NASA Jet Propulsion Laboratory to create a simple weight calculator 
that would be used by future astronauts to calculate their weight on the surface of the 9 planets (ok, 8 planets and a dwarf!) 
as well as the moon and the sun of our solar system.

Tasks

Create a folder named dev to store all of your future projects.
For Mac - create a dev folder in your Home Directory.
For Windows - create a dev folder in the top level of your C: drive.

Create a folder named AstroWeightCalculator in your dev folder.

Initialize an empty git repository in AstroWeightCalculator by running git init in the command prompt.

Open this folder in your favorite text editor (Ours is Sublime!)

Create an index.html file and a corresponding index.js file.

Create a basic HTML page, and make sure it has the following HTML elements.

An input element for the user to enter their weight.

A select element for the user to select a planet, populated with option elements where the value attribute is set to the surface gravity for that planet, and the content inside of the option elements represents the name of that planet.

A button element for the user to calculate their weight based on the above inputs.

A p element to display the expected output.

Also make sure you reference your index.js before the </body> tag.

Write the following JavaScript in your index.js file

Generate the display title of the Astro Weight Calculator by reversing the string, 'rotaluclaC thgieW ortsA', using JavaScript and binding the result to a span tag using getElementById() syntax.

Populate the select element options dynamically using this array of objects:
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
