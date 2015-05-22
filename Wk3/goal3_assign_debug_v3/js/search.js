/*

	Kellie Pickering
	May 22nd, 2015
	Programming for Web Applications I
	ANALYZE Buggy Search v3

 */

(function(){																			// Create privatized scope using a self-executing function
	
																						// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),								// Create a variable for div container displaying search results
		searchInput = document.forms[0].search,											// Create a variable for search input text area
		currentSearch = ''																// Create a variable that holds the current search
	;

	var validate = function(query){														// Validates search query
		
																						// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){													// While the first character in the search query is a space,
			query = query.substring(1, query.length);									// Convert search query from second character to  last character
		}

		while(query.charAt(query.length-1) === " "){									// While the last character in the search query is a space,
			query = query.substring(0, query.length-2);									// Convert search query from first character to second-to-last character
		}

																						// Check search length, must have 3 characters
		if(query.length < 3){															// IF search term is less than three characters long,
			alert("Your search query is too small, try again.");						// alert the user
			
																						// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();														// Set focus on the search input text area
			return;																		// End the function and return the value
		}
		search(query);																	// When all criteria for search query is met, initialize the search
	};

	var search = function(query){														// Finds search matches

		var queryArray = query.split(" ");												// split the user's search query string into an array
		var results = [];																// array to store matched results from database.js

		for(var i=0, j=db.length; i<j; i++) {											// loop through each index of db array

			var dbTitleEnd = db[i].indexOf('|');										// each db[i] is a single video item, each title ends with a pipe "|"
			var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);					// save a lowercase variable of the video title

			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {					// loop through the user's search query words
				var qItem = queryArray[ii].toLowerCase();								// save a lowercase variable of the search keyword

				var compare = dbItem.indexOf(qItem);									// is the keyword anywhere in the video title?
				if (compare !== -1) {													// If a match is found (compare does not equal zero),
					results.push(db[i]);												// push full db[i] into results array
				}
			}
		}

		results.sort();																	// Place the search results in alphanumerical order
		
																						// Check that matches were found, and run output functions
		if(results.length == 0){														// IF there are zero results,
			noMatch();																	// Call the noMatch function
		}else{																			// ELSE,
			showMatches(results);														// Call the showMatches function and pass the results as an argument
		}
	};

	var noMatch = function(){															// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;													// Assign the message to the results div
	};

	var showMatches = function(results){												// Put matches into page as paragraphs with anchors

		var html = '<p>Results</p>', 													// THE NEXT 4 LINES ARE CORRECT.
			title, 
			url
		;

		for(var i=0, j=results.length; i<j; i++){										// loop through all the results search() function

			titleEnd = results[i].indexOf('|');											// title of video ends with pipe
			title = results[i].substring(0, titleEnd);									// pull the title's string using index numbers

			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);	// pull the video url after the title

			html += '<p><a href=' + url + '>' + title + '</a></p>';						// make the video link - THE NEXT LINE IS CORRECT
		}
		resultsDIV.innerHTML = html; 													//THIS LINE IS CORRECT
	};
	
																						// The onsubmit event will be reviewed in upcoming Course Material
																						// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {											// Submit a search query (by clicking a button) to initialize the function
		var query = searchInput.value;													// Assign the search query to a variable
		validate(query);																// Validate the query by calling the validate function

																						// return false is needed for most events - this will be reviewed in upcoming course material
																						// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	}

})();