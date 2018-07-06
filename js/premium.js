// VARIABLES
var elem = document.createElement('div');
var catList = document.createElement('ul');
var catImage = document.createElement('img');
var catName = document.createElement('h5');
var clickCount = document.createElement('span');

// CONSTRUCTOR FUNCTION
var Cat = function(name, clicks) {
    this.image = 'img/cat1.jpg';
    this.name = name;
    this.clicks = clicks;
};

// OBJECTS
var cat1 = new Cat('Cat1', 1);
var cat2 = new Cat('Cat2', 1);
var cat3 = new Cat('Cat3', 1);
var cat4 = new Cat('Cat4', 1);
var cat5 = new Cat('Cat5', 1);

// OBJECT PROPERTIES
cat2.image = 'img/cat2.jpg';
cat3.image = 'img/cat3.jpg';
cat4.image = 'img/cat4.jpg';
cat5.image = 'img/cat5.jpg';

// ARRAY
var cats = [cat1, cat2, cat3, cat4, cat5];

//FUNCTION
function loadImage() {
    elem.appendChild(catImage);
    catImage.src = cat1.image;
    elem.appendChild(catName);
    catName.textContent = cat1.name;
};


// EVENT  LISTENER
// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the cats
    var catListItem = document.createElement('li');
    catListItem.textContent = cat.name;

    // ... and when we click, alert the value of `cat`
    catListItem.addEventListener('click', (function(catCopy) {
        return function() {
            elem.appendChild(catImage);
            catImage.src = catCopy.image;

            elem.appendChild(catName);
            catName.textContent = catCopy.name;

            elem.appendChild(clickCount);
            clickCount.textContent = 'Total clicks: ' + catCopy.clicks++;

        };
    })(cat));


    document.body.appendChild(elem);
    elem.appendChild(catList);
    catList.appendChild(catListItem);
};

// load the first image when window opens
window.onload = loadImage;
