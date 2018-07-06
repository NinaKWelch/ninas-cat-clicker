// load the first image when window opens
window.onload = loadImage;


// VARIABLES
var elem = document.getElementById('my-elem');
var catImages = document.createElement('img');
var catNames = document.querySelector('.cat-name');
var clicker = document.querySelector('.counter');
var clicks = 0;

clicker.textContent = 'Clicks: ' + 0;

// CONSTRUCTOR FUNCTION
var Cat = function(name) {
	this.image = 'img/cat1.jpg';
	this.name = name;
};

// OBJECTS
var cat1 = new Cat('Cat1');
var cat2 = new Cat('Cat2');
var cat3 = new Cat('Cat3');
var cat4 = new Cat('Cat4');
var cat5 = new Cat('Cat5');

// OBJECT PROPERTIES
cat2.image = 'img/cat2.jpg';
cat3.image = 'img/cat3.jpg';
cat4.image = 'img/cat4.jpg';
cat5.image = 'img/cat5.jpg';

// ARRAY
var cats = [cat1, cat2, cat3, cat4, cat5];

// FUNCTIONS
function loadImage() {
	elem.appendChild(catImages);
	catImages.src = cat1.image;
	catNames.textContent = cat1.name;
};

function changeImage() {
	if (clicks > 4) {
		clicker.textContent = 'No more cats!';
	} else {
	 	// change cat image src by array index; index = clicks
		catImages.src = cats[clicks].image;
		// append img element
		elem.appendChild(catImages);
		// change cat name
		catNames.textContent = cats[clicks].name;
	};
};

function countClicks() {
	// count each click
	clicks++;
	// display clicks
	clicker.textContent = 'Clicks: ' + clicks;
	changeImage();
};

// EVENT LISTENER
elem.addEventListener('click', function(){
  countClicks();
}, false);