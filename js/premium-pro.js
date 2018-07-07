/* ======= Model ======= */

var model = {
	// property to show the chosen cat
	currentCat: null,
	// array method for cats
	cats: [
	// cat objects with properties
		{
			name: 'cat1',
			imgSrc: 'img/cat1.jpg',
			clicks: 0
		},
		{
			name: 'cat2',
			imgSrc: 'img/cat2.jpg',
			clicks: 0
		},
		{
			name: 'cat3',
			imgSrc: 'img/cat3.jpg',
			clicks: 0
		},
		{
			name: 'cat4',
			imgSrc: 'img/cat4.jpg',
			clicks: 0
		},
		{
			name: 'cat5',
			imgSrc: 'img/cat5.jpg',
			clicks: 0
		}
	]
};


/* ======= Views ======= */

var catsView = {

	init: function() {
        // store the DOM element for easy access later
        this.catImageItem = document.querySelector('.cat-img');
        this.catNameItem = document.querySelector('.cat-name');
        this.countItem = document.querySelector('.click-count');

        // on click, increment the current cat's counter
        this.catImageItem.addEventListener('click', function(){
            octopus.clickCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();


	},

	render: function() {
		// get current cat form the octopus
		var currentCat = octopus.getCurrentCat();

		// get the current cat object
        this.catImageItem.src = currentCat.imgSrc;
        this.catNameItem.textContent = currentCat.name;
        this.countItem.textContent = 'Total Clicks: ' + currentCat.clicks;
	}
};


var catListView = {

	init: function() {
		// store the DOM element for easy access later
        this.catListItem = document.querySelector('.cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
	},

	render: function() {
	    // get the cats array from the octopus
		var cats = octopus.getCats();

        // loop over the cats
        for (var i = 0; i < cats.length; i++) {
            // variable for the current cat
            var cat = cats[i];

            // make a new cat list item and set its text
            var item = document.createElement('li');
            item.textContent = cat.name;

            // on click, setCurrentCat and render the catsView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            item.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    octopus.clickCounter();
                    catsView.render();
                };
            })(cat));

            // add the item to the list
        	this.catListItem.appendChild(item);
        };
	}
};



/* ======= Octopus ======= */


var octopus = {
	init: function() {
		    // set our current cat to the first one in the list
        	model.currentCat = model.cats[0];

            // initialize the view
            catListView.init();
            catsView.init();
	},

    getCats: function() {
        return model.cats;
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    clickCounter: function() {
        model.currentCat.clicks++;
        catsView.render();
    }
};

// Tell browser to render the page
octopus.init();
